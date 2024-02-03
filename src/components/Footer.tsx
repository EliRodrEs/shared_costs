import { Cost } from '../costs';
import { Friend, FriendDebt, calculatePayments, classifyFriends, getFriendsDebts } from '../friends';
import { useCostsAndFriends } from '../hooks/useCostsAndFriends';
import './Footer.css'
import SummaryCard from './UI/summaryCard';
const Footer = ({
  setSavedFriends,
  setSavedCosts
}: {
  setSavedFriends: (friends: Friend[] | Cost[]) => void;
  setSavedCosts: (costs: Friend[] | Cost[]) => void;
}) => {
  const friends = useCostsAndFriends(
    "savedFriends",
    [],
    setSavedFriends
  ) as Friend[];
  const costs = useCostsAndFriends("savedCosts", [], setSavedCosts) as Cost[];
  const { summaryDebts }: { summaryDebts: FriendDebt[] } = getFriendsDebts(friends, costs);
  const classifiedFriends = classifyFriends(summaryDebts);
  const summaryFriendsAndDebts = calculatePayments(
    classifiedFriends.debtors,
    classifiedFriends.creditors
  );

  return (
    <>
      <footer>
        <h1>Resumen</h1>
        <div className="summary">
          {summaryFriendsAndDebts.map((debt) => (
            <SummaryCard
              key={debt.id}
              debtorName={debt.debtorName}
              creditorName={debt.creditorName}
              debt={debt.payment}
            />
          ))}
        </div>
      </footer>
    </>
  );
};

export default Footer
