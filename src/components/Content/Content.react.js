import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Options from './Options/ContentOptions.react.js'
import Editor from './Editor/Editor.react'

export default class Content extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.subContainer}>
          <Paper>
            <Editor />
          </Paper>
        </div>
        <div style={styles.subContainer}>
          <Paper>
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