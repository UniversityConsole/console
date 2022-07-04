import {ConsoleHeader} from "../ConsoleHeader";
import * as React from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField, {TextFieldProps} from "@mui/material/TextField";
import styles from "../CreateAccount/styles.scss";
import Button from "@mui/material/Button";
import {FormEventHandler, useState} from "react";
import {LocalStorageEndpoint} from "../CoursesEndpoint/LocalStorageEndpoint";
import {CreateCourseOutput} from "../CoursesEndpoint/types";
import {useNavigate} from "react-router-dom";
import {TagsEditor} from "./TagsEditor";

export default function CreateCourse() {
  const [isLoading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [professor, setProfessor] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [startDate, setStartDate] = useState<string>('');
  const navigate = useNavigate();

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (startDate === null) {
      return;
    }

    setLoading(true);

    LocalStorageEndpoint.createCourse({title, professor, tags, startDate: new Date(startDate), courseMaterials: []})
      .then((output: CreateCourseOutput) => {
        setLoading(false);
        navigate('/courses');
      });
  };

  const onDeleteTag = (idx: number) => {
    const newTags = [...tags.slice(0, idx), ...tags.slice(idx + 1)];
    setTags(newTags);
  };

  const onAddTag = (tag: string) => {
    setTags([...tags, tag]);
  };

  return <>
    <ConsoleHeader title="Create Course">
      Register a new course in University Console.
    </ConsoleHeader>
    <Container component={Paper}>
      <Box
        component="form"
        onSubmit={onSubmit}
      >
        <FormControl>
          <TextField
            required
            label="Title"
            fullWidth
            margin="normal"
            size="small"
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <TextField
            required
            label="Professor"
            fullWidth
            margin="normal"
            size="small"
            type="text"
            value={professor}
            onChange={e => setProfessor(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <TagsEditor tags={tags} onDelete={onDeleteTag} onAdd={onAddTag}/>
        </FormControl>
        <FormControl>
            <TextField
              type="date"
              value={startDate}
              onChange={e => setStartDate(e.target.value)}
            />
        </FormControl>
        <div className={styles.root}>
          <Button variant="contained" type="submit" disabled={isLoading}>
            {isLoading ? 'Creating Course...' : 'Create Course'}
          </Button>
        </div>
      </Box>
    </Container>
  </>
}