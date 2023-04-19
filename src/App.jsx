import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      count: Math.floor(Math.random() * 100),
      steps: 0,
      isEnabled: true,
    };
    this.plus1Click = this.plus1Click.bind(this);
    this.minus1Click = this.minus1Click.bind(this);
    this.multBy2Click = this.multBy2Click.bind(this);
    this.divBy2Click = this.divBy2Click.bind(this);
  }

  plus1Click() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
      steps: prevState.steps + 1,
      isEnabled: false,
    }));
  }

  minus1Click() {
    this.setState((prevState) => ({
      count: prevState.count - 1,
      steps: prevState.steps + 1,
      isEnabled: false,
    }));
  }

  multBy2Click() {
    this.setState((prevState) => ({
      count: prevState.count * 2,
      steps: prevState.steps + 1,
      isEnabled: false,
    }));
  }

  divBy2Click() {
    this.setState((prevState) => ({
      count: prevState.count / 2,
      steps: prevState.steps + 1,
      isEnabled: false,
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>Get to 100!</h1>
        <h2>User: {this.state.username}</h2>
        <h4>{this.state.isEnabled == true ? "Enabled!" : "Disabled"}</h4>
        <h2>{this.state.count}</h2>
        <h3>steps: {this.state.steps}</h3>
        <h4>{this.state.count == 100 ? "You won!" : ""}</h4>
        <div className="actions">
          <button onClick={this.plus1Click}>+1</button>
          <button onClick={this.minus1Click}>-1</button>
          <button onClick={this.multBy2Click}>×2</button>
          <button onClick={this.divBy2Click}>÷2</button>
        </div>
      </div>
    );
  }
}

export default App;
