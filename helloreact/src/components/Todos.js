import React, { Component } from 'react';
import TodoItem from './todo-item.js';
import PropTypes from 'prop-types';

class Todos extends Component {
  markComplete = () => {

  }
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete}  buttTodo={this.props.buttTodo}/>
    ));
  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
