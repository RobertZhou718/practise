import React, { Component } from "react";

export default class App extends Component {
  myref = React.createRef();
  render() {
    return (
      <div>
        <input ref={this.myref} />
        <button
          onClick={() => {
            console.log("1", this.myref.current.value);
          }}
        >
          add1
        </button>
      </div>
    );
  }
}
