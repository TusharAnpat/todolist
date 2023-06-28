import React,{useState} from 'react'

function EditTodoForm({editTodo,task}) {

    const [value,setVaule] = useState(task.task);

    const handleSubmit = (e)=>{

        e.preventDefault();

        editTodo(value, task.id);
        setVaule("")
    }
    
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' className='todo-input' value={value} placeholder='Update Task' onChange={(e)=>{setVaule(e.target.value);}}/>
      <button type='submit' className='todo-btn'> Update Task</button>
    </form>
  )
}

export default EditTodoForm
