import React from "react";
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import {ConsoleHeader} from "../ConsoleHeader";
import {BasicTable, PaginatedTable} from "../DataTable";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton"
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function Courses() {
  const navigate = useNavigate();

  const consoleActions = (
    <>
      <Button
        variant="contained"
        onClick={() => navigate('/create-course')}
      >Create Course</Button>
    </>
  );

  const coursesFn = () => {
    let values = [];
    let keys = Object.keys(window.localStorage).filter(key => key.startsWith('uc/course/'));
    let i = keys.length;

    while ( i-- ) {
      values.push(window.localStorage.getItem(keys[i]));
    }

    return values;
  }
  const items = coursesFn();

  const handleOnClick = () => {
    navigate('/comp-program');
  };

  return (
    <>
      <ConsoleHeader title="Courses" actions={consoleActions}>
        View and manage your courses.
      </ConsoleHeader>
      <BasicTable
        columnDefinitions={[
          { id: 'title', head: '', cell: item => (
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Grid container direction="column">
                  <Stack direction="row" gap={1} alignItems="center">
                    <div>
                      {JSON.parse(item || '').title}
                    </div>

                    {JSON.parse(item || '').tags.map((tag: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined, idx: any) => (
                        <Chip size="small" label={tag} variant="outlined" key={`${idx}-${JSON.parse(item || '').id}`}/>
                      ))}
                  </Stack>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant="body1">
                        Professor: {JSON.parse(item || '').professor}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>)},
          { id: 'date', head: '', cell: item => (
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="body1">
                  Started on {JSON.parse(item || '').startDate}
                </Typography>
              </Grid>
            </Grid>
          )},
          { id: 'actions', head: '', cell: item => (
              <IconButton onClick={handleOnClick}>
                <ArrowForwardIosIcon />
              </IconButton>
            ) },
        ]}
        showHeading={false}
        items={items}
        isLoading={false}
      />
    </>
  );
}