import Card from "./UI/Card"
import './BalanceColumn.css'
import SectionTitle from "./UI/SectionTitle"
import { Friend } from "../friends";
import { Cost } from "../costs";
import { getPersonalDebt } from "../baseFunctions";


const BalanceColumn = ({
  friends,
  costs,
}: {
  friends: Friend[]
  costs: Cost[]
}) => {

  function handleBalance(friend: Friend) {
    return getPersonalDebt(costs, friends.length, friend);
  }

  return (
    <>
      <div className="balance_column">
        <SectionTitle sec_title="Balances" />
        <div className="balance_column_holder">
          {friends.map((friend) => (
            <Card
              key={friend.id}
              name={friend.name}
              balance={handleBalance(friend)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BalanceColumn
