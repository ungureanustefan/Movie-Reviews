import { render } from "@testing-library/react";
import Text from "./Text";

describe("Text component", () => {
  test("renders text with default 'p' element", () => {
    const { getByText } = render(<Text>Test Text</Text>);
    const textElement = getByText("Test Text");
    expect(textElement.tagName).toBe("P");
  });

  test("renders text with specified element type", () => {
    const { getByText } = render(<Text as="span">Test Text</Text>);
    const textElement = getByText("Test Text");
    expect(textElement.tagName).toBe("SPAN");
  });

  test("passes additional props to the element", () => {
    const { getByTestId } = render(
      <Text as="h1" data-testid="test-id">
        Test Heading
      </Text>
    );
    const headingElement = getByTestId("test-id");
    expect(headingElement.tagName).toBe("H1");
    expect(headingElement.textContent).toBe("Test Heading");
  });
});
