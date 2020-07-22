
import React, { Component } from 'react';

export default class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'This is home page',
    };
  }

  render() {
    return (
      <div className="home">
        <h1 className="h-txt">{this.state.name}!!!!!</h1>
      </div>
    );
  }
}
