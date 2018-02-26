import React, { Component } from 'react';
import './styles.scss';
import Header from './Header/Header.react.js'
import Content from './Content/Content.react.js'
import Footer from './Footer/Footer.react.js'

export default class App extends Component {
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
