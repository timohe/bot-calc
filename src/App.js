import React, { Component } from 'react';
import logo from './logo.svg';
import Form from './components/Form'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'blabla',
      interestRatePerDay: 1.00,
      investmentLength: 99,
      gain: 0,
      doTakeOutCapital: false,
      initialCapital: 1000,
      investedCapital: [],
      gains: [],
    }
  }

  calculate = (interestRatePerDay, investmentLength, gain, doTakeOutCapital, initialCapital) => {
    var gainArray = [];
    var capitalArray = [];
    var currentlyInvested = initialCapital;

    for (var periods = 1; periods <= 6; periods++) {
      capitalArray.push(currentlyInvested)
      for (var day = 0; day <= investmentLength; day++) {
        currentlyInvested += currentlyInvested * (interestRatePerDay / 100);
        gain += currentlyInvested * (interestRatePerDay / 100);
      }
      gainArray.push(gain);
      //after the x days are gone, you got your capital back in rates so this is now included in the gains
      currentlyInvested = gain;
      if (doTakeOutCapital) {
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          FromChild: {this.state.name}
        </p>
        <Form
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;