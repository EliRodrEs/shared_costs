import './App.css'
import Header from './components/Header'
import CostsListColumn from './components/CostListColumn'
import BalanceColumn from './components/BalanceColumn'
import Modal from './components/Modal'
import FriendModal from './components/FriendModal'
import CostModal from './components/CostsModal'
import { useState } from 'react'
import { FriendFormData } from "./components/FriendModal";
import { CostFormData } from "./components/CostsModal"
import { Friend } from './friends'
import { Cost } from './costs'

function App() {
  const [showFriendModal, setShowFriendModal] = useState(false)
  const [showCostModal, setShowCostModal] = useState(false)


  const openFriendModal = () => {
    setShowFriendModal(true);
  }

  const openCostModal = () => {
    setShowCostModal(true)
  }

  const handleCloseModal = () => {
    setShowFriendModal(false);
    setShowCostModal(false)
  }

  const handleSubmitFriendModal = (friendFormData: FriendFormData) => {
    let savedFriends: Friend[] = JSON.parse(localStorage.getItem('savedFriends') || '[]')
    let newFriend = {
      id: Date.now() + Math.random(),
      name: friendFormData.name,
    };

    savedFriends.push(newFriend)
    localStorage.setItem("savedFriends", JSON.stringify(savedFriends));
    handleCloseModal();
  };

  const handleSubmitCostModal = (costFormData: CostFormData) => {
        let savedCosts: Cost[] = JSON.parse(
          localStorage.getItem("savedCosts") || "[]"
        );
        let newCost = {
          id: Date.now() + Math.random(),
          person: costFormData.person,
          concept: costFormData.concept,
          date: costFormData.date,
          amount: costFormData.amount,
        };

        savedCosts.push(newCost);
        localStorage.setItem("savedCosts", JSON.stringify(savedCosts));
    handleCloseModal();
  };



  return (
    <>
      <Header
        title="Monopoly party"
        openFriendModal={openFriendModal}
        openCostModal={openCostModal}
      />
      <Modal
        onClose={handleCloseModal}
        onSubmit={() => {}}
        show={showFriendModal || showCostModal}
      >
        {showFriendModal && <FriendModal onSubmit={handleSubmitFriendModal} />}

        {showCostModal && <CostModal onSubmit={handleSubmitCostModal} />}
      </Modal>
      <main>
        <CostsListColumn />
        <BalanceColumn />
      </main>
    </>
  );
}

export default App
