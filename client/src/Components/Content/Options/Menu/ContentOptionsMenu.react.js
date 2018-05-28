import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

import OptionsContentAnalytics from '../Content/Analytics/Analytics.react';
import OptionsContentBacktests from '../Content/Backtests/Backtests.react';
import OptionsContentOutput from '../Content/Output/Output.react';
import OptionsContentDocumentation from '../Content/Documentation/Documentation.react';
import Button from 'material-ui/Button';



export default class ContentOptionsMenu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <Router>
            <div style={styles.container}>
                <div style={styles.menu}>
                    <ul id="navigation">
                        <li><Link to="/analytics"><Button>Analytics</Button></Link></li>
                        <li><Link to="/backtests"><Button>Backtests</Button></Link></li>
                        <li><Link to="/output"><Button>Output</Button></Link></li>
                        <li><Link to="/documentation"><Button>Documentation</Button></Link></li>
                    </ul>
                </div>
                <div>
                <Switch>

                    <Route exact={true} path="/analytics" component={OptionsContentAnalytics} />
                    <Route exact={false} path="/backtests" component={OptionsContentBacktests} />
                    <Route path="/output" component={OptionsContentOutput} />
                    <Route path="/documentation" component={OptionsContentDocumentation} />
                    </Switch>
                </div>

            </div>
        </Router>
    )
  }
}

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      paddingTop: '1em',
    },
    menu: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '100%',
    }
  }
