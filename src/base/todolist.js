import React, { Component } from "react";

export default class App extends Component {
  myref = React.createRef();
  state = {
    list: [
      { id: 1, text: "111" },
      { id: 2, text: "222" },
      { id: 3, text: "333" },
    ],
  };
  render() {
    return (
      <div>
        <input ref={this.myref} />
        <button onClick={this.handleClick}>add</button>
        <ul>
          {this.state.list.map((e, index) => (
            <li key={e.id}>
              {e.text}
              <button onClick={() => this.delList(index)}>del</button>
            </li>
          ))}
        </ul>
        {this.state.list.length === 0 ? <div>Empty</div> : null}
        {this.state.list.length === 0 && <div>Empty</div>}
      </div>
    );
  }
  handleClick = () => {
    console.log("1", this.myref.current.value);
    //don't modify the state directly
    //this.state.list.push(this.myref.current.value);
    let newlist = [...this.state.list];
    newlist.push({
      id: Math.random(),
      text: this.myref.current.value,
    });
    this.setState({
      list: newlist,
    });
    this.myref.current.value = "";
  };
  delList = (index) => {
    console.log(index);
    let newList = [...this.state.list];
    newList.splice(index, 1);
    this.setState({
      list: newList,
    });
  };
}
