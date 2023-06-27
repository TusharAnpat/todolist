import React,{useState} from 'react'

function Todoform({addTodo}) {

    const [value,setVaule] = useState("");

    const handleSubmit = (e)=>{

        e.preventDefault();

        addTodo(value);
        setVaule("")
    }
    
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' className='todo-input' value={value} placeholder='what is task today?' onChange={(e)=>{setVaule(e.target.value);}}/>
      <button type='submit' className='todo-btn'> Add Task</button>
    </form>
  )
}

export default Todoform
