// import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import CostsListColumn from './components/CostListColumn'
import BalanceColumn from './components/BalanceColumn'
import FriendModal from './components/FriendModal'
import CostModal from './components/CostsModal'
import { useState } from 'react'
import { FriendFormData } from "./components/FriendModal";
import { CostFormData } from "./components/CostsModal"

function App() {
  const [showFriendModal, setShowFriendModal] = useState(false)
  const [showCostModal, setShowCostModal] = useState(false)


  const openFriendModal = () => {
    setShowFriendModal(true);
  }

  const openCostModal = () => {
    setShowCostModal(true)
  }

  const closeModal = () => {
    setShowFriendModal(false);
    setShowCostModal(false)
  }

  const handleSubmitFriendModal = (friendFormData: FriendFormData) => {
    console.log(friendFormData);
    closeModal();
  };

  const handleSubmitCostModal = (costFormData: CostFormData) => {
    console.log(costFormData);
    closeModal();
  };




  return (
    <>
      <Header
        title="Monopoly party"
        openFriendModal={openFriendModal}
        openCostModal={openCostModal}
      />
      {showFriendModal && (
        <FriendModal onClose={closeModal} onSubmit={handleSubmitFriendModal} />
      )}

      {showCostModal && (
        <CostModal onClose={closeModal} onSubmit={handleSubmitCostModal} />
      )}
      <main>
        <CostsListColumn />
        <BalanceColumn />
      </main>
    </>
  );
}

export default App
