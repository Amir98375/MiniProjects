import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { RecentJobs } from './components/recentjob'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
 

  return (
    <div className="App">
      <Navbar/>
      <br></br>
      <RecentJobs></RecentJobs>
    </div>
  )
}

export default App
