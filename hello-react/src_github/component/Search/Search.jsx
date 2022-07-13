import React, { Component } from "react";

export default class Search extends Component {
  myRef = React.createRef();
  searchUser = () => {
    // console.log(this.myRef.current.value);
    this.props.searchUser(this.myRef.current.value);
  };
  render() {
    return (
      <div>
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <div>
            <input
              ref={this.myRef}
              type="text"
              placeholder="enter the name you search"
            />
            &nbsp;<button onClick={this.searchUser}>Search</button>
          </div>
        </section>
      </div>
    );
  }
}
