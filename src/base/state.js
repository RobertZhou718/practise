import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      //text: "like",
      Show: true,
      Myname: "robert",
    };
  }

  //   state = {
  //     text: "like",
  //     Show: true,
  //   };
  render() {
    return (
      <div>
        <h1>welcome-{this.state.Myname}</h1>
        <button
          onClick={() => {
            this.setState({
              Show: !this.state.Show,
              Myname: "dudu",
            });
            this.Judge();
          }}
        >
          {this.state.Show ? "like" : "unlike"}
        </button>
      </div>
    );
  }
  Judge() {
    if (this.state.Show) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
}
