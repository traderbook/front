import React, { Component } from 'react';
import './styles.scss';
import Header from './Header/Header.react';
import Content from './Content/Content.react';
import Footer from './Footer/Footer.react';

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

