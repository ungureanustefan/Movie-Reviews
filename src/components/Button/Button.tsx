import { Button as MUIButton } from "@mui/material";

type ButtonProps = {
  children: string;
  variant?: "text" | "contained" | "outlined";
  handleClick?: () => void;
  size?: "small" | "medium" | "large";
};

function Button({ children, handleClick, variant, size }: ButtonProps) {
  return (
    <MUIButton
      onClick={handleClick}
      variant={variant}
      size={size}
      sx={{ height: "100%", alignSelf: "center" }}
    >
      {children}
    </MUIButton>
  );
}

export default Button;
