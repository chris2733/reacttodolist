import React, { Component } from 'react';
import Header from './components/layout/header';
import Todos from './components/Todos';
import AddToDo from './components/AddToDo';
import FilterAll from './components/FilterAll';
import Filter1 from './components/Filter1';
import Filter2 from './components/Filter2';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out rubbish",
        completed: false,
        typeF: "type1",
        hidden: false,
      },
      {
        id: 2,
        title: "Send johnnys package",
        completed: false,
        typeF: "type1",
        hidden: false,
      },
      {
        id: 3,
        title: "LEARN REACT",
        completed: false,
        typeF: "type1",
        hidden: false,
      },
      {
        id: 4,
        title: "Do this?",
        completed: false,
        typeF: "type1",
        hidden: false,
      },
      {
        id: 5,
        title: "Learn JSs better...",
        completed: false,
        typeF: "type2",
        hidden: false,
      },
      {
        id: 6,
        title: "To jiu jitsu?",
        completed: false,
        typeF: "type2",
        hidden: false,
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
      id: 99,
      title: title,
      completed: false,
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }
  filterChange = (typeofit) => {
    this.setState( { todos: this.state.todos.map(todo => {
      if (typeofit === "typeall") {
        todo.hidden = false;
      }
      else if (todo.typeF !== typeofit ) {
        todo.hidden = true;
      }
      else {
        todo.hidden = false;
      }
      return todo;
      })
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <FilterAll filterChange={this.filterChange}/>
        <Filter1 filterChange={this.filterChange}/>
        <Filter2 filterChange={this.filterChange}/>
        <AddToDo addTodo={this.addTodo}/>
        <div className="todo-item-wrap">
          <Todos todos={this.state.todos} markComplete={this.markComplete} buttTodo={this.buttTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
