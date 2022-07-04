import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Layout } from './component/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Layout/>
    </div>
  )
}

export default App
