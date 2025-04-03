import './App.css'
import { useContext } from 'react'
import { GlobalContext } from './contexts/GlobalContext'
import Header from './layout/Header'
import Navbar from './layout/Navbar'
import Profile from './layout/Profile'
import MainLayout from './layout/MainLayout'


export default function App() {
  const { darkMode } = useContext(GlobalContext)

  return (
    <div className={`${darkMode ? "bg-c1 text-white" : "bg-white"} flex justify-center`}>
      <div className='flex'>
        <div className={`w-3xs max-w-3xs`}>
          <Header></Header>
          <Navbar></Navbar>
          <Profile></Profile>
        </div>
        <div className={`w-5xl max-w-5xl`}>
          <MainLayout></MainLayout>
        </div>
      </div>
    </div>
  )

}


