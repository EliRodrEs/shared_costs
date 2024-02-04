import { it, expect, describe } from "vitest";
import {
  getPersonalDebt,
  getTotalCost,
  getPersonalPayments,
} from "../baseFunctions";
import { floatInputCosts, friend, friendWithoutPayments, inputCosts, largeInputCosts, negInputCosts } from "./mocks";



  describe("getTotalCost()", () => {
    it("Should add all the costs from a given array of Cost (object)", () => {
      expect(getTotalCost(inputCosts)).toBe(360);
    });

    it("Should return 0 when given an empty array", () => {
      expect(getTotalCost([])).toBe(0)
     })

    it("Should handle negative amounts correctly", () => {
      expect(getTotalCost(negInputCosts)).toBe(-100)
     })

    it("Should handle floating point amounts correctly", () => {
      expect(getTotalCost(floatInputCosts)).toBeCloseTo(61.55)
     })
    it("Should return 0 when given null or undefined as input", () => {
      expect(getTotalCost(null)).toBe(0)
      expect(getTotalCost(undefined)).toBe(0)
     })
    it("Should handle large numbers correctly", () => {
      expect(getTotalCost(largeInputCosts)).toBe(199999998);
     })
  });

describe("getPersonalPayments()", () => {
  it("Should filter the payments by a given friend and get the total amount of them", () => {
    expect(getPersonalPayments(inputCosts, friend)).toBe(110)
  })

  it("Should return 0 when there are no payments for the friend", () => {
    expect(getPersonalPayments(inputCosts, friendWithoutPayments)).toBe(0)
   })


  it("Should handle floating points amounts correctly", () => {
    expect(getPersonalPayments(floatInputCosts, friend)).toBeCloseTo(51);
   })

  it("Should return 0 when costs array is empty", () => {
    expect(getPersonalPayments([],friend)).toBe(0)
   })
 });

 describe("getPersonalDebt()", () => {
    it("Should divide the totalCost between all the friends and subtract the personal payments", () => {
      const numberOfFriends: number = 2;
      expect(getPersonalDebt(inputCosts, numberOfFriends, friend)).toBe(-70);
    });

    it("Should return 0 when costsRepositoryAmounts is falsy", () => {
      const numberOfFriends: number = 3
      expect(getPersonalDebt(null, numberOfFriends, friend)).toBe(0);
      expect(getPersonalDebt(undefined, numberOfFriends, friend)).toBe(0);
     })
    it("should throw an error when numberOfFriends is less than or equal to 0", () => {
      const numberOfFriends = 0;
      expect(() =>
        getPersonalDebt(inputCosts, numberOfFriends, friend)
      ).toThrowError("Number of friends must be greater than 0");
    });

    it("returns 0 when friend is falsy", () => {
      const numberOfFriends = 4;
      expect(getPersonalDebt(inputCosts, numberOfFriends, null)).toBe(0);
      expect(getPersonalDebt(inputCosts, numberOfFriends, undefined)).toBe(0);
    });

  });
