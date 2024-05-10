import React, { useState } from 'react'

export default function Todo() {
    const [input,setInput]=useState('')
    const[Todos,setTodos]=useState([])
    
    const handleAddToDo=()=>{
        if (input.trim()!==''){
            setTodos([...Todos,{id: Date.now(),text:input}])
            setInput('')
        }
    }

    const handleEditTodo = (id,newText)=>{
    setTodos(Todos.map((todo)=>{
        if(todo.id === id){
            return {...todo, text:newText}
        }
        return todo;
    }))
    }

    const handleRemove = (id)=>{
        setTodos(Todos.filter(todo => todo.id !==id))
    }

    const removeAll=()=>{
        setTodos([])
    }

  return (
    <>
    <div className='text-center border-4 border-black w-2/5 mx-auto mt-52 mb-10'>
        <h1 className='text-7xl'>Todo List</h1>

        <div className='border rounded-sm w-3/4 m-auto'>
        <input type="text" className='p-2 mt-7 mb-7'
        placeholder='Add ToDo'
        value={input}
        onChange={(e)=>{setInput(e.target.value)}}
        />
        <button className='bg-slate-800 text-white p-2 rounded-sm ms-32'onClick={handleAddToDo}>Add ToDo</button>
        </div>
        
        {
            Todos.map((todo)=>(
                <ul key = {todo.id} className='flex justify-between mx-auto w-3/4'>
                <span className='w-4/5 p-4 border mt-4'>{todo.text}</span>
                <button className='bg-yellow-500 px-4 rounded-sm mx-3 mt-4' 
                    onClick={()=>{handleEditTodo(todo.id,prompt ('edit todo',todo.text))}}>
                    <i class="bi bi-pencil-fill"></i>
                    </button>
                <button className='bg-red-400 px-4 rounded-sm mx-3  mt-4'onClick={()=>{handleRemove(todo.id)}}>
                    <i class="bi bi-x-square"></i>
                </button>
                </ul>
            ))
        }
        { Todos.length >0 &&
           <div>
           <button className='text-2xl bg-red-500 px-9 mb-2 w-1/2 rounded-sm mt-4' onClick={removeAll}>Remove All</button>
           </div>
        }
        
        
    </div>
    
    </>
  )
}
