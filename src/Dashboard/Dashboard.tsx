import React from "react";
import {ConsoleHeader} from "../ConsoleHeader";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import {PaginatedTable} from "../DataTable";

export default function Dashboard() {
  const courses = [
    { id: '1', title: "Computer Programming", lessons: "18/40 (48%)", professor: "Torsten Paulsson"},
    { id: '2', title: "Data Structures", lessons: "21/23 (97%)", professor: "Nout Golstein"},
    { id: '3', title: "Algorithms", lessons: "18/40 (48%)", professor: "Torsten Paulsson"},

  ]
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
                3
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
      <Typography variant="h2" sx={{mb: '15px'}}>
        Your active courses
      </Typography>
      <PaginatedTable
        columnDefinitions={[
          { id: 'name', head: 'Course Title', cell: item => item.title },
          { id: 'name', head: 'Lessons Completed', cell: item => item.lessons },
          { id: 'name', head: 'Professor', cell: item => item.professor },
        ]}
        isLoading={false}
        items={courses}
      />
    </>
  )
};