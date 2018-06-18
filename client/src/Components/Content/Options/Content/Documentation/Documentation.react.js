import React from 'react';
import PropTypes from 'prop-types';
import './Documentation.scss';


export default class OptionsContentDocumentation extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (

      <div id="content">
        <div id="left">
          <h2>Event function</h2>
            <li><a href="#OnInit">OnInit</a></li>
            <li><a href="#OnTick" >OnTick</a></li>
            <li><a href="#OnDestruct" >OnDestruct</a></li>
          <h2>Trading function</h2>
            <li><a href="#OpenOrder" >OpenOrder</a></li>
            <li><a href="#CloseOrder" >CloseOrder</a></li>
            <li><a href="#ListOrder" >ListOrder</a></li>
        </div>
        <div id="right">
          <h2>Description de la fonction</h2>
            <div className="tab">
                <div id="OnInit">Fonction OnInit: .....</div>
                <div id="OnTick">Fonction OnTick: .....</div>
                <div id="OnDestruct">Fonction OnDestruct: .....</div>
                <div id="OpenOrder">Fonction OpenOrder: .....</div>
                <div id="CloseOrder">Fonction CloseOrder: .....</div>
                <div id="ListOrder">Fonction ListOrder: .....</div>
            </div>
        </div>
      </div>
    )
  }
}