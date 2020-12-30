import React from 'react';
import Header from './header';
import Subtitle from './subtitle';
import Title from './title';

export default class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
    };
    this.changeMessage = this.changeMessage.bind(this);
  }

  changeMessage() {
    //this.setState({ param : newValue}) || this.setState((state) => this.state.count = state.count + 1  )
    this.setState((state) => ({ message: 'good' }));
  }

  render() {
    return (
      <div>
        <Header>
          <Title message={this.state.message}></Title>
          <Subtitle message={this.state.message}></Subtitle>
        </Header>
        <button onClick={this.changeMessage}>change to a good message</button>
      </div>
    );
  }
}
