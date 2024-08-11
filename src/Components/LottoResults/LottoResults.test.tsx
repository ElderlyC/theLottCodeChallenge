import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LottoResults from "./LottoResults";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

const mock = new MockAdapter(axios);

const mockData = {
  DrawResults: [
    {
      PrimaryNumbers: [11, 12, 13, 14, 15, 16, 17],
      SecondaryNumbers: [18],
    },
  ],
};

test("checks if all 8 elements have the 'selected' class after autofill", async () => {
  mock
    .onPost(
      "https://data.api.thelott.com/sales/vmax/web/data/lotto/latestresults"
    )
    .reply(200, mockData);

  const { container } = render(<LottoResults />);

  await waitFor(() => {
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });

  // Simulate clicking the autofill button
  const autofillButton = screen.getByTestId("autofill-button");
  fireEvent.click(autofillButton);

  await waitFor(() => {
    const selectedElements = container.querySelectorAll("div.circle.selected");
    expect(selectedElements.length).toBe(
      mockData.DrawResults[0].PrimaryNumbers.length +
        mockData.DrawResults[0].SecondaryNumbers.length
    );
  });
});

test("checks if all elements are reset after reset button clicked", async () => {
  mock
    .onPost(
      "https://data.api.thelott.com/sales/vmax/web/data/lotto/latestresults"
    )
    .reply(200, mockData);

  const { container } = render(<LottoResults />);

  await waitFor(() => {
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });

  // Simulate clicking the autofill button
  const resetButton = screen.getByTestId("reset-button");
  fireEvent.click(resetButton);

  await waitFor(() => {
    const selectedElements = container.querySelectorAll("div.selected");
    expect(selectedElements.length).toBe(0);
  });
});
