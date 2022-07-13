import React, { Component } from "react";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import List from "./component/List/List";
import { nanoid } from "nanoid";

import "./App.css";

export default class App extends Component {
  state = {
    todos: [
      { id: nanoid(), name: "学React", done: true },
      { id: nanoid(), name: "学Vue", done: false },
      { id: nanoid(), name: "学Webpack", done: false },
    ],
  };
  delectAllComplete = () => {
    const newList = this.state.todos.filter((todo) => {
      return todo.done === false;
    });
    this.setState({
      todos: newList,
    });
  };
  handleDelete = (id) => {
    const newList = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: newList,
    });
  };
  selectAll = (isSelectAll) => {
    this.state.todos.forEach((todo) => {
      todo.done = isSelectAll;
    });
    this.setState({
      todos: this.state.todos,
    });
  };
  countComplete = () => {
    let temp = 0;
    this.state.todos.forEach((todo) => {
      if (todo.done === true) {
        temp += 1;
      }
    });
    return temp;
  };
  handleChecked = (id) => {
    this.state.todos.forEach((todo) => {
      if (id === todo.id) {
        todo.done = !todo.done;
      }
    });
    this.setState({
      todos: this.state.todos,
    });
  };
  addTodo = (todoObj) => {
    this.state.todos.unshift(todoObj);
    const newList = this.state.todos;
    this.setState({
      todos: newList,
    });
  };
  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List
            todos={todos}
            handleChecked={this.handleChecked}
            handleDelete={this.handleDelete}
          />
          <Footer
            sum={this.state.todos.length}
            readyComplete={this.countComplete()}
            selectAll={this.selectAll}
            delectAllComplete={this.delectAllComplete}
          />
        </div>
      </div>
    );
  }
}
