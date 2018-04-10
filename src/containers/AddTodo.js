import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

let AddTodo = ({ dispatch }) => {
  let input
  const ENTER = 13

  return (
    <div>
      <TextField floatingLabelText="TODO" ref={(node) => {
        input = node.input
      }}
      onKeyDown={(e) => {
        if (e.keyCode === ENTER) {
          dispatch(addTodo(input.value))
          input.value = ''
        }
      }} />
      <FloatingActionButton onClick={() => {
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <ContentAdd />
      </FloatingActionButton>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo