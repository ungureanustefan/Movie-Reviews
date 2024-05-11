interface ButtonProps {
  children: string;
}

function Button({ children }: ButtonProps) {
  return <button>{children}</button>;
}

export default Button;
