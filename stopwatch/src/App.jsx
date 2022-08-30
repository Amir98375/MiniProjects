import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { StopWatch } from './component/StopWatch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
  <StopWatch/>
    </div>
  )
}

export default App
