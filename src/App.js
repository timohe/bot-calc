import React, { Component } from 'react';
import logo from './logo.svg';
import Form from './components/Form'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'blabla'
    }
  }

  onChangeName = (newName) => { 
    this.setState(
      { name: newName }
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          HERE: {this.state.name}
        </p>
        <Form 
          changeName = {this.onChangeName}
        />
      </div>
    );
  }
}

export default App;
