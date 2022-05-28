import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Users } from './Routes/users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Users></Users>
    </div>
  )
}

export default App
