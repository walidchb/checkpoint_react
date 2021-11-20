import React, { Component } from "react";
import data from "../data.json";
import OUR_CMPNT from "./OUR_CMPNT";

export default class Help extends Component {
  state = {
    counter: 0,
  };

  back_function = () => {
    if (this.state.counter == 0) {
      this.setState({
        counter: data.length - 1,
      });
    } else {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  };

  next_function = () => {
    if (this.state.counter == data.length - 1) {
      this.setState({
        counter: 0,
      });
    } else {
      this.setState({
        counter: this.state.counter + 1,
      });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.back_function} type="">
          back
        </button>

        <OUR_CMPNT
          img={data[this.state.counter].logo}
          one={data[this.state.counter].company}
          news={data[this.state.counter].new}
          featured={data[this.state.counter].featured}
          job={data[this.state.counter].position}
          date={data[this.state.counter].postedAt}
          time={data[this.state.counter].contract}
          place={data[this.state.counter].location}
          skill={data[this.state.counter].languages}
          tools={data[this.state.counter].tools}
        />

        <button onClick={this.next_function} type="">
          next
        </button>
      </div>
    );
  }
}
