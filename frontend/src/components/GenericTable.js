import React, { PureComponent } from 'react'
import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'

export default class GenericTable extends PureComponent {
  render () {
    const { data, headers } = this.props
    if (!data || !data.length) {
      return (
        <Grid container>
          <Grid item xs={12}>
            <Typography style={{ marginLeft: 30 }} variant='subheading'>No data</Typography>
          </Grid>
        </Grid>
      )
    }
    return (
      <Table>
        <TableHead>
          <TableRow>
            {headers && headers.map(header => (
              <TableCell key={header}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index.toString()}>
              {Object.keys(item).map(key => (
                <TableCell key={key}>{item[key]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
}
