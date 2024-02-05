import { it, expect, describe } from "vitest";
import { render, within } from "@testing-library/react";
import CostsListColumn from "../components/CostListColumn";
import { inputCosts } from "./mocks";


function checkRowContents(row: any, person: string, concept: string, amount: number) {
  const columns = within(row).getAllByRole("cell");
  expect(columns).toHaveLength(4);
  expect(columns[0]).toHaveTextContent(person);
  expect(columns[1]).toHaveTextContent(concept);
  expect(columns[3]).toHaveTextContent(amount.toString());
}

describe("CostsListColumn.tsx", () => {
  it("Should render the table according to the costs array", () => {
    const { getByTestId } = render(<CostsListColumn costs={inputCosts} />);
    const table = getByTestId("costs-table");

    const tbody = within(table).getAllByRole("rowgroup")[1];
    const rows = within(tbody).getAllByRole("row");

    expect(rows.length).toBe(inputCosts.length);
  });

  it("Should render the correct information", () => {
    const { getByTestId } = render(<CostsListColumn costs={inputCosts} />);
    const table = getByTestId("costs-table");
    const tbody = within(table).getAllByRole("rowgroup")[1];
    const rows = within(tbody).getAllByRole("row");

    checkRowContents(rows[0], "Karlach", "concept_1", 250);

   })
});
