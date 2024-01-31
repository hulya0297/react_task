import React, { Component } from "react";

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleInc = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  handleDec = () => {
    if (this.state.count > 0) {
      this.setState((prev) => ({ count: prev.count - 1 }));
    }
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="main" >
      <div className="continer">
        <h2>Counter App</h2>

        <button
          className="btn"
          onClick={this.handleDec}
          disabled={this.state.count === 0}
        >
          -
        </button>
        <span>{this.state.count}</span>
        <button className="btn" onClick={this.handleInc}>
          +
        </button>
        <br />

        <button className="btn reset" onClick={this.handleReset}>
          Reset
        </button>
      </div>
      
      </div>
      
    );
  }
}

export default CounterClass;
