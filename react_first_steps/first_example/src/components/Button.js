import React from 'react';
import './Button.css';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cliked: false,
    };
  }

  render() {
    return (
      <button onClick={this.props.onClick} className="main-button">
        {this.props.text}
      </button>
    );
  }
}
