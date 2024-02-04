import { getPersonalDebt } from "./baseFunctions";
import { Cost } from "./costs";
import { generateUniqueId } from "./util";

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

export function getFriendsDebts(friends: Friend[], costs: Cost[]): FriendDebt[] {
  if (!Array.isArray(friends) || !Array.isArray(costs)) {
    throw new Error("Friends and costs must be arrays");
  }

  return friends.map(friend => ({
    id: friend.id,
    name: friend.name,
    debt: getPersonalDebt(costs, friends.length, friend)
  }));
}

export function classifyFriends(friends: FriendDebt[]): {
  debtors: FriendDebt[];
  creditors: FriendDebt[];
} {
  const debtors: FriendDebt[] = friends.filter((friend) => friend.debt < 0);
  const creditors: FriendDebt[] = friends.filter((friend) => friend.debt > 0);

  return { debtors, creditors };
}


export function calculatePayments(
  debtors: FriendDebt[],
  creditors: FriendDebt[]
): Debt[] {
  const payments: Debt[] = [];

  for (const debtor of debtors) {
    for (const creditor of creditors) {
      const payment = Math.min(-debtor.debt, creditor.debt);
      const roundedPayment = Math.round(payment * 100) / 100;
      if (roundedPayment > 0) {
        const id = generateUniqueId();
        payments.push({
          id,
          creditorName: creditor.name,
          debtorName: debtor.name,
          payment: roundedPayment,
        });
      }
    }
  }

  return payments;
}
