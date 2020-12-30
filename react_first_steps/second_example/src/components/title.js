import React from 'react';
import './title.css';

export default class Title extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log('the title will be mounted');
  }

  componentDidMount() {
    console.log('the compoment has mounted');
  }

  componentWillUnmount() {
    console.log('this component is going to disapear');
    //cleanUp(this.setState({all : null}))
  }

  render() {
    this.title =
      this.props.message === 'good'
        ? 'hi everyone, what a lovely day'
        : 'I hate chrismas';
    console.log(this.props.message);
    console.log(this.title);
    return (
      <div className="title">
        <h1>{this.title}</h1>
        <h3>this is a custom component</h3>
      </div>
    );
  }
}
