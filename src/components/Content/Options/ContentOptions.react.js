import React from 'react';
import PropTypes from 'prop-types';


export default class ContentOptions extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={styles.menu}>
        
      </div>
      <div style={styles.container}>
       <p>Todo</p>
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