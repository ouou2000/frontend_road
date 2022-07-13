import React, { Component } from "react";
import "./Header.css";
import { nanoid } from "nanoid";

export default class Header extends Component {
  handleAdd = (event) => {
    if (event.keyCode !== 13) return;
    if (event.target.value === "") {
      alert("输入不能为空！");
      return;
    }
    const todoObj = {
      id: nanoid(),
      name: event.target.value,
      done: false,
    };
    this.props.addTodo(todoObj);
    event.target.value = "";
  };
  render() {
    return (
      <div>
        <div className="todo-header">
          <input
            onKeyUp={this.handleAdd}
            type="text"
            placeholder="请输入你的任务名称，按回车键确认"
          />
        </div>
      </div>
    );
  }
}
