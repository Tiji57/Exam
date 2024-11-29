import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Posts = () => {
    const[items,setItems]=useState([])
    useEffect(()=>{
     
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>setItems(response.data))
        .catch(error=>console.error(error))
        
    },[])
  return (
    <div>
     <ul>
      {
          items.map(item=>(
            <li key={item.id}>{item.id} - {item.title},{item.body}</li>
          ))

      }
     </ul>
      </div>
  )
}

export default Posts