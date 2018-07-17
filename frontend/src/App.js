import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

import TrackAccountBalance from './pages/TrackAccountBalance'
import CreateTransactionPage from './pages/CreateTransactionPage'
import ShowTransactionHistory from './pages/ShowTransactionHistory'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to tiniest blockchain app</h1>
        </header>
        <Route exact path='/' component={TrackAccountBalance} />
        <Route path='/create-transaction' component={CreateTransactionPage} />
        <Route path='/transaction-history' component={ShowTransactionHistory} />
      </div>
    )
  }
}

export default App
