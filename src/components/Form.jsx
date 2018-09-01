import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'initial'
    };
  }

  render() {
    return (
      <div>
        <TextField
          id="name"
          label="Name"
          placeholder="Timo"
          onChange={this.props.handleChange('name')}
          margin="normal"
        />
      </div>
    )
  }
}

export default Form
