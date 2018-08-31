import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Cat in the Hat',
      age: '',
      multiline: 'Controlled',
      currency: 'EUR'
    };
  }

  // eslint-disable-next-line
  handleNameChange = (event) => { // eslint-disable-line
    this.setState(
      { name: event.target.value }
    );
    this.props.changeName(event.target.value)
  }
  /*eslint-enable */
  render() {
    return (
      <div>
        <p>
          Hererererere:
        </p>
        <TextField
          id="name"
          label="Name"
          value={this.state.name}
          onChange={this.handleNameChange}
          margin="normal"
        />
        {this.state.name}
      </div>
    )
  }
}

export default Form
