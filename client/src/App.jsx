import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"

export default function App() {

  const [data,setData] = useState([]);
  useEffect(()=>{
    axios.get("https://sametceven-server.vercel.app/api")
    .then((response)=>{
      setData(response.data.users)
    })
    .catch((error)=>{
      console.error(error)
    })
  },[])




  return (
    <div>
      <p className='bg-black text-white'>hello</p>
      {data === undefined ? <p>Loading</p> : 
        data.map((datum)=>
          <p key={datum}> {datum} </p>
        )
      }
    </div>
  )
}


