import React, { Component } from 'react';
import logo from './logo.svg';
import Form from './components/Form'
import Button from '@material-ui/core/Button';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      interestRatePerDay: 1.4,
      investmentLength: 99,
      doTakeOutCapital: false,
      initialCapital: 1000,
      investedCapital: [],
      gains: [],
    }
  }

  calculate = () => {
    // console.log("*******"+this.state.interestRatePerDay+" "+this.state.investmentLength+" "+this.state.doTakeOutCapital+" "+this.state.initialCapital)
    var gain = 0;
    var currentlyInvested = this.state.initialCapital;
    var gainArray = [0];
    var capitalArray = [];

    for (var periods = 1; periods <= 6; periods++) {
      capitalArray.push(Math.round(currentlyInvested))
      for (var day = 0; day < this.state.investmentLength; day++) {
        currentlyInvested += currentlyInvested * (this.state.interestRatePerDay / 100);
        gain += currentlyInvested * (this.state.interestRatePerDay / 100);
      }
      gainArray.push(Math.round(gain));
      //after the x days are gone, you got your capital back in rates so this is now included in the gains
      currentlyInvested = gain;
      if (this.state.doTakeOutCapital) {
        currentlyInvested -= capitalArray[capitalArray.length - 1];
      }
    }
    this.setState({
      gains: gainArray,
      investedCapital: capitalArray
    })
  }

  // https://stackoverflow.com/questions/32782922/what-do-multiple-arrow-functions-mean-in-javascript
  handleChange = (fieldName) => event => {
    this.setState({
      [fieldName]: event.target.value,
    });
  };

  handleCheckboxChange = (fieldName) => event => {
    this.setState({
      [fieldName]: event.target.checked,
    });
  };

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <p className="App-intro">
          FromChild: {this.state.name}
        </p>
        <p className="App-intro">
          Checkbox: {this.state.doTakeOutCapital.toString()}
        </p> */}
        <p className="App-intro">
          Gain: {this.state.gains.toString()}
        </p>
        <p className="App-intro">
          Capital: {this.state.investedCapital.toString()}
        </p>

        <Form
          handleChange={this.handleChange}
          handleCheckboxChange={this.handleCheckboxChange}

        />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => this.calculate(this.state.interestRatePerDay, this.state.investmentLength, this.state.doTakeOutCapital, this.state.initialCapital)}
        >
          calculate
        </Button>
      </div>

    );
  }
}

export default App;