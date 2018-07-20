import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import { withStyles } from '@material-ui/core/styles'

import GenericTable from '../components/GenericTable'

const styles = theme => ({
  header: {
    padding: theme.spacing.unit * 2
  },
  card: {
    margin: theme.spacing.unit * 2
  }
})

export class TrackAccountBalance extends Component {
  state = {
    userId: '',
    accountBalance: 0,
    userTransactions: []
  }

  async componentDidMount () {
    const userId = localStorage.getItem('userId')
    const response = await fetch(`http://localhost:3000/api/balance/${userId}`)

    const responseJson = await response.json()

    this.setState({
      userId,
      accountBalance: responseJson.accountBalance,
      userTransactions: responseJson.userTransactions
    })
  }
  render () {
    const { classes } = this.props

    return (
      <Grid container>
        <Grid item xs={12}>
          <Typography className={classes.header} variant='display2' paragraph align={'center'}>Your account balance</Typography>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className={classes.card}>
            <CardHeader title='Account info' />
            <CardContent>
              <Typography paragraph>Your user id is: {this.state.userId}</Typography>
              <Typography>You have {this.state.accountBalance} coins on your account</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Card className={classes.card}>
            <CardHeader title='Transactions list' />
            <CardContent>
              <GenericTable
                data={this.state.userTransactions}
                headers={['Sender', 'Receiver', 'Amount', 'Created at']}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(TrackAccountBalance)
