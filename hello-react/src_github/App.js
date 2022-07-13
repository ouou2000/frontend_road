import React, { Component } from "react";
import Search from "./component/Search/Search.jsx";
import List from "./component/List/List.jsx";
import axios from "axios";

export default class App extends Component {
  state = {
    userList: [],
  };
  searchUser = (keyWord) => {
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      (value) => {
        this.setState({
          userList: value.data.items,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  };
  render() {
    return (
      <div className="container">
        <Search searchUser={this.searchUser} />
        <List userList={this.state.userList} />
      </div>
    );
  }
}
