import React, { Component } from 'react'

export default class TrackAccountBalance extends Component {
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
      ...responseJson
    })
  }
  render () {
    return (
      <div>
        <h2>Your account balance</h2>
        <p>Your user id is: {this.state.userId}</p>
        <p>You have {this.state.accountBalance} coins on your account</p>

        <h3>Transactions list</h3>
        <ul>
          {this.state.userTransactions && this.state.userTransactions.map(transaction => (
            <li>
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
