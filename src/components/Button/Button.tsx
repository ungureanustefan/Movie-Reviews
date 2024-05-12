import { Button as MUIButton } from "@mui/material";

type ButtonProps = {
  children: string;
  variant?: "text" | "contained" | "outlined";
  handleClick?: () => void;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
};

function Button({
  children,
  handleClick,
  variant,
  size,
  disabled,
}: ButtonProps) {
  return (
    <MUIButton
      onClick={handleClick}
      variant={variant}
      size={size}
      sx={{ height: "100%", width: "fit-content" }}
      disabled={disabled}
    >
      {children}
    </MUIButton>
  );
}

export default Button;
