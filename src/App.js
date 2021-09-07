import React, { useState } from "react";
import "./styles.css";
import { Component } from "react";

class App extends Component {
  state = {
    count: 0
  };

  render() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";

    return (
      <div className="App">
        <span className={classes}>{this.handleZero()}</span>
        <button className="btn btn-primary">Increment</button>
      </div>
    );
  }

  handleZero() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default App;
