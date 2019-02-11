import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    }
  }
  render() {
    const { id, title } = this.props.todo;
    return (
      <div className="todo-item" style={this.getStyle()}>
        <h4>
          <input type="checkbox" onChange={this.props.markComplete.bind(this,  id)} />
          { title }
          <button onClick={this.props.buttTodo.bind(this,id)}>X</button>
        </h4>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem;
