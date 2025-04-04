import { useContext } from 'react'
import { GlobalContext } from './contexts/GlobalContext'
import Header from './layout/Header'
import Navbar from './layout/Navbar'
import Profile from './layout/Profile'
import MainLayout from './layout/MainLayout'


export default function App() {
  const { darkMode,scrollContainerRef } = useContext(GlobalContext)

  return (
    <div className={`${darkMode ? "bg-c1 text-white" : "bg-white"} flex justify-center`}>
      <div className='flex h-screen items-center'>
        <div className={`w-3xs max-w-3xs mx-10`}>
          <Header></Header>
          <Navbar></Navbar>
          <Profile></Profile>
        </div>
        <div className={`w-5xl max-w-5xl h-[800px]  mt-10 border  border-c4 rounded-my2 p-5`}>
          <div className='h-[750px] overflow-y-auto scrollbar-custom pr-1' ref={scrollContainerRef}>
          <MainLayout></MainLayout>
          </div>
        </div>
      </div>
    </div>
  )

}


