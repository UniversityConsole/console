import React from 'react';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePaginationActions from "./Pagination";

export interface Props<T> {
  readonly columnDefinitions: ColumnDefinition<T>[];
  readonly isLoading: boolean;
  readonly items: T[];
}

export interface ColumnDefinition<T> {
  readonly id: string;
  readonly head: React.ReactNode;
  readonly cell: (item: T) => React.ReactNode;
}

export function PaginatedTable<T>(props: Props<T>) {
  const {items, columnDefinitions, isLoading} = props;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - items.length) : 0;

  const pageItems = rowsPerPage > 0
    ? items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    : items;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader sx={{minWidth: 500}}>
        <TableHead>
          <TableRow>
            {columnDefinitions.map(c => (
              <TableCell key={c.id}>{c.head}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {!isLoading && pageItems.map((item, idx) => (
            <TableRow key={idx}>
              {columnDefinitions.map(column => (
                <TableCell key={`${idx}-${column.id}`}>
                  {column.cell(item)}
                </TableCell>
              ))}
            </TableRow>
          ))}
          {!isLoading && emptyRows > 0 && (
            <TableRow style={{height: 53 * emptyRows}}>
              <TableCell colSpan={columnDefinitions.length}/>
            </TableRow>
          )}
          {isLoading && <TableRow>
              <TableCell colSpan={columnDefinitions.length}>Loading...</TableCell>
          </TableRow>}
        </TableBody>
        {!isLoading && <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, {label: 'All', value: -1}]}
              colSpan={columnDefinitions.length}
              count={items.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>}
      </Table>
    </TableContainer>
  );
}