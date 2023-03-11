import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import React from 'react';

 function App() {
  const [inputValue, setInputValue] = useState("")
   const [todos, setTodos] = useState([])

  // const createTodoUser = () => {
  //   fetch('https://assets.breatheco.de/apis/fake/todos/user/Armitage6' ,  {
  //     method:'POST',
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify([])
  //   }).then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log(error))
  // }
  const getTask = () => {
    fetch('https://assets.breatheco.de/apis/fake/todos/user/Armitage6')
    .then((res) => res.json())
    .then((data) => setTodos(data))
    .catch((error) => console.log(error))
  }

const udateTasks = (tasks) => {
  fetch('https://assets.breatheco.de/apis/fake/todos/user/Armitage6' ,  {
       method:'PUT',
      headers: {
         'Content-type': 'application/json'
       },
       body: JSON.stringify(tasks)
    }).then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error))
   }

   const udateTasks2 = () => {
    setTodos([]);
    fetch('https://assets.breatheco.de/apis/fake/todos/user/Armitage6' ,  {
         method:'PUT',
         body: JSON.stringify([{label: "none", done: false}]),
        headers: {
           'Content-type': 'application/json'
         },
         
      }).then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error))
     }
  

  //  const deleteUser = () => {
  //   fetch('https://assets.breatheco.de/apis/fake/todos/user/Armitage6' ,  {
  //     method:'DELETE',
  //    headers: {
  //       'Content-type': 'application/json'
  //     },
      
  //  }).then((res) => res.json())
  //    .then((data) => console.log(data))
  //    .catch((error) => console.log(error))
  // }
   


  useEffect(() => {
    // createTodoUser()
    getTask()
  }, [])


  return (
    <>
    <h1>Todo List</h1>
    <div className='containerr'>
      <ul>
        <li>
          <input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyUp={(e) => {
              if (e.key === "Enter" && inputValue !== "") {
                setTodos(todos.concat({label: inputValue, done: false}));
                setInputValue('');
                udateTasks(todos.concat({label: inputValue, done: false}))
              }
            }}
            type='text'
            placeholder='What do you need to do'
          />
        </li>
        {todos.length === 0 ? (
          <li>No hay tareas.</li>
        ) : (
          todos.map((item, index) => (
            <li key={index}>
              {item.label}
              {' '}
              <i
                className='fa-solid fa-xmark'
                onClick={() =>
                  setTodos(
                    todos.filter(
                      (t, currentIndex) => index !== currentIndex
                    )
                  )
                }
              ></i>
            </li>
          ))
        )}
      </ul>
      <div>{todos.length} tasks</div>
     
    </div>


    
        <button
        className='mt-2 btn btn-light'
          onClick={udateTasks2}
        >
          Eliminar todas las tareas
        </button>
     
  </>
  )
    
    
  
}

export default App;
