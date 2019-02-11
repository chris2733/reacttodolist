import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out rubbish",
        completed: false,
      },
      {
        id: 2,
        title: "Sed johnnys package",
        completed: false,
      },
      {
        id: 3,
        title: "LEARN REACT",
        completed: false,
      },
    ]
  }
  markComplete = (id) => {
    this.setState( { todos: this.state.todos.map(todo => {
      if (todo.id === id ) {
        todo.completed = !todo.completed;
      }
      return todo;
    }) })
  };
  buttTodo = (id) => {
    console.log(id);
  }
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} buttTodo={this.buttTodo}/>
      </div>
    );
  }
}

export default App;
