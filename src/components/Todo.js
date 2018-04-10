import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ id, onClick, completed, text }) => (
  <li className='todo-item'>
    <span onClick={onClick} style={{textDecoration: completed ? 'line-through' : 'none'}}>
    {text}
    </span>
  </li>
)

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo