
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
