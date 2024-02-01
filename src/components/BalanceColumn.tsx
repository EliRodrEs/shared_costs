import Card from "./UI/Card"
import './BalanceColumn.css'
import SectionTitle from "./UI/SectionTitle"
import { Friend } from "../friends";
import { useEffect, useState } from "react";


const BalanceColumn = ({ setSavedFriends }: { setSavedFriends: (friends: Friend[]) => void}) => {
  const [friends, setFriends] = useState<Friend[]>([]);

  useEffect(() => {
    const savedFriendsStr = localStorage.getItem("savedFriends");
    const friends: [] = savedFriendsStr ? JSON.parse(savedFriendsStr) : [];
    setFriends(friends);
  }, [setSavedFriends]);
  return (
    <>
      <div className="balance_column">
        <SectionTitle sec_title="Balances" />
        <div className="balance_column_holder">
          {friends.map((friend) => (
            <Card key={friend.id} name={friend.name} balance={12.27} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BalanceColumn
