import React, { Component } from "react";
import "./Item.css";

export default class Item extends Component {
  state = {
    mouse: false,
  };
  handleDelete = () => {
    this.props.handleDelete(this.props.todoObj.id);
  };
  handle = () => {
    this.props.handleChecked(this.props.todoObj.id);
  };
  showButton = (flag) => {
    return () => {
      this.setState({
        mouse: flag,
      });
    };
  };
  render() {
    const { todoObj } = this.props;
    return (
      <div>
        <li
          onMouseEnter={this.showButton(true)}
          onMouseLeave={this.showButton(false)}
        >
          <label>
            <input
              type="checkbox"
              checked={todoObj.done}
              onChange={this.handle}
            />
            <span>{todoObj.name}</span>
          </label>
          <button
            onClick={this.handleDelete}
            className="btn btn-danger"
            style={{ display: this.state.mouse ? "block" : "none" }}
          >
            删除
          </button>
        </li>
      </div>
    );
  }
}
