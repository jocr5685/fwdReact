import React, { Component } from 'react';
import './App.css';
import InputForm from './inputForm.js';
import DisplayGrid from './displayGrid.js';

class App extends Component {
  render() {
    return (
      <div>
      <InputForm />
      <DisplayGrid />
      </div>
    );
  }
}

export default App;
