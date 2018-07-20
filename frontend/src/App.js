import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import TrackAccountBalance from './pages/TrackAccountBalance'
import CreateTransactionPage from './pages/CreateTransactionPage'
import ShowTransactionHistory from './pages/ShowTransactionHistory'

import Header from './components/Header'

import guid from './helpers/guid'

const theme = createMuiTheme()

class App extends Component {
  componentDidMount () {
    const userId = localStorage.getItem('userId')
    if (!userId) {
      localStorage.setItem('userId', guid())
    }
  }
  render () {
    return (
      <MuiThemeProvider theme={theme}>
        <Header />
        <Grid container spacing={16}>
          <Route exact path='/' component={TrackAccountBalance} />
          <Route path='/create-transaction' component={CreateTransactionPage} />
          <Route path='/transaction-history' component={ShowTransactionHistory} />
          {/* TODO: ADD 404 */}
        </Grid>
      </MuiThemeProvider>
    )
  }
}

export default App
