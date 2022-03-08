import React, { Component } from "react";

export default class App extends Component {
  a = 100;
  render() {
    return (
      <div>
        <input />
        <button
          onClick={() => {
            console.log("1", this.a);
            // this is the same with render
          }}
        >
          add1
        </button>
        <button onClick={this.handleClick2.bind(this)}>add2</button>
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
    console.log("2", this.a);
  }
  handleClick3 = () => {
    console.log("3", this.a);
  };
  handleClick4() {
    console.log("4", this.a);
  }
}
