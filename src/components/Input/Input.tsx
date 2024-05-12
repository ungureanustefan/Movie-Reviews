import { ChangeEvent } from "react";
import { TextField } from "@mui/material";

type InputProps = {
  setValue: (value: string) => void;
  label?: string;
  error?: string;
  multiline?: boolean;
  rows?: number;
};

function Input({
  setValue,
  label,
  error,
  multiline = false,
  rows,
}: InputProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <>
      <TextField
        error={!!error}
        id="outlined-error-helper-text"
        label={label}
        defaultValue="Hello World"
        helperText={error}
        onChange={handleChange}
        multiline={multiline}
        rows={rows}
      />
    </>
  );
}

export default Input;
