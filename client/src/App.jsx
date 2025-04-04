import { useContext } from 'react'
import { GlobalContext } from './contexts/GlobalContext'
import Header from './layout/Header'
import Navbar from './layout/Navbar'
import Profile from './layout/Profile'
import MainLayout from './layout/MainLayout'


export default function App() {
  const { darkMode, scrollContainerRef } = useContext(GlobalContext)

  return (
    <div className={`${darkMode ? "bg-c1 text-white" : "bg-white"} flex justify-center transition duration-300 font-primary`}>

      <div className='flex h-screen items-center'>
        <div className={`flex flex-col justify-between gap-80 w-3xs max-w-3xs mx-10`}>
          <Profile></Profile>
          <Header></Header>
        </div>

        <div>
          <Navbar></Navbar>
          <div className={`w-5xl max-w-5xl h-[800px] mt-3 border rounded-my2 p-5 ${darkMode ? "border-c4": "border-c2"}`}>
            <div className='h-[750px] overflow-y-auto scrollbar-custom pr-5' ref={scrollContainerRef}>
              <MainLayout></MainLayout>
            </div>
          </div>
        </div>

      </div>

    </div>
  )

}


