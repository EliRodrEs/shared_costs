interface FriendRepository{
     void createFriend(Friend friend);
  Friend[] getFriends();
}

class FriendrepositoryImpl implements FriendRepository{
  createFriend(friend: Friend) : void{
    // llamar a local storage
  }
}


const repository: FriendRepository = new FriendRepositoryLocalStorage


interface OrderPaymentsService{
  Payment[] getAllPayments();
}


class OrderPaymentsServiceImpl implements OrderPaymentsService{

    private PaymentRepository repository;

  Payment[] getAllPayments(){
       return orderByDate(repository.getAllPayment());
  }
}


const orderPaymentsService: OrderPaymentsService = new OrderPaymentsServiceImpl(paymentRepository);
