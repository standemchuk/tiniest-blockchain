import React, { Component } from 'react'

import flattenArray from '../helpers/flattenArray'

export default class ShowTransactionHistory extends Component {
  state = {
    transactions: []
  }

  async componentDidMount () {
    const response = await fetch('http://localhost:3000/api/blocks')

    const responseJson = await response.json()

    console.log(responseJson)

    const transactions = flattenArray(
      responseJson.blocks.map(block => block.data.transactions)
        // specifically using != instead
        // of !== to check for both null and undefined
        .filter(blockTransactions => blockTransactions != null)
    )

    this.setState({ transactions })
  }

  render () {
    return (
      <div>
        <h2>Transaction history</h2>
        <ul>
          {this.state.transactions && this.state.transactions.map(transaction => (
            <li key={transaction.createdAt.toString()}>
              <div>
                <p>From: {transaction.from}</p>
                <p>To: {transaction.to}</p>
                <p>Amount: {transaction.amount}</p>
                <p>Created at: {new Date(transaction.createdAt).toUTCString()}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
