import React from 'react'
import { useEffect } from 'react'

const Filter = () => {
    useEffect (()=>{
        const fetchData=async()=>{
            const data= await fetch ("https://jsonplaceholder.typicode.com/users")
            const json = await (data.json())
            console.log (json)
    
        
        }
        fetchData() 
    },[])
  return (
    <div className=' flex w-full'>
      <h1 className=' font-black'> live search filter</h1>

    </div>
  )
}

export default Filter
