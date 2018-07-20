import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import { withStyles } from '@material-ui/core/styles'

import ErrorModal from '../components/ErrorModal'

import GenericTable from '../components/GenericTable'
import PageHeader from '../components/PageHeader'

const styles = theme => ({
  card: {
    margin: theme.spacing.unit * 2
  }
})

export class TrackAccountBalancePage extends Component {
  state = {
    userId: '',
    accountBalance: 0,
    userTransactions: [],
    requestError: false
  }

  async componentDidMount () {
    await this.getBalance()
  }

  getBalance = async () => {
    const userId = localStorage.getItem('userId')

    try {
      const response = await fetch(`http://localhost:3000/api/balance/${userId}`)

      if (response && response.status === 200) {
        const responseJson = await response.json()

        this.setState({
          userId,
          accountBalance: responseJson.accountBalance,
          userTransactions: responseJson.userTransactions
        })
      } else {
        this.setState({ requestError: true })
      }
    } catch (err) {
      this.setState({ requestError: true })
    }
  }

  handleModalClose = () => {
    this.setState({ requestError: false })
  }

  handleRetry = async () => {
    await this.getBalance()
  }

  render () {
    const { classes } = this.props

    return (
      <Grid container>
        <PageHeader title='Your account Balance' />
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
        <ErrorModal
          open={this.state.requestError}
          handleRetry={this.handleRetry}
          handleModalClose={this.handleModalClose}
        />
      </Grid>
    )
  }
}

export default withStyles(styles)(TrackAccountBalancePage)
