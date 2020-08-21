import React, { Component } from "react";
import axios from "axios";
import "./styles/styles.css";
import Todo from "./components/Todo";

const axiosURL = "http://localhost:5000/todos";
class App extends Component {
  state = {
    todo: [],
  };

  testdata = [
    {
      id: "234235rwf",
      description: "aklshdlaihiwfalicnli  awlinaliefjalwihfa",
    },
    {
      id: "234235rasswf",
      description: "aklshdlaihiwfalicnli  awlinaliefjalwihfa",
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
    const input = document.querySelector(".todo__form-input");
    const inputObj = { description: input.value };
    console.log(input.value);
    axios.post(axiosURL, inputObj).then(this.grabList);
  };
  deleteTodo = (event) => {
    event.preventDefault();
    axios.delete(`${axiosURL}/${event.target.value}`).then(this.grabList);
  };
  modifyTodo = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    const input = document.querySelector(".todo__form-input");
    const inputObj = { description: input.value };

    console.log(input.value);
    axios
      .put(`${axiosURL}/${event.target.value}`, inputObj)
      .then(this.grabList);
  };

  checkedItem = (event) => {
    event.preventDefault();
    axios
      .put(`${axiosURL}/status/?id=${event.target.value}`)
      .then(this.grabList);
  };
  eventListeners = [
    this.postTodo,
    this.deleteTodo,
    this.modifyTodo,
    this.checkedItem,
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
