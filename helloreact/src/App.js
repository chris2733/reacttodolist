import React, { Component } from 'react';
import Header from './components/layout/header';
import Todos from './components/Todos';
import AddToDo from './components/AddToDo';
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
      })
    })
  };
  buttTodo = (id) => {
    this.setState( { todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }
  addTodo = (title) => {
    const newTodo = {
      id: 4,
      title: title,
      completed: false,
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <AddToDo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} markComplete={this.markComplete} buttTodo={this.buttTodo}/>
      </div>
    );
  }
}

export default App;
