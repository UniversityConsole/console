import React from "react";
import {ConsoleHeader} from "../ConsoleHeader";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import {PaginatedTable} from "../DataTable";

export default function Dashboard() {
  const coursesFN = () => {
    let values = [];
    let keys = Object.keys(window.localStorage).filter(key => key.startsWith('uc/course/'));
    let i = keys.length;

    while ( i-- ) {
      values.push(window.localStorage.getItem(keys[i]));
    }

    return values;
  }

  const courses = coursesFN();

  return (
    <>
      <ConsoleHeader title="Dashboard"/>
      <Typography variant="h2">
        Your stats
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography variant="body1">
                Active courses
              </Typography>
              <Typography variant="h2">
                {courses.length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography variant="body1">
                Assignments due
              </Typography>
              <Typography variant="h2">
                0
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Typography variant="h2">
        Your active courses
      </Typography>
      <PaginatedTable
        columnDefinitions={[
          { id: 'name', head: 'Course Title', cell: item => JSON.parse(item || '').title },
          { id: 'lessons', head: 'Lessons Completed', cell: item =>
              JSON.parse(item || '').courseMaterials ? `0 / ${JSON.parse(item || '').courseMaterials.length}`: '0 / 0'
          },
          { id: 'prof', head: 'Professor', cell: item => JSON.parse(item || '').professor },
        ]}
        isLoading={false}
        items={courses}
      />
    </>
  )
};
