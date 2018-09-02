import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div>
          <TextField
            label="Daily interest"
            placeholder="1.5"
            onChange={this.props.handleChange('interestRatePerDay')}
            margin="normal"
            type="number"
          />
        </div>
        <div>
          <TextField
            label="Duration in days"
            placeholder="90"
            onChange={this.props.handleChange('investmentLength')}
            margin="normal"
            type="number"
          />
        </div>
        <div>
          <TextField
            label="Initial investment"
            placeholder="1000"
            onChange={this.props.handleChange('initialCapital')}
            margin="normal"
            type="number"
          />
        </div>
      </div>
    )
  }
}

export default Form
