import { it, expect } from 'vitest'
import {
  getPersonalDebt,
  getTotalCost,
  getPersonalPayments,
} from "../baseFunctions";

  const inputCosts = [
    {
      id: 12358412,
      person: "person_1",
      concept: "concept_1",
      date: new Date(),
      amount: 250,
    },
    {
      id: 12358413,
      person: "Minthara",
      concept: "concept_2",
      date: new Date(),
      amount: 50,
    },
    {
      id: 12358414,
      person: "Minthara",
      concept: "concept_3",
      date: new Date(),
      amount: 60,
    },
  ];

  const friend = {id: 1234569, name:'Minthara'}

it("getTotalCost() -> Should add all the costs from a given array of Cost (object)", () => {

  expect(getTotalCost(inputCosts)).toBe(360);
});

it("getPersonalPayments() -> Should filter the payments by a given friend and get the total amount of them", () => {
  expect(getPersonalPayments(inputCosts, friend)).toBe(110)
 });

it("getPersonalDebt() -> Should divide the totalCost between all the friends and subtract the personal payments", () => {

  const friends = 2
  expect(getPersonalDebt(inputCosts, friends, friend)).toBe(-70)
 })
