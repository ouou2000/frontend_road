import { Component } from "react";
import { NavLink } from "react-router-dom";

class MyNavLink extends Component {
  render() {
    return (
      <NavLink
        className={({ isActive }) =>
          isActive ? "list-group-item active" : "list-group-item"
        }
        {...this.props}
      ></NavLink>
    );
  }
}

export default MyNavLink;
