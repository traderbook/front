import React from 'react';
import PropTypes from 'prop-types';
import showData from './data.js';

export default class OptionsContentAnalytics extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
      showData()
  }

  render() {
    return (
      <div id="container" style={styles.graph}></div>
    )
  }
}

const styles = {
  graph: {

  }
}
