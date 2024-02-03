import './App.css'
import Header from './components/Header'
import CostsListColumn from './components/CostListColumn'
import BalanceColumn from './components/BalanceColumn'
import Modal from './components/Modal'
import FriendModal from './components/FriendModal'
import CostModal from './components/CostsModal'
import Footer from './components/Footer'
import { useState } from 'react'
import { FriendFormData } from "./components/FriendModal";
import { CostFormData } from "./components/CostsModal"
import { Friend } from './friends'
import { Cost } from './costs'
import { UseLocalStorage } from './hooks/useLocalStorage'

function App() {
  const [modalType, setModalType] = useState('')
  const [savedFriends, setSavedFriends] = UseLocalStorage<Friend[]>(
    "savedFriends",
    []
  ) as [Friend[], (friends: Friend[] | Cost[]) => void];
  const [savedCosts, setSavedCosts] = UseLocalStorage<Cost[]>(
    "savedCosts",
    []
  ) as [Cost[], (costs: Friend[] | Cost[]) => void];

  const handleOpenModal = (type: string) => {
    setModalType(type)
  }

  const handleCloseModal = () => {
    setModalType('')
  }

  const handleSubmitModal = (formData: FriendFormData | CostFormData) => {
    if (modalType === 'friend') {
      const newFriend: Friend = {
        id: Date.now() + Math.random(),
        name: (formData as FriendFormData).name,
      };
      setSavedFriends([...savedFriends, newFriend]);
    } else {
        let newCost: Cost = {
          id: Date.now() + Math.random(),
          person: (formData as CostFormData).person,
          concept: (formData as CostFormData).concept,
          date: (formData as CostFormData).date,
          amount: (formData as CostFormData).amount,
        };

        setSavedCosts([...savedCosts, newCost]);
    }
    handleCloseModal();
  }

  return (
    <>
      <Header
        title="Monopoly party"
        openFriendModal={() => handleOpenModal("friend")}
        openCostModal={() => handleOpenModal("cost")}
      />
      <Modal onClose={handleCloseModal} onSubmit={() => {}} show={!!modalType}>
        {modalType === "friend" && <FriendModal onSubmit={handleSubmitModal} />}
        {modalType === "cost" && <CostModal onSubmit={handleSubmitModal} />}
      </Modal>
      <main>
        <CostsListColumn setSavedCosts={setSavedCosts} />
        <BalanceColumn
          setSavedFriends={setSavedFriends}
          setSavedCosts={setSavedCosts}
        />
      </main>
      <Footer setSavedFriends={setSavedFriends} setSavedCosts={setSavedCosts} />
    </>
  );
}

export default App
