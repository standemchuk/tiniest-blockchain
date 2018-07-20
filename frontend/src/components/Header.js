import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  name: {
    flexGrow: 1
  }
})

export const Header = (props) => (
  <AppBar color='default' position='static'>
    <Toolbar>
      <Typography
        style={{ textDecoration: 'none' }}
        component={Link}
        to={'/'}
        variant='title'
        color='inherit'
        className={props.classes.name}
      >
        Tiniest Blockchain
      </Typography>
      <Button component={Link} to='/' color='inherit'>Account balance</Button>
      <Button component={Link} to='/transaction-history' color='inherit'>
        Transaction history
      </Button>
      <Button component={Link} to={'/create-transaction'} color='secondary'>Create transaction</Button>
    </Toolbar>
  </AppBar>
)

export default withStyles(styles)(Header)
