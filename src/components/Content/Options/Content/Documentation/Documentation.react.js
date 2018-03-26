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
          <li>OnInit</li>
          <li>OnTick</li>
          <li>OnDestruct</li>
          <h2>Trading function</h2>
          <li>OpenOrder</li>
          <li>CloseOrder</li>
          <li>ListOrder</li>
        </div>
        <div id="right">
          <h2>test</h2>
        </div>
      </div>
    )
  }
}