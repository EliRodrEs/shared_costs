import { Cost } from "../costs";
import { Friend } from "../friends";

export const inputCosts = [
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

export const negInputCosts: Cost[] = [
  {
    id: 12358412,
    person: "person_1",
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


export const friend: Friend = { id: 1234569, name: "Minthara" };
export const friendWithoutPayments: Friend = {id: 789456123, name: "No payments"}
