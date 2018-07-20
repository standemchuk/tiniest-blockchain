import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import TrackAccountBalancePage from './pages/TrackAccountBalancePage'
import CreateTransactionPage from './pages/CreateTransactionPage'
import ShowTransactionHistoryPage from './pages/ShowTransactionHistoryPage'
import NoMatchPage from './pages/NoMatchPage'

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
          <Switch>
            <Route exact path='/' component={TrackAccountBalancePage} />
            <Route path='/create-transaction' component={CreateTransactionPage} />
            <Route path='/transaction-history' component={ShowTransactionHistoryPage} />
            <Route component={NoMatchPage} />
          </Switch>
        </Grid>
      </MuiThemeProvider>
    )
  }
}

export default App
