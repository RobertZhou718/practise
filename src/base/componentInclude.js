import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return <div>Navbar</div>;
  }
}

function Swiper() {
  return <div>Swiper</div>;
}

const Tabbar = () => {
  return <div>Tabbar</div>;
};

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Swiper />
        <Tabbar />
      </div>
    );
  }
}
