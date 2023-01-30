import React from 'react'
import { useState } from 'react';
import "./styles.css";
import propTypes from 'prop-types';


const NewTodo = ({ onNewTodo }) => {


    const ESCAPE_KEY = 27;
    const ENTER_KEY = 13;

    const [value, setValue] = useState("");

    const erase = () => {
        setValue("");
      }

      const submit = () => {
        if (onNewTodo) {
            onNewTodo(value)
            erase()
        }
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
    <input
        className='new-todo'
        placeholder='o que precisa ser feito?'
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
    />
    )
}

NewTodo.propTypes = {
    onNewTodo: propTypes.func.isRequired,
}

export default NewTodo
