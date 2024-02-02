import { Cost } from "./costs";
import { Friend } from "./friends";

export function getTotalCost(costsRepositoryAmounts: Array<Cost>){
  return costsRepositoryAmounts.reduce(
    (acc: number, current: Cost) => acc + current.amount,
    0
  );
}

export function getPersonalPayments(costsRepositoryAmounts: Array<Cost>, friend: Friend) {
  const personalPayments = costsRepositoryAmounts.filter(
    (cost) => cost.person === friend
  .name);
  return getTotalCost(personalPayments);
};

export function getPersonalDebt(
  costsRepositoryAmounts: Array<Cost>,
  friends: number,
  friend: Friend
) {
  const totalCost = getTotalCost(costsRepositoryAmounts);
  const personalPayments = getPersonalPayments(costsRepositoryAmounts, friend);
  return -(totalCost / friends - personalPayments)
}
