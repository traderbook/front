import React from 'react';
import PropTypes from 'prop-types';


function createData(date, message) {
  return { date, message };
}

const data = [
  createData('01-01-1970 00:00:00', 'Lorem ipsum dolor sit amet'),
  createData('01-01-1970 00:00:00', 'Lorem ipsum dolor sit amet'),
  createData('01-01-1970 00:00:00', 'Lorem ipsum dolor sit amet'),
  createData('01-01-1970 00:00:00', 'Lorem ipsum dolor sit amet'),
  createData('01-01-1970 00:00:00', 'Lorem ipsum dolor sit amet'),
  createData('01-01-1970 00:00:00', 'Lorem ipsum dolor sit amet'),
  ];

export default class OptionsContentOutput extends React.Component {
  constructor(props) {
    super(props)
  }



  render() {

    return (
      <div>
        {data.map(n => {
              return (
                  <p>[{n.date}] - {n.message} </p>
              );
            })}
      </div>
    )
  }
}
