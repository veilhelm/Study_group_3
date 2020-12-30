import React from 'react';

export default class Subtitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    this.subtitle =
      this.props.message === 'good' ? 'I love react' : 'I hate react';
    return (
      <div className="subtitle">
        <h6>{this.subtitle}</h6>
      </div>
    );
  }
}
