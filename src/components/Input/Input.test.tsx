import { ChangeEvent } from "react";
import { render, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("Input component", () => {
  test("displays error message when error prop is provided", () => {
    const { getByText } = render(
      <Input setValue={() => {}} error="Test Error" />
    );
    const errorElement = getByText("Test Error");
    expect(errorElement).toBeDefined();
  });
});
