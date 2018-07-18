import React, { Component } from 'react'

export default class CreateTransactionPage extends Component {
  state = {
    transactionReceiver: '',
    amount: 0
  }

  onTransactionReceiverChanged = (event) => {
    this.setState({ transactionReceiver: event.target.value })
  }

  onAmountChanged = (event) => {
    this.setState({ amount: event.target.value })
  }

  submitForm = async (event) => {
    event.preventDefault()
    const response = await fetch('http://localhost:3000/api/transaction', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        from: 'testAccount',
        to: this.state.transactionReceiver,
        amount: parseFloat(this.state.amount)
      })
    })

    const responseJson = await response.json()
    console.log(response, responseJson)
  }

  render () {
    return (
      <div>
        <h2>Create a new transaction</h2>

        <div>
          <form onSubmit={this.submitForm}>
            <div>
              <input type='text' placeholder='Transaction receiver' value={this.state.transactionReceiver} onChange={this.onTransactionReceiverChanged} />
            </div>
            <div>
              <input type='text' placeholder='Amount' value={this.state.amount} onChange={this.onAmountChanged} />
            </div>
            <div>
              <input type='submit' value='Submit' />
            </div>
          </form>
        </div>
      </div>
    )
  }
}
