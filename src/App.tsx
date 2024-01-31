// import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import CostsListColumn from './components/CostListColumn'
import BalanceColumn from './components/BalanceColumn'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header title="Base_header" />
      <main>
        <CostsListColumn />
        <BalanceColumn />
      </main>
    </>
  )
}

export default App
