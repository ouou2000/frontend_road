import React, { Component } from "react";
import "./List.css";
export default class List extends Component {
  render() {
    return (
      <div className="row">
        {this.props.userList.map((userObj) => {
          return (
            <div className="card" key={userObj.login}>
              <a rel="noreferrer" href={userObj.html_url} target="_blank">
                <img
                  alt="user_picture"
                  src={userObj.avatar_url}
                  style={{ width: "100px" }}
                />
              </a>
              <p className="card-text">{userObj.login}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
