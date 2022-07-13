import React, { Component } from "react";
import Item from "../Item/Item";
import "./List.css";

export default class List extends Component {
  render() {
    const { todos, handleChecked, handleDelete } = this.props;
    return (
      <div>
        <ul className="todo-main">
          {todos.map((todo) => {
            return (
              <Item
                todoObj={todo}
                handleDelete={handleDelete}
                handleChecked={handleChecked}
                key={todo.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
