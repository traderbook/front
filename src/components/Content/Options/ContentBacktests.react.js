import React from 'react';
import PropTypes from 'prop-types';
import './options.scss';


export default class ContentBackTests extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={styles.container}>
        <p>Yo !</p>
      </div>

    )
  }
}

  const styles = {
    container: {
      display: 'flex',
    }
  }