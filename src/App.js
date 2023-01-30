import { toBeDisabled } from '@testing-library/jest-dom/dist/matchers';
import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import './App.css';

const App = () => {
  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;

  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const erase = () => {
    setValue("");
  }

  const submit = () => {
    setTodos([
      ...todos,
      {
        id: new Date().getTime(),
        title: value,
        checked: false,
      }
    ])
    erase()
  }

  const onToggle = (todo) => {

    setTodos(todos.map((obj) => (
      obj.id === todo.id
        ? {...obj, checked: !todo.checked}
        : obj
    )))
  }

  const deleteTask = (todo) => {

   setTodos(todos.filter((obj) => obj.id !== todo.id))
  }

  const onChange = (e) => {
    setValue(e.target.value)
    console.log(value)
  }

  const onKeyDown = (e) => {
     if (e.which === ENTER_KEY) {
      submit()
     } else if (e.which === ESCAPE_KEY) {
      erase()
     }
  }

  return (
    <section id="app" className='container'>
      <header>
        <h1 className='title'>Lista de tarefas</h1>
      </header>
        <section className='main'>
          <input
              className='new-todo'
              placeholder='o que precisa ser feito?'
              value={value}
              onChange={onChange}
              onKeyDown={onKeyDown}
          />
          <ul className='todo-list'>
              {
                todos.map((todo) => (
                  <li key={todo.id.toString()} >
                    <span
                      className={['todo', todo.checked ? 'checked' : ""].join(' ')}
                      onClick={() => onToggle(todo)}
                      onKeyDown={() => onToggle(todo)}
                      role="button"
                      tabIndex={0}
                    >{todo.title}</span>
                    <button className='remove'
                            type='button'
                            onClick={() => deleteTask(todo)} >
                      <MdDelete size={28} />
                    </button>
                  </li>

                ))
              }
          </ul>
        </section>
    </section>
  );
}

export default App;
