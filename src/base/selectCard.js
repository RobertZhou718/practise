import React, { Component } from "react";
import "./css/movie.css";
import Film from "./component/film";
import Cinema from "./component/cinema";
import Center from "./component/center";

export default class App extends Component {
  state = {
    list: [
      {
        id: 1,
        text: "电影",
      },
      {
        id: 2,
        text: "影院",
      },
      {
        id: 3,
        text: "我的",
      },
    ],
    current: 0,
  };
  which() {
    switch (this.state.current) {
      case 0:
        return <Film />;
      case 1:
        return <Cinema />;
      case 2:
        return <Center />;
      default:
        return null;
    }
  }
  render() {
    return (
      <div>
        {/* {this.state.current === 0 && <Film />}
        {this.state.current === 1 && <Cinema />}
        {this.state.current === 2 && <Center />} */}
        {this.which()}
        <ul>
          {this.state.list.map((item, index) => (
            <li
              key={item.id}
              className={this.state.current === index ? "active" : ""}
              onClick={() => this.handleClick(index)}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  handleClick(index) {
    console.log(index);
    this.setState({
      current: index,
    });
  }
}
