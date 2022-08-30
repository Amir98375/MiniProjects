import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import SimpleSlider, { SliderAuto } from '../slider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
   
    <SliderAuto/>
    </div>
  )
}

export default App
