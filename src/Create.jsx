import React, { useState } from 'react'
import axios from 'axios'
function Create() {
  const [task,setTask]=useState()
  const handleAdd=()=>{
    axios.post('http://localhost:5000/add',{task:task})
    .then(result=>{
      location.reload()
  })
    .catch(console.log(error))
  }
  return (
    <div className='create'>
       <input type="text" name="" id=""  placeholder='     ---Enter Your Task---  ' onChange={(e)=>setTask(e.target.value)}/>
       <button type="button" onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create