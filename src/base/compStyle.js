import React, { Component } from "react";
import "./css/index.css";
export default class App extends Component {
  render() {
    var myname = "Robert";
    var obj = {
      background: "yellow",
    };
    return (
      <div>
        {10 + 20}-{myname}
        {10 > 20 ? "aaa" : "bbb"}
        <div style={obj}>11111</div>
        <div style={{ background: "red" }}>222222</div>
        <div className="active">333333333</div>
        <div id="myapp">55555</div>
        <label htmlFor="username">username:</label>
        <input type="text" id="username" />
      </div>
    );
  }
}
