import { Cost } from "./costs";
import { Friend } from "./friends";

export function getTotalCost(costsRepositoryAmounts: Cost[]): number{
   if (!costsRepositoryAmounts || costsRepositoryAmounts.length === 0) {
    return 0;
   }
  const totalCost = costsRepositoryAmounts.reduce(
    (acc: number, current: Cost) => acc + current.amount,
    0
  );
  return parseFloat(totalCost.toFixed(2));
}

export function getPersonalPayments(costsRepositoryAmounts: Cost[], friend: Friend): number {
  const personalPayments = costsRepositoryAmounts.filter((cost) => cost.person === friend.name)
  return getTotalCost(personalPayments)
}

export function getPersonalDebt(
  costsRepositoryAmounts: Cost[],
  numberOfFriends: number,
  friend: Friend
): number {
  if (numberOfFriends <= 0) {
    throw new Error("Number of friends must be greater than 0");
  }

  if (!costsRepositoryAmounts || !friend) {
    return 0;
  }

  const totalCost = getTotalCost(costsRepositoryAmounts);
  const personalPayments = getPersonalPayments(costsRepositoryAmounts, friend);

  const personalDebt =
    Math.round((totalCost / numberOfFriends - personalPayments) * 100) / 100;

  return -personalDebt;
}
