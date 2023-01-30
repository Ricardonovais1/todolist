// import { toBeDisabled } from '@testing-library/jest-dom/dist/matchers';
import React, { useState } from 'react';


import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

const App = () => {


  const [todos, setTodos] = useState([]);

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

  const onNewTodo = (value) => {
    setTodos([
      ...todos,
      {
        id: new Date().getTime(),
        title: value,
        checked: false,
      }
    ])
  }


  return (
    <section id="app" className='container'>
      <header>
        <h1 className='title'>Lista de tarefas</h1>
      </header>
        <section className='main'>

          <NewTodo onNewTodo={onNewTodo} />
          <TodoList todos={todos} onToggle={onToggle} deleteTask={deleteTask} />

        </section>
    </section>
  );
}

export default App;
