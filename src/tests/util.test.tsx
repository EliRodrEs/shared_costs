import { it, expect, describe } from "vitest";
import { formatDate } from "../util";

describe("formatDate()", () => {
  it("Should format a valid date correctly", () => {
    const date = new Date(2023, 0, 15);
    expect(formatDate(date)).toBe("15/01/2023");
  });

  it("Should handle an invalid date gracefully", () => {
    const invalidDate = new Date("invalid");
    expect(formatDate(invalidDate)).toBe("-");
  });

  //TODO: Check what happens with test using incorrect input values
  // it("handles undefined input gracefully", () => {
  //   expect(formatDate(undefined)).toBe("Invalid Date");
  // });

  // it("handles null input gracefully", () => {
  //   expect(formatDate(null)).toBe("Invalid Date");
  // });
 });
