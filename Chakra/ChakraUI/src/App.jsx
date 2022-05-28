import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { ButtonComponent } from './Components/Button'
import { BoxComponent } from './Components/Box'
import { ContainnerComponent } from './Components/container'
import { CenterComponent } from './Components/Center'
import { GridComponent } from './Components/Grid'
import { GridComTemp } from './Components/GridTemplate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
<BoxComponent></BoxComponent>
{/* <ButtonComponent></ButtonComponent>
<ContainnerComponent></ContainnerComponent>
<CenterComponent></CenterComponent> */}
<GridComponent></GridComponent>
<GridComTemp></GridComTemp>
    </div>
  )
}

export default App
