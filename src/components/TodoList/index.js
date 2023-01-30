import React from 'react'
import "./styles.css";
import { MdDelete } from "react-icons/md";
import propTypes from 'prop-types';


const TodoList = ({ todos, onToggle, deleteTask }) => {



  return (
    <ul className='todo-list'>
              {todos.map((todo) => (
                  <li key={todo.id.toString()} >
                    <span
                      className={['todo', todo.checked ? 'checked' : ""].join(' ')}
                      onClick={() => onToggle && onToggle(todo)}
                      onKeyDown={() => onToggle && onToggle(todo)}
                      role="button"
                      tabIndex={0}
                       >{todo.title}
                    </span>
                    <button className='remove'
                            type='button'
                            onClick={() => deleteTask && deleteTask(todo)} >
                      <MdDelete size={28} />
                    </button>
                  </li>

                ))
              }
          </ul>
  )
}

TodoList.propTypes = {
    todos: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            title: propTypes.string.isRequired,
            checked: propTypes.bool.isRequired,
        })
    ).isRequired,
    onToggle: propTypes.func.isRequired,
    deleteTask: propTypes.func.isRequired,
}

export default TodoList;
