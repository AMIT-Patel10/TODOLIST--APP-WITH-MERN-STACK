import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'
import{ BsCircleFill, BsFillCheckCircleFill, BsFillRewindCircleFill, BsFillTrashFill} from 'react-icons/bs'

function Home() {
    const [todos,settodos]=useState([])
   const fetchData = async()=>{
    const data =   await axios.get('http://localhost:5000/get')
        .then(result=>settodos(result.data))
        .catch(error=>console.log(error))
        // console.log('data',data.data)
        // settodos(data.data)
    }
    useEffect(()=>{
        fetchData()
    },[])
    const handleEdit = async(id) =>{
        await axios.put('http://localhost:5000/update/'+id)
        .then(result=>{
            location.reload()
        })
        .catch(error=>console.log(error))
    }
    const handleDelete= async(id)=>{
        await axios.delete('http://localhost:5000/delete/'+id)
        .then(result=>{
            location.reload()
        })
        .catch(error=>console.log(error))
    }
  return (
   
    <div className='body'>
        <h2>TODO LIST</h2>
        <Create />
        {
            todos.length == 0
            ?
            <div><h2>NO Record</h2></div>
            :
            todos.map(data=>(
                <div className='task'>
                    <div className='checkbox' onClick={()=>handleEdit(data._id)}>
                        {data.done ? <BsFillCheckCircleFill className='icon'></BsFillCheckCircleFill>
                        :  <BsCircleFill className='icon' /> }
                        <p className={data.done?"line_through":""}> {data.task}</p>
                     </div>
                     <div>
                        <span> <BsFillTrashFill className='icon' 
                        onClick={()=>handleDelete(data._id)}/></span> 
                     </div>
                </div>
            ))
        }
    </div>
  )
}

export default Home