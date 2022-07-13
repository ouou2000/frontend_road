import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import MyNavLink from "../../component/MyNavLink/MyNavLink";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是Home的内容</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="messages">Messages</MyNavLink>
            </li>
          </ul>

          <Outlet />
        </div>
      </div>
    );
  }
}
