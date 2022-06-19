import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";

export interface Props<T> {
  readonly columnDefinitions: ColumnDefinition<T>[];
  readonly isLoading: boolean;
  readonly showHeading: boolean;
  readonly disablePaper?: boolean;
  readonly items: T[];
}

export interface ColumnDefinition<T> {
  readonly id: string;
  readonly head: React.ReactNode;
  readonly cell: (item: T) => React.ReactNode;
}

export function BasicTable<T>(props: Props<T>) {
  const {items, columnDefinitions, isLoading, showHeading, disablePaper} = props;

  return (
    <TableContainer component={!disablePaper ? Paper : 'div'}>
      <Table stickyHeader sx={{minWidth: 500}}>
        {showHeading && <TableHead>
          <TableRow>
            {columnDefinitions.map(c => (
              <TableCell key={c.id}>{c.head}</TableCell>
            ))}
          </TableRow>
        </TableHead>}
        <TableBody>
          {!isLoading && items.map((item, idx) => (
            <TableRow key={idx}>
              {columnDefinitions.map(column => (
                <TableCell key={`${idx}-${column.id}`}>
                  {column.cell(item)}
                </TableCell>
              ))}
            </TableRow>
          ))}
          {isLoading && <TableRow>
              <TableCell colSpan={columnDefinitions.length}>Loading...</TableCell>
          </TableRow>}
        </TableBody>
      </Table>
    </TableContainer>
  );
}