import React, { Component } from "react";
import axios from "axios";
import "./Sass/app.css";
import Todo from "./components/Todo";

const axiosURL = "http://localhost:5000/";
class App extends Component {
  state = {
    todo: [],
  };

  testdata = [
    {
      id: "234235rwf",
      todo: "aklshdlaihiwfalicnli  awlinaliefjalwihfa",
    },
    {
      id: "234235rasswf",
      todo: "aklshdlaihiwfalicnli  awlinaliefjalwihfa",
    },
  ];

  grabList = () => {
    axios.get(axiosURL).then((response) => {
      let todoList = response.data;
      this.setState({
        todo: todoList,
      });
    });
  };

  componentDidMount() {
    this.grabList();
  }
  postTodo = (event) => {
    event.preventDefault();
    axios.post(`${axiosURL}/${event.target.value}`).then(this.grabList);
  };
  deleteTodo = (event) => {
    event.preventDefault();
    axios.delete(`${axiosURL}/${event.target.value}`).then(this.grabList);
  };
  modifyTodo = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    const input = document.querySelector(".todo__form-input");
    console.log(input.value);
    axios
      .put(`${axiosURL}/?id=${event.target.value}&todo=${input}`)
      .then(this.grabList);
  };

  eventListeners = [this.postTodo, this.deleteTodo, this.modifyTodo];

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Todo list={this.testdata} eventListeners={this.eventListeners} />
        </header>
      </div>
    );
  }
}

export default App;
