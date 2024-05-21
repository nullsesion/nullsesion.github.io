import React, { Component } from 'react'; // let's also import Component

type ClockState = {
  time: Date
}

export default class Clock extends Component<{}, ClockState> {

  tick() {
    this.setState({
      time: new Date()
    });
  }

  componentWillMount() {
    this.tick();
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  render() {
    return <p>The current time is {this.state.time.toLocaleTimeString()}</p>
  }
}