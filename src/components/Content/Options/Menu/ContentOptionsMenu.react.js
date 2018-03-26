import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OptionsContentAnalytics from '../Content/Analytics/Analytics.react'



export default class ContentOptionsMenu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <Router>
            <div style={styles.menu}>
                <ul id="navigation">
                    <li><Link to="/analytics">Analytics</Link></li>
                    <li><Link to="/backtests">Backtests</Link></li>
                    <li><Link to="/output">Output</Link></li>
                    <li><Link to="/documentation">Documentation</Link></li>
                </ul>
                <Route path="/analytics" component={OptionsContentAnalytics} />
            </div>
        </Router>
    )
  }
}

  const styles = {
    menu: {
      display: 'flex',
    }
  }
