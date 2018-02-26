import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Options from './Options/ContentOptions.react.js'

export default class Content extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.subContainer}>
          <Paper><h2>Bloc code</h2></Paper>
        </div>
        <div style={styles.subContainer}>
          <Paper>
            <h2>Options</h2>
              <Options />
          </Paper>
        </div>
      </div>

    )
  }
}

  const styles = {
    container: {
      display: 'flex',
    },
    subContainer: {
      display: 'flex',
      flex: '1',
      flexDirection: 'column',
      padding: '10px'
    }
  }