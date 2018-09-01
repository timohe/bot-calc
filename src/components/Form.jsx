import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
// import Checkbox from '@material-ui/core/Checkbox';
// import FormControlLabel from '@material-ui/core/FormControlLabel';

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
            onChange={this.props.handleChange('name')}
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
        {/* <div>
          <FormControlLabel
            control={
              <Checkbox
                onChange={this.props.handleCheckboxChange('doTakeOutCapital')}
              />
            }
            label="Take out initial investment"
          />
        </div> */}
      </div>
    )
  }
}

export default Form
