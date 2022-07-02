import Typography from "@mui/material/Typography";
import React, {ChangeEvent, MouseEventHandler} from "react";
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import {ConsoleHeader} from "../ConsoleHeader";
import {PaginatedTable} from "../DataTable";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {IconButton} from "@mui/material";

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

  const handleOnClick = () => {
    navigate('/comp-program');
  };

  return (
    <>
      <ConsoleHeader title="Courses" actions={consoleActions}>
        View and manage your courses.
      </ConsoleHeader>
      <PaginatedTable
        columnDefinitions={[
          { id: 'actions', head: '', cell: item => (
              <IconButton onClick={handleOnClick}>
                <ArrowForwardIosIcon />
              </IconButton>
            ) },
        ]}
        items={[]}
        isLoading={false}
      />
    </>
  );
}