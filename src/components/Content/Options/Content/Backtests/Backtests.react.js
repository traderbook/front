import React from 'react';
import PropTypes from 'prop-types';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import './Backtests.scss';

let id = 0;
function createData(started, ended, initial, final, trades, monetaryPerf, percentagePerf) {
  id += 1;
  return { id, started, ended, initial, final, trades, monetaryPerf, percentagePerf };
}

const data = [
    createData('2017-11-23 12:23:45', '2017-11-23 12:23:45', 10000, 100223, 564, 234.45, 2.34),
    createData('2017-11-23 12:23:45', '2017-11-23 12:23:45', 10000, 100223, 564, 234.45, 2.34),
    createData('2017-11-23 12:23:45', '2017-11-23 12:23:45', 10000, 100223, 564, 234.45, 2.34),
    createData('2017-11-23 12:23:45', '2017-11-23 12:23:45', 10000, 100223, 564, 234.45, 2.34),
  ];


export default class OptionsContentBacktests extends React.Component {
  constructor(props) {
    super(props)
  }
  

  render() {
    return (
        <Table className='tata'>
          <TableHead>
            <TableRow>
              <TableCell>Started at</TableCell>
              <TableCell>Ended at</TableCell>
              <TableCell numeric>Capital initial</TableCell>
              <TableCell numeric>Capital final</TableCell>
              <TableCell numeric>Trades</TableCell>
              <TableCell numeric>Perf. ($)</TableCell>
              <TableCell numeric>Perf. (%)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((n,i) => {
              let styleTab = '';
              if ( (i) % 2 === 0) {
                styleTab = 'striped';
              }
              console.log(styleTab);
              return (
                <TableRow className={styleTab} key={i}>
                  <TableCell>{n.started}</TableCell>
                  <TableCell>{n.ended}</TableCell>
                  <TableCell numeric>{n.initial}</TableCell>
                  <TableCell numeric>{n.final}</TableCell>
                  <TableCell numeric>{n.trades}</TableCell>
                  <TableCell numeric>{n.monetaryPerf}</TableCell>
                  <TableCell numeric>{n.percentagePerf}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
    )
  }
}