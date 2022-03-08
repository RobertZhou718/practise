import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <input />
        <button
          onClick={() => {
            console.log("1");
          }}
        >
          add1
        </button>
        <button onClick={this.handleClick2}>add2</button>
        <button onClick={this.handleClick3}>add3</button>
        <button
          onClick={() => {
            this.handleClick4();
          }}
        >
          add4
        </button>
      </div>
    );
  }
  handleClick2() {
    console.log("2");
  }
  handleClick3 = () => {
    console.log("3");
  };
  handleClick4 = () => {
    console.log("4");
  };
}
