import React from 'react'
import '../Planning/Todo.css'

import { useState}  from 'react'
import ShowTodo from './ShowTodo'

const Taskk = () => {
     const [Task, setTask] = useState( "Enter Your Tasks")
     const [Dataa, setDataa] = useState([])
     // starting state input feild 
     const handleChange =(e)=>{
         setTask(e.target.value)
        // console.log("object", e)
    }
    // add the task in the queue
     const submitHandler =(e)=>{
         // to avoid the reload
        e.preventDefault()
        //  console.log(e, 'sss')
        const newData = Task
        setDataa([...Dataa, newData])
        setTask('')
     }
      const DeleteData =(a)=>{
        //   console.log("dataa deleted ")
           const finalData = Dataa.filter((c,index)=>{
               return index !== a;
           })
           setDataa(finalData)
      }
    return (
        <div className='container'>
           <div className="row justify-content-center align-items-center main-row">
               <div className="col shadow main-col bg-white">
                   <div className="col p-2">
                       <h4 className='text-center'>ToDo List</h4>
                   </div>
               </div>
           </div>
           <form  onSubmit={submitHandler}>
               <div className='row justify-content-between text-white p-2'>
                   <div className="form-group flex-fill mb-2 col-9">
                       <input type="text" id="todo-input" className='form-control' value={Task} onChange={handleChange} />
                   </div>
                   <button type='submit' className='btn btn-primary mb-2 ml-2 col-3'>Add To Do</button>
               </div>

           </form>
            {
               Dataa.map((value, index)=>{ 
                  return<ShowTodo key={index} id={index} Task={value} DeleteData={DeleteData}/>
               }) 
            }
        </div>
    )
}

export default Taskk
