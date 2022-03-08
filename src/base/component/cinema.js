import React, { Component } from "react";
//import axios from "axios";

export default class Cinema extends Component {
  constructor() {
    super();
    this.state = {
      cinemaList: [
        {
          cenimaId: 1,
          name: "北京123",
          address: "fhsafhsak",
        },
        {
          cenimaId: 2,
          name: "北京123",
          address: "fhsafhsak",
        },
        {
          cenimaId: 3,
          name: "北京123",
          address: "fhsafhsak",
        },
        {
          cenimaId: 4,
          name: "北京123",
          address: "fhsafhsak",
        },
        {
          cenimaId: 5,
          name: "北京123",
          address: "fhsafhsak",
        },
        {
          cenimaId: 6,
          name: "北京123",
          address: "fhsafhsak",
        },
        {
          cenimaId: 7,
          name: "北京123",
          address: "fhsafhsak",
        },
        {
          cenimaId: 8,
          name: "北京123",
          address: "fhsafhsak",
        },
        {
          cenimaId: 9,
          name: "北京123",
          address: "fhsafhsak",
        },
        {
          cenimaId: 10,
          name: "北京123",
          address: "fhsafhsak",
        },
        {
          cenimaId: 11,
          name: "北京123",
          address: "fhsafhsak",
        },
        {
          cenimaId: 12,
          name: "北京123",
          address: "fhsafhsak",
        },
        {
          cenimaId: 13,
          name: "北京123",
          address: "fhsafhsak",
        },
        {
          cenimaId: 14,
          name: "北京123",
          address: "fhsafhsak",
        },
        {
          cenimaId: 15,
          name: "北京123",
          address: "fhsafhsak",
        },
      ],
      backList: [
        {
          cenimaId: 1,
          name: "北京123",
          address: "fhsafhsak",
        },
        {
          cenimaId: 2,
          name: "北京123",
          address: "fhsafhsak",
        },
        {
          cenimaId: 3,
          name: "北京123",
          address: "fhsafhsak",
        },
        {
          cenimaId: 4,
          name: "北京123",
          address: "fhsafhsak",
        },
        {
          cenimaId: 5,
          name: "北京123",
          address: "fhsafhsak",
        },
        {
          cenimaId: 6,
          name: "北京123",
          address: "fhsafhsak",
        },
        {
          cenimaId: 7,
          name: "北京123",
          address: "fhsafhsak",
        },
        {
          cenimaId: 8,
          name: "北京123",
          address: "fhsafhsak",
        },
        {
          cenimaId: 9,
          name: "北京123",
          address: "fhsafhsak",
        },
        {
          cenimaId: 10,
          name: "北京123",
          address: "fhsafhsak",
        },
        {
          cenimaId: 11,
          name: "北京123",
          address: "fhsafhsak",
        },
        {
          cenimaId: 12,
          name: "北京123",
          address: "fhsafhsak",
        },
        {
          cenimaId: 13,
          name: "北京123",
          address: "fhsafhsak",
        },
        {
          cenimaId: 14,
          name: "北京123",
          address: "fhsafhsak",
        },
        {
          cenimaId: 15,
          name: "北京123",
          address: "fhsafhsak",
        },
      ],
    };
    //axios data request
    // axios
    //   .get("address")
    //   .then((res) => {})
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // axios({
    //   url: "adsasd",
    //   method: "get",
    //   headers: {},
    // }).then((res) => {
    //   console.log(res.data);
    // });
  }
  render() {
    return (
      <div>
        <input onInput={this.handleInput} />
        {this.state.cinemaList.map((item) => (
          <dl key={item.cenimaId}>
            <dt>{item.name}</dt>
            <dd>{item.address}</dd>
          </dl>
        ))}
      </div>
    );
  }
  handleInput = (event) => {
    // console.log(event.target.value);
    var newlist = this.state.backList.filter(
      (item) =>
        item.name.toUpperCase().includes(event.target.value.toUpperCase()) ||
        item.address.toUpperCase().includes(event.target.value.toUpperCase())
    );
    this.setState({
      cinemaList: newlist,
    });
  };
}
//filter
// var arr = ["a", "b", "c"];
// var newarr = arr.filter((item) => item.includes("a"));
