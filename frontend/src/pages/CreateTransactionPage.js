import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Snackbar from '@material-ui/core/Snackbar'

import PageHeader from '../components/PageHeader'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  card: {
    margin: theme.spacing.unit * 2
  },
  input: {
    margin: theme.spacing.unit
  }
})

export class CreateTransactionPage extends Component {
  state = {
    transactionReceiver: '',
    amount: 0,
    formError: false,
    transactionCreated: false,
    submitError: false,
    transactionFieldError: false,
    amountFieldError: false
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
      transactionFieldError: false,
      amountFieldError: false
    })
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    this.setState({ transactionCreated: false, submitError: false })
  };

  submitForm = async (event) => {
    event.preventDefault()

    if (this.state.transactionReceiver.length === 0) {
      this.setState({ transactionFieldError: true })
      return
    }

    if (this.state.amount === 0) {
      this.setState({ amountFieldError: true })
      return
    }

    try {
      const userId = localStorage.getItem('userId')
      const response = await fetch('http://localhost:3000/api/transaction', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
          from: userId,
          to: this.state.transactionReceiver,
          amount: parseFloat(this.state.amount)
        })
      })

      if (response && response.status === 201) {
        this.setState({ transactionCreated: true, transactionReceiver: '', amount: 0 })
      } else {
        this.setState({ submitError: true })
      }
    } catch (e) {
      this.setState({ submitError: true })
    }
  }

  render () {
    return (
      <Grid container spacing={24}>
        <PageHeader title='Create a new transaction' />
        <Grid item xs={12} sm={6}>
          <Card className={this.props.classes.card}>
            <CardHeader title='Please fill in the transaction info' />
            <CardContent>
              <Grid item xs={12}>
                <form
                  className={this.props.classes.container}
                  onSubmit={this.submitForm}
                  noValidate
                  autoComplete='off'
                >
                  <Grid item xs={12}>
                    <TextField
                      className={this.props.classes.input}
                      name='transactionReceiver'
                      label='Receiver ID'
                      placeholder='Alphanumeric'
                      fullWidth
                      error={this.state.transactionFieldError}
                      value={this.state.transactionReceiver}
                      onChange={this.handleChange('transactionReceiver')}
                      margin={'normal'}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      className={this.props.classes.input}
                      name='amount'
                      label='Amount'
                      placeholder='Numeric'
                      fullWidth
                      error={this.state.amountFieldError}
                      value={this.state.amount}
                      onChange={this.handleChange('amount')}
                      margin={'normal'}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button className={this.props.classes.input} variant='contained' color='primary' type='submit'>Submit</Button>
                  </Grid>
                </form>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          open={this.state.submitError || this.state.transactionCreated}
          autoHideDuration={6000}
          onClose={this.handleClose}
          message={
            <span>
              {this.state.submitError
                ? 'Transaction creation failed'
                : 'Transaction created!'}
            </span>
          }
        />
      </Grid>
    )
  }
}

export default withStyles(styles)(CreateTransactionPage)
