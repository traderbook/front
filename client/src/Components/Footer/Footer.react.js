import React, { Component } from 'react';

export default class Footer extends Component {

getCurrentYear(){
  const currentYear = new Date().getFullYear().toString();
  return currentYear;
}

  render() {
    return (
        <p className="Footer">
          Copyright {this.getCurrentYear()} - TraderBook
        </p>
    );
  }
}
