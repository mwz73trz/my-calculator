import { Component } from 'react';
import './App.css';
import Keys from './components/Keys';
import Result from './components/Result';

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: ""
    }
  }

  onClick = button => {
    if (button === "=") {
      this.calculate()
    }
    else if (button === "*0.05") {
      this.setState ({ result: this.calculate(this.state.result + button) })
    }
    else if (button === "C") {
      this.reset()
    }
    else if (button === "CE") {
      this.backspace()
    }
    else {
      this.setState ({ result: this.state.result + button })
    }
  }

  calculate = () => {
    let checkResult = ""
    if (this.state.result.includes("--")) {
      checkResult = this.state.result.replace("--", "+")
    }
    else {
      checkResult = this.state.result
    }
    try {
      this.setState ({ result: (eval(checkResult) || "" ) + "" })
    }catch (e) {
      this.setState ({ result: "error" })
    }
  }

  reset = () => {
    this.setState ({ result: "" })
  }

  backspace = () => {
    this.setState ({ result: this.state.result.slice(0, -1) })
  }

  render() {
    return (
      <div>
        <div className="keys-body">
          <h1>My Calculator</h1>
          <Result result={this.state.result} />
          <Keys onClick={this.onClick} />
        </div>
      </div>
    )
  }
}

export default App;
