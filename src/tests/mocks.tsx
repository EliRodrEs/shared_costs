import { Cost } from "../costs";
import { Friend } from "../friends";

export const inputCosts = [
  {
    id: 12358412,
    person: "Karlach",
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

export const negInputCosts: Cost[] = [
  {
    id: 12358412,
    person: "Karlach",
    concept: "concept_1",
    date: new Date(),
    amount: -50,
  },
  {
    id: 12358413,
    person: "Minthara",
    concept: "concept_2",
    date: new Date(),
    amount: -30,
  },
  {
    id: 12358414,
    person: "Minthara",
    concept: "concept_3",
    date: new Date(),
    amount: -20,
  },
];

export const floatInputCosts = [
  {
    id: 12358412,
    person: "person_1",
    concept: "concept_1",
    date: new Date(),
    amount: 10.55,
  },
  {
    id: 12358413,
    person: "Minthara",
    concept: "concept_2",
    date: new Date(),
    amount: 20.45,
  },
  {
    id: 12358414,
    person: "Minthara",
    concept: "concept_3",
    date: new Date(),
    amount: 30.55,
  },
];

export const largeInputCosts = [
  {
    id: 12358412,
    person: "person_1",
    concept: "concept_1",
    date: new Date(),
    amount: 99999999,
  },
  {
    id: 12358413,
    person: "Minthara",
    concept: "concept_2",
    date: new Date(),
    amount: 99999999,
  }
];

export const baseFriends = [
  { id: 1, name: "Minthara" },
  { id: 2, name: "Karlach" },
];

export const friend: Friend = { id: 1234569, name: "Minthara" };
export const friendWithoutPayments: Friend = {id: 789456123, name: "No payments"}

export const friendsToClassify = [
  { id: 1, name: "Karlach", debt: -50 },
  { id: 2, name: "Minthara", debt: 100 },
  { id: 3, name: "Shadowheart", debt: -30 },
  { id: 4, name: "Lae'zel", debt: 20 },
];

export const friendsWithoutDebts = [
  { id: 1, name: "Minthara", debt: 0 },
  { id: 2, name: "Karlach", debt: 0 },
];

export const debtors = [
  { id: 1, name: "Karlach", debt: -50 },
  { id: 2, name: "Shadowheart", debt: -100 },
  { id: 3, name: "Lae'zel", debt: 0 },
];

export const creditors = [
  { id: 4, name: "Minthara", debt: 50 },
  { id: 5, name: "Tav", debt: 80 },
];
