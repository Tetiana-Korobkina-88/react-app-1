import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({count: this.state.count + 1});

    console.log('from handle click');
    // this.setState ((prevState)=>({count: prevState.count + 1}));
  }

  decrement = () => {
    this.setState({count: this.state.count - 1});

    console.log('from handle click');
    // this.setState ((prevState)=>({count: prevState.count + 1}));
  }

  render() {
    return (
    <div className="App" style={{margin: 'auto', width: '300px'}}>
      <button onClick={this.decrement}>-</button>
      <span style={{margin: '0 1rem', display: "inline-block"}}>{this.state.count}</span>
      <button onClick={this.increment}>+</button>
    </div>
    );
  }
}

export default App;