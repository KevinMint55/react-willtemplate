import React, { Component } from 'react';

interface State {
  count: number;
}

export default class Count extends Component {
  // public state = {
  //   count: 0,
  // }
  readonly state: Readonly<State> = {
    count: 0,
  }

  constructor(props: any) {
    super(props);
    // this.state = {
    //   count: 0,
    // };
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        当前count值：{this.state.count}<br />
        <button style={{ border: '1px dashed blue' }} onClick={() => this.handleClick()}>增加1</button>
      </div>
    );
  }
}
