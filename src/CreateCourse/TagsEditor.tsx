import React, {KeyboardEvent, useRef} from "react";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";

interface Props {
  readonly tags: string[];
  readonly onDelete: (idx: number) => void;
  readonly onAdd: (tag: string) => void;
}

export function TagsEditor(props: Props) {
  const {tags, onDelete, onAdd} = props;
  const inputRef = useRef<HTMLInputElement | null>();

  return (
    <TextField
      label="Tags"
      inputRef={inputRef}
      placeholder={tags.length < 5 ? "Enter tags" : ""}
      fullWidth
      margin="normal"
      size="small"
      onKeyDownCapture={(e: KeyboardEvent<HTMLInputElement>) => {
        console.log(e.key);
        const submitKeys = ['Tab', 'Enter'];
        if (submitKeys.includes(e.key) && inputRef.current) {
          e.preventDefault();
          inputRef.current.value && onAdd(inputRef.current.value);
          inputRef.current.value = '';
        }
      }}
      InputProps={{
        startAdornment: (
          <Stack direction='row' gap={1} sx={{mr: 1}}>
            {tags.map((tag, idx) => (
              <Chip
                label={tag}
                variant="outlined"
                onDelete={() => onDelete(idx)}
                key={idx}
                size="small"
              />
            ))}
          </Stack>
        ),
      }}
    />

  );
}