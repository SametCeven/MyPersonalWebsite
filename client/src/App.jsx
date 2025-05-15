import { useContext, useEffect } from 'react'
import { GlobalContext } from './contexts/GlobalContext'
import Navbar from './layout/Navbar'
import Profile from './layout/Profile'
import MainLayout from './layout/MainLayout'
import { Analytics } from "@vercel/analytics/react"


export default function App() {
  const { darkMode, scrollContainerRef, error } = useContext(GlobalContext)

  if (error) {
    return (
      <p> {error} </p>
    )
  }

  return (
    <div className={`${darkMode ? "bg-c1 text-white" : "bg-white"} flex justify-center transition duration-300 font-primary max-xl:w-screen`}>
      <Analytics></Analytics>

      <div className='flex h-[100dvh] items-center max-xl:flex-col'>

        <div className={`flex flex-col justify-between mr-10 w-3xs max-w-3xs max-xl:flex-row max-xl:justify-center max-xl:max-w-screen max-xl:mr-0`}>
          <Profile></Profile>
        </div>

        <div className='max-md:flex flex-col items-center'>
          <Navbar></Navbar>
          <div className={`max-w-5xl h-[800px] mt-3 border rounded-my2 p-5 ${darkMode ? "border-c4" : "border-c2"} max-xl:h-[500px] max-lg:h-[400px] max-lg:max-w-3xl max-md:max-w-[360px] max-sm::max-w-[360px]`}>
            <div className='h-[750px] overflow-y-auto scrollbar-custom pr-5 max-xl:h-[450px] max-lg:h-[350px] ' ref={scrollContainerRef}>
              <MainLayout></MainLayout>
            </div>
          </div>
        </div>

      </div>

    </div>
  )

}


