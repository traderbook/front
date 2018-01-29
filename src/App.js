import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Traderbook</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        <Footer/>
      </div>
    );
  }
}

export default App;
