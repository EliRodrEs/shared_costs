import { it, expect, describe } from "vitest";
import { calculatePayments, classifyFriends, getFriendsDebts } from "../friends";
import { baseFriends, creditors, debtors, friendsToClassify, friendsWithoutDebts, inputCosts } from "./mocks";

describe("getFriendsDebts()", () => {
  it("Should return an array of friends with correct debts", () => {
    const debts = getFriendsDebts(baseFriends, inputCosts);

    expect(debts).toHaveLength(2);
    expect(debts[0]).toEqual({ id: 1, name: "Minthara", debt: -70 });
    expect(debts[1]).toEqual({ id: 2, name: "Karlach", debt: 70 });
  })

  //  !TODO:: Review this toBe and the return of the function
  it("calculates correct debts when costs array is empty", () => {
    const debts = getFriendsDebts(baseFriends, []);

    expect(debts).toHaveLength(2);
    expect(debts[0]).toEqual({ id: 1, name: "Minthara", debt: -0 });
    expect(debts[1]).toEqual({ id: 2, name: "Karlach", debt: -0 });
  });
});

describe("classifyFriends()", () => {
  it("Should correctly classifies friends into debtors and creditors", () => {
    const result = classifyFriends(friendsToClassify);

    expect(result).toEqual({
      debtors: [
        { id: 1, name: "Karlach", debt: -50 },
        { id: 3, name: "Shadowheart", debt: -30 },
      ],
      creditors: [
        { id: 2, name: "Minthara", debt: 100 },
        { id: 4, name: "Lae'zel", debt: 20 },
      ],
    })
  })


  it("Should return empty debtors and creditors arrays when input is empty", () => {
    const result = classifyFriends([]);

    expect(result).toEqual({ debtors: [], creditors: [] });
  })

  it("Should return empty debtors and creditors arrays when all debts are zero", () => {
    const result = classifyFriends(friendsWithoutDebts);

    expect(result).toEqual({ debtors: [], creditors: [] });
  });
})

describe("calculatePayments()", () => {
  it("calculatePayments correctly calculates payments when debtors and creditors have debts", () => {
    const result = calculatePayments(debtors, creditors);

    expect(result[0].creditorName).toBe("Minthara");
    expect(result[0].debtorName).toBe("Karlach");
    expect(result[0].payment).toBe(50);
  });

  it("should correctly calculate payments when some debts are zero", () => {
    const result = calculatePayments(debtors, creditors);
    console.log(result)
    expect(result[3].creditorName).toBe("Tav");
    expect(result[3].debtorName).toBe("Shadowheart");
    expect(result[3].payment).toBe(80);
  });
});
