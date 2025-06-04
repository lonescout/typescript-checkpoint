// Import necessary modules from React
import React, { Component } from 'react';

// 1️⃣ Define Props interface (empty in this case, but necessary for type safety)
interface CounterProps {}

// 2️⃣ Define State interface
interface CounterState {
  count: number;
}

// 3️⃣ Extend Component with typed props and state
class Counter extends Component<CounterProps, CounterState> {
  // 4️⃣ Properly type the initial state
  state: CounterState = {
    count: 0,
  };

  // 5️⃣ Arrow function keeps `this` context
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    // 6️⃣ Make sure return is on the same line or use parentheses
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
