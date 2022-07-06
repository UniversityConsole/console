import React from "react";
import Chip from "@mui/material/Chip";
import {BasicTable} from "../DataTable";
import {CourseMaterial, prettyPrintCourseMaterialType} from "../CoursesEndpoint/types";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useNavigate, useParams} from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import {CardActionArea} from "@mui/material";

export default function Course() {
  const {courseId} = useParams();
  const navigate = useNavigate();

  if (window.localStorage.getItem(`uc/course/${courseId}`) === null) {
    navigate('/courses');
  }

  const courseObj = window.localStorage.getItem(`uc/course/${courseId}`);

  if (courseObj === null) {
    navigate('/courses');
    throw new Error("Course not found");
  }

  const course = JSON.parse(courseObj);
  const resources = course.courseMaterials;

  return (
    <>
      <Typography variant="h1">
        {course.title}
      </Typography>
      <div>
        {course.tags.map((tag: string, idx: number) => (
          <Chip size="small" label={tag} variant="outlined" key={`${idx}-${courseId}`}/>
        ))}
      </div>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography variant="body1">
                Assignments
              </Typography>
              <Typography variant="h2">
                {course.courseMaterials.length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardActionArea sx={{padding: '33px 16px 33px 16px', alignContent: "center"}}>
              <Typography variant="h2" textAlign="center">
                View Catalog
              </Typography>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <Grid container direction="column">
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography sx={{fontSize: '1rem', fontWeight: '600'}}>
                About this course
              </Typography>
              <Divider/>
              <Typography variant="body1">
                {course.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Card>
        <CardContent>
          <div style={{display: "flex", position: "relative", alignItems: "center", marginBottom: 0}}>
            <Typography sx={{fontSize: '1rem', fontWeight: '600'}}>
              Resources
            </Typography>
            <Button sx={{right: '10px', position: "absolute"}} variant="contained" onClick={() => { navigate(`/courses/${course.courseId}/create-material`)}}>
              Create
            </Button>
          </div>
        </CardContent>
      </Card>
      <BasicTable
        columnDefinitions={[
          {id: 'Resource', head: 'Resource', cell: (item: CourseMaterial) => (
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Grid container direction="column">
                    <Stack direction="row" gap={1} alignItems="center">
                      {item.title}
                      <Chip
                        size="small"
                        label={prettyPrintCourseMaterialType(item.type)}
                        variant="outlined" key={`${item.id}`}/>
                    </Stack>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography variant="body1">
                          Owner: {item.owner}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            )},
          {id: 'date', head: '', cell: item => item.id },
        ]}
        isLoading={false}
        showHeading={false}
        items={resources || []}
      />
    </>
  );
};
