import React from 'react';
import PropTypes from 'prop-types';


export default class ContentOptionsMenu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={styles.menu}>
        <ul id="navigation">
            <li><a href="#">Analytics</a></li>
            <li><a href="#">Backtests</a></li>
            <li><a href="#">Output</a></li>
            <li><a href="#">Documentation</a></li>
        </ul>
      </div>

    )
  }
}

  const styles = {
    menu: {
      display: 'flex',
    }
  }