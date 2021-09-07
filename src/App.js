import React, { useState } from "react";
import "./styles.css";
import { Component } from "react";

class App extends Component {
  state = {
    count: 0,
    tags: ["item1", "item2", "item3", "item4"]
  };

  render() {
    return (
      <div className="App">
        <span className={this.getBadgeClasses()}>{this.handleZero()}</span>
        <button className="btn btn-primary">Increment</button>
        <ul>
          {this.state.tags.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge text-dark m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  handleZero() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default App;
