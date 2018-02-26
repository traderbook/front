import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

export default class Content extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{}}>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <Paper><h2>Bloc code</h2></Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper><h2>Bloc Params</h2></Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}
