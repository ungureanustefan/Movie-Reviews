import { createElement } from "react";

type TextElementType = "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface TextProps {
  as?: TextElementType;
  children: React.ReactNode;
  [key: string]: any;
}

function Text({ as = "p", children, ...rest }: TextProps) {
  if (!["span", "p", "h1", "h2", "h3", "h4", "h5", "h6"].includes(as)) {
    return;
  }

  return createElement(as, rest, children);
}

export default Text;
