import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      someKey: false
    };
  }

  handleClick = () => {
    this.setState({count: this.state.count + 1});

    console.log('from handle click');
    // this.setState ((prevState)=>({count: prevState.count + 1}));
  }

  render() {
    return (
    <div className="App">
      Hello from React
      <button onClick={this.handleClick}>{this.state.count}</button>
    </div>
    );
  }
}

export default App;