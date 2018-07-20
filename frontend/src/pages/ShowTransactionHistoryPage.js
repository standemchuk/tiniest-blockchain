import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'

import ErrorModal from '../components/ErrorModal'
import GenericTable from '../components/GenericTable'
import PageHeader from '../components/PageHeader'

export default class ShowTransactionHistoryPage extends Component {
  state = {
    transactions: [],
    requestError: false
  }

  async componentDidMount () {
    await this.getTransactions()
  }

  getTransactions = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/transactions')

      if (response && response.status === 200) {
        const responseJson = await response.json()

        this.setState({ transactions: responseJson.transactions })
      } else {
        this.setState({ requestError: true })
      }
    } catch (err) {
      this.setState({ requestError: true })
    }
  }

  handleRetry = async () => {
    await this.getTransactions()
  }

  handleModalClose = () => {
    this.setState({ requestError: false })
  }

  render () {
    return (
      <Grid container>
        <PageHeader title='Transaction history' />
        <Grid item xs={12}>
          <GenericTable
            data={this.state.transactions}
            headers={['Sender', 'Receiver', 'Amount', 'Created at']}
          />
          <ErrorModal
            open={this.state.requestError}
            handleModalClose={this.handleModalClose}
            handleRetry={this.handleRetry}
          />
        </Grid>
      </Grid>
    )
  }
}
