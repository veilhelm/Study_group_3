import React from 'react';
import Button from './Button';

export default class Form extends React.Component {
  render() {
    return (
      <div className="form-container">
        <form>
          <label>a cool input</label>
          <input type="text"></input>
          <Button
            onClick={() => console.log('im alive')}
            text="save my name"
          ></Button>
        </form>
        0
      </div>
    );
  }
}
