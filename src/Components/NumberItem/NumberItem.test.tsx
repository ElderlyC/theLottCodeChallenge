import { render } from "@testing-library/react";
import NumberItem from "./NumberItem";

test('element with className "selectedNumber" has value "18"', () => {
  const { container } = render(<NumberItem number={18} isSelected={true} />);

  // Query the element by its class name
  const selectedNumberElement = container.querySelector(".selected");

  // Assert that the element exists and its text content is "X18" (crossed out from being selected)
  expect(selectedNumberElement).toBeInTheDocument();
  expect(selectedNumberElement?.textContent).toBe("X18");
});
