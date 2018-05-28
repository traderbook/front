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
          <Paper style={{height: '100%'}}>
            <Editor />
          </Paper>
        </div>
        <div style={styles.subContainer}>
          <Paper style={{height: '100%'}}>
              <Options />
          </Paper>
        </div>
      </div>

    )
  }
}

const styles = {
  container: {
   display: 'grid',
   gridTemplateColumns: '1fr 1fr',
   gridTemplateRows: '1fr',
   height: '85vh',
  },
  subContainer: {
    padding: '10px',    
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  }
}