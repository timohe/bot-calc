import React, { Component } from 'react';
import logo from './logo.svg';
import Form from './components/Form'
import Graph from './components/Graph'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      interestRatePerDay: 1.4,
      investmentLength: 99,
      initialCapital: 1000,
      investedCapital: [],
      gains_fullReinvest: [],
      gains_takeOutCapital: [],
    }
  }

  calculate_fullReinvest = () => {
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
    }
    this.setState({
      gains_fullReinvest: gainArray,
    })
  }

  calculate_takeOutCapital = () => {
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
      //take out initial capital
      currentlyInvested -= capitalArray[capitalArray.length - 1];
    }
    this.setState({
      gains_takeOutCapital: gainArray,
    })
  }

  // https://stackoverflow.com/questions/32782922/what-do-multiple-arrow-functions-mean-in-javascript
  handleChange = (fieldName) => event => {
    this.setState({
      [fieldName]: Number(event.target.value),
    });
  };

  componentDidMount() {
    this.calculate_fullReinvest();
    this.calculate_takeOutCapital();
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Form
          handleChange={this.handleChange}
          handleCheckboxChange={this.handleCheckboxChange}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => { this.calculate_fullReinvest(); this.calculate_takeOutCapital(); }}
        >
          calculate
        </Button>
        <Graph
          gainsFullReinvest={this.state.gains_fullReinvest}
          gainsTakeOutCapital={this.state.gains_takeOutCapital}
        />
      </div>
    );
  }
}

export default App;