import { it, expect, describe } from "vitest";
import { getByRole, render, within } from "@testing-library/react";
import CostsListColumn from "../components/CostListColumn";
import { inputCosts } from "./mocks";

describe("CostsListColumn.tsx", () => {
  it("Should render the table according to the costs array", () => {
    const { getByTestId } = render(<CostsListColumn costs={inputCosts} />);
    const table = getByTestId("costs-table");

    const tbody = within(table).getAllByRole("rowgroup")[1];
    const rows = within(tbody).getAllByRole("row");

    expect(rows.length).toBe(inputCosts.length);
  });
});
