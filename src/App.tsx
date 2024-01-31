// import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import CostsListColumn from './components/CostListColumn'
import BalanceColumn from './components/BalanceColumn'
import FriendModal from './components/FriendModal'
import { useState } from 'react'
import { FormData } from './components/FriendModal'

function App() {
  const [showFriendModal, setShowFriendModal] = useState(false)


  const openFriendModal = () => {
    setShowFriendModal(true);
  }

  const closeModal = () => {
    setShowFriendModal(false);
  }

  const handleSubmitFriendModal = (formData: FormData) => {
    console.log(formData)
    closeModal()
  }




  return (
    <>
      <Header title="Monopoly party" openFriendModal={openFriendModal} />
      {showFriendModal && (
        <FriendModal onClose={closeModal} onSubmit={handleSubmitFriendModal} />
      )}
      <main>
        <CostsListColumn />
        <BalanceColumn />
      </main>
    </>
  );
}

export default App
