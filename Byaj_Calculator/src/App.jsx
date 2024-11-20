import { useState } from 'react'
import './App.css'
import InterestCalculator from './components/InterestCalculator'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <Header/>
    
    <InterestCalculator/>
  </>
  )
}

export default App
