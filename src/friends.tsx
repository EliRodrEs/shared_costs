import { getPersonalDebt } from "./baseFunctions";
import { Cost } from "./costs";

export interface Friend {
  id: number,
  name: string
}

export interface FriendDebt extends Friend {
  debt: number
}

interface Debt {
  id: number,
  creditorName: string,
  debtorName: string,
  payment: number,
}

export function getFriendsDebts(friends: Friend[], costs: Cost[]): {summaryDebts: FriendDebt[]} {
  const summaryDebts: FriendDebt[] = [];

  friends.forEach(friend =>{
    summaryDebts.push({
      id: friend.id,
      name: friend.name,
      debt: getPersonalDebt(costs, friends.length, friend)
    })
  })

  return { summaryDebts }
}

export function classifyFriends(friends: FriendDebt[]): {
  debtors: FriendDebt[];
  creditors: FriendDebt[];
} {
  const debtors: FriendDebt[] = [];
  const creditors: FriendDebt[] = [];

  friends.forEach(friend =>{
    if(friend.debt<0) debtors.push(friend)
    if(friend.debt>0) creditors.push(friend)
  })

  return { debtors, creditors };
}

export function calculatePayments(
  debtors: FriendDebt[],
  creditors: FriendDebt[]
): Debt[] {
  const payments: Debt[] = [];

  debtors.forEach((debtor) => {
    creditors.forEach((creditor) => {
      const payment = Math.min(-debtor.debt, creditor.debt);
      if (payment > 0) {
        payments.push({
          id: Date.now() + Math.random(),
          creditorName: creditor.name,
          debtorName: debtor.name,
          payment: Math.round(payment * 100) / 100,
        });
      }
    });
  });

  return payments;
}
