import React from 'react';
import PropTypes from 'prop-types';
import ContentOptionsMenu from './Menu/ContentOptionsMenu.react';
import './options.scss';


export default class ContentOptions extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container" style={styles.container}>
        <ContentOptionsMenu />
      </div>

    )
  }
}

  const styles = {
    container: {
      display: 'flex',
    },
    menu: {
      display: 'flex',
      flexDirection: 'column',
    }
  }
