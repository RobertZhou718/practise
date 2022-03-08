import React, { Component } from "react";

export default class App extends Component {
  state = {
    list: ["111", "222", "333"],
  };
  render() {
    var newlist = this.state.list.map((e, index) => (
      <li key={index}>
        {e}--{index}
      </li>
    ));
    return (
      <div>
        <ul>{newlist}</ul>
      </div>
    );
  }
}
