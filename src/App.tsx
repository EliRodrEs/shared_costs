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
import { UseLocalStorage } from './hooks/useLocalStorage'

function App() {
  const [showFriendModal, setShowFriendModal] = useState(false)
  const [showCostModal, setShowCostModal] = useState(false)

  const [savedFriends, setSavedFriends] = UseLocalStorage<Friend[]>('savedFriends', [])
  const [savedCosts, setSavedCosts] = UseLocalStorage<Cost[]>('savedCosts', [])


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
    const newFriend: Friend = {
      id: Date.now() + Math.random(),
      name: friendFormData.name,
    };

    setSavedFriends([...savedFriends, newFriend])
    handleCloseModal();
  };

  const handleSubmitCostModal = (costFormData: CostFormData) => {
        let newCost: Cost = {
          id: Date.now() + Math.random(),
          person: costFormData.person,
          concept: costFormData.concept,
          date: costFormData.date,
          amount: costFormData.amount,
        };

        setSavedCosts([...savedCosts, newCost]);
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

        {showCostModal && (
          <CostModal
            onSubmit={handleSubmitCostModal}
          />
        )}
      </Modal>
      <main>
        <CostsListColumn />
        <BalanceColumn />
      </main>
    </>
  );
}

export default App
