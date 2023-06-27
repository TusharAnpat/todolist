import React, { useState } from 'react'
import Todoform from './Todoform'
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
uuidv4();

function TodoWrapper() {

    const [todos,setTodos] = useState([])

    const addTodo =(todo)=>{

        setTodos([...todos,{id:uuidv4(),task:todo,completed: false,isEditing:false}])
        console.log(todos);
    }

  return (
    <div className='TodoWrapper'>
        <h1>Get Things Done!</h1>
      <Todoform  addTodo={addTodo}/>
      {todos.map((todo,index)=>{

      return <Todo task={todo} key={index}/>
      })}
    </div>
  )
}

export default TodoWrapper
