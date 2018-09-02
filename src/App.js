import React, { Component } from 'react';
import Form from './components/Form'
import Graph from './components/Graph'
import Button from '@material-ui/core/Button';
import './App.css';
import Helmet from 'react-helmet';

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
      gain += capitalArray[capitalArray.length - 1];
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
        <Helmet bodyAttributes={{ style: 'background-color : #F5F5F5' }} />

        <h1>Crypto Bot Calculator</h1>
        <p>Even though gains might seem huge, those crypto bots are all based on <a href="https://en.wikipedia.org/wiki/Ponzi_scheme">Ponzi schemes</a>,
          <br />This means they will go down sooner or later, which makes this a high-risk investment.
        </p>

        <h2>Examples</h2>
        <p><a href="http://t.me/therecycle_bot?start=550959464">RecycleBot:</a> Interest: 2.8%, Duration 60 Days</p>
        <p><a href="https://t.me/iCenter_ETH_Bot?start=86vo4g86124">iCenter:</a> Interest: 1.4%, Duration 99 Days</p>
        <Form
          handleChange={this.handleChange}
          handleCheckboxChange={this.handleCheckboxChange}
        />
        <div className="CalcButton">
          <Button
            variant="contained"
            color="secondary"
            onClick={() => { this.calculate_fullReinvest(); this.calculate_takeOutCapital(); }}
          >
            calculate
          </Button>
        </div>

        <Graph
          gainsFullReinvest={this.state.gains_fullReinvest}
          gainsTakeOutCapital={this.state.gains_takeOutCapital}
        />
        <p>Notes on Calculation: 
        <br />All the bots I have seen work the same: 
        You will get a daily interest which you can reinvest.
        The initial investment will be included in this daily interest.
        This means if a bot has 1.5% for 100 days, you will get back 1% from your capital (=100%) each day plus 0.5% interest. 
        You will not get your capital back after the whole duration.
        <br />This calculater includes compound interest and assumes a reinvestment once a day.
        The "take out capital"-line means after each period you take out the money you invested at the start of this period.
        </p>
      </div>
    );
  }
}

export default App;