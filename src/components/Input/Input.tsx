import { TextField } from "@mui/material";
import { ChangeEvent } from "react";

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
        helperText={error}
        onChange={handleChange}
        multiline={multiline}
        rows={rows}
        fullWidth
      />
    </>
  );
}

export default Input;
