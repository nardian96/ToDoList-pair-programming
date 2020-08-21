import React, { Component } from "react";
import axios from "axios";
import "./Sass/App.css";
import Todo from "./components/Todo";

class App extends Component {
  state = {
    todo: [],
  };

  eventListeners = [
    (postTodo = (event) => {
      event.preventDefault();
    }),
    (deleteTodo = (event) => {
      event.preventDefault();
    }),
    (modifyTodo = (event) => {
      event.preventDefault();
    }),
  ];

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Todo list={this.state.todo} eventListeners={this.eventListeners} />
        </header>
      </div>
    );
  }
}

export default App;
