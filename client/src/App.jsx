import './App.css'
import { useContext } from 'react'
import { GlobalContext } from './contexts/GlobalContext'
import TestAPI from './components/TestAPI'
import Header from './layout/Header'
import Navbar from './layout/Navbar'


export default function App() {
  const {darkMode} = useContext(GlobalContext)

  return (
    <div className={`${darkMode?"bg-c1 text-white":"bg-white"} flex justify-center`}>
      <div className={`w-5xl max-w-5xl`}>
        <Header></Header>
        <Navbar></Navbar>
        <TestAPI></TestAPI>
      </div>
    </div>
  )

}


