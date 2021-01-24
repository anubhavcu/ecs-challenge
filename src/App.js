import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Title from './components/Title';

export class App extends Component {
  state = {
    count: 0,
  };
  handleReset = () => {
    this.setState({ count: 0 });
  };
  handleIncrement = () => {
    console.log('handle increment from app');
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  };
  render() {
    return (
      <>
        <Header count={this.state.count} />
        <Title count={this.state.count} handleReset={this.handleReset} />
        <Content
          count={this.state.count}
          handleIncrement={this.handleIncrement}
        />
      </>
    );
  }
}

export default App;
