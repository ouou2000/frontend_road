import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  selectAll = (event) => {
    this.props.selectAll(event.target.checked);
  };
  delectAllComplete = () => {
    // eslint-disable-next-line
    let flag = confirm("确认删除所有已完成任务吗？");
    if (flag) {
      this.props.delectAllComplete();
    }
  };
  render() {
    const { readyComplete, sum } = this.props;
    return (
      <div>
        <div className="todo-footer">
          <label>
            <input
              type="checkbox"
              checked={readyComplete === sum && sum !== 0}
              onChange={this.selectAll}
            />
          </label>
          <span>
            <span>已完成{readyComplete}</span> / 全部{sum}
          </span>
          <button onClick={this.delectAllComplete} className="btn btn-danger">
            清除已完成任务
          </button>
        </div>
      </div>
    );
  }
}
