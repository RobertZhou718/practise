import React, { Component } from "react";

export default class App extends Component {
  state = {
    count: 1,
  };
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleClick}>add</button>
        <button onClick={this.handleClick2}>add</button>
      </div>
    );
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
  };
  handleClick2 = () => {
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1,
      });
      console.log(this.state.count);
      this.setState({
        count: this.state.count + 1,
      });
      console.log(this.state.count);
      this.setState({
        count: this.state.count + 1,
      });
      console.log(this.state.count);
    }, 0);
  };
}
