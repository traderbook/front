import React, { Component } from 'react';

class Footer extends Component {

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

export default Footer;
