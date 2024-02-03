
export function formatDate(date: Date) {
  const day = date.getDate().toString().padStart(2, "0")
  const month = (date.getMonth() + 1).toString().padStart(2, "0")
  const year = date.getFullYear.toString()
  return `${day}/${month}/${year}`
}

// interface FriendRepository{
//      void createFriend(Friend friend);
//   Friend[] getFriends();
// }

// class FriendrepositoryImpl implements FriendRepository{
//   createFriend(friend: Friend) : void{
//     // llamar a local storage
//   }
// }


// const repository: FriendRepository = new FriendRepositoryLocalStorage


// interface OrderPaymentsService{
//   Payment[] getAllPayments();
// }


// class OrderPaymentsServiceImpl implements OrderPaymentsService{

//     private PaymentRepository repository;

//   Payment[] getAllPayments(){
//        return orderByDate(repository.getAllPayment());
//   }
// }


// const orderPaymentsService: OrderPaymentsService = new OrderPaymentsServiceImpl(paymentRepository);
// interface Friend {
//   name: string;
//   debt: number;
// }

// function splitFriends(friends: Friend[]): {
//   debtors: Friend[];
//   creditors: Friend[];
// } {
//   const debtors: Friend[] = [];
//   const creditors: Friend[] = [];

//   friends.forEach((friend) => {
//     if (friend.debt < 0) {
//       debtors.push(friend);
//     } else if (friend.debt > 0) {
//       creditors.push(friend);
//     }
//   });

//   return { debtors, creditors };
// }

// function calculatePayments(debtors: Friend[], creditors: Friend[]): string[] {
//   const payments: string[] = [];

//   debtors.forEach((debtor) => {
//     creditors.forEach((creditor) => {
//       const payment = Math.min(-debtor.debt, creditor.debt);
//       if (payment > 0) {
//         payments.push(
//           `${creditor.name} -> ${debtor.name} (${payment.toFixed(2)}€)`
//         );
//         debtor.debt += payment;
//         creditor.debt -= payment;
//       }
//     });
//   });

//   return payments;
// }

// function displayPayments(payments: string[]): void {
//   console.log("Deudas:");
//   payments.forEach((payment) => console.log(payment));
// }

// // Sample usage
// const friends: Friend[] = [
//   { name: "Francisco Buyo", debt: 59.15 },
//   { name: "Alfonso Pérez", debt: 22.55 },
//   { name: "Raúl González", debt: -40.85 },
//   { name: "José María Gutiérrez", debt: -40.85 },
// ];

// const { debtors, creditors } = splitFriends(friends);
// const payments: string[] = calculatePayments(debtors, creditors);
// displayPayments(payments);



// import { splitFriends, calculatePayments } from "./paymentCalculator"; // Assuming paymentCalculator contains the functions to test

// describe("Payment Calculator", () => {
//   it("should calculate payments correctly", () => {
//     // Test case 1: Different numbers of debtors and creditors
//     const friends1 = [
//       { name: "Francisco Buyo", debt: 50 },
//       { name: "Alfonso Pérez", debt: -30 },
//       { name: "Raúl González", debt: -20 },
//     ];
//     const { debtors: debtors1, creditors: creditors1 } = splitFriends(friends1);
//     expect(debtors1.length).toBe(2);
//     expect(creditors1.length).toBe(1);
//     const payments1 = calculatePayments(debtors1, creditors1);
//     expect(payments1).toEqual(["Alfonso Pérez -> Raúl González (20.00€)"]);

//     // Add more test cases for other scenarios...
//   });
// });
