import React, { useState } from 'react';


const App= ()=> {

  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState(['Sacar la ropa', 'Hacer la cama', 'Leer un rato']);

  const handleTask = (e)=>{
    const newTask = e.target.value
    setTask(newTask) 
  }

  const handleOnSubmit = (e)=>{
    e.preventDefault()    
    setTasks([...tasks, task])
    setTask('')
  } 

   
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {tasks.map((task, index)=>
              <li key={index}>{task}</li>            
            )}            
          </ul>
           <form onSubmit={handleOnSubmit}>
             <input value={task} onChange={handleTask} type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" />
           </form>
        </div>
      </div>
    )
  
}


export default App;



