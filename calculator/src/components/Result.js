import { Component } from 'react';

class Result extends Component {
  render() {
    let {result} = this.props
    return (
      <div class="result">
        <p>{result}</p>
      </div>
    )
  }
}

export default Result;