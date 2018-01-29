import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.js'
import Content from './components/Content/Content.js'
import Footer from './components/Footer/Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
