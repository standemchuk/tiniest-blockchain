import React from 'react'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const top = 50 + Math.round(Math.random() * 20) - 10
const left = 50 + Math.round(Math.random() * 20) - 10

const styles = theme => ({
  modal: {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  },
  buttonWrapper: {
    marginTop: 10,
    display: 'flex',
    justifyContent: 'space-between'
  }
})

const ErrorModal = (props) => (
  <Modal open={props.open} onClose={props.handleModalClose} >
    <div className={props.classes.modal}>
      <Typography
        variant='title'
        id='modal-title'
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        Something went wrong
      </Typography>
      <Typography variant='subheading' id='simple-modal-description'>
        There was a problem with retrieving the data you've requested
      </Typography>
      <div className={props.classes.buttonWrapper}>
        <Button variant={'outlined'} color={'secondary'} onClick={props.handleRetry}>Retry</Button>
        <Button variant={'outlined'} color={'primary'} onClick={props.handleModalClose}>Ignore</Button>
      </div>
    </div>
  </Modal>
)

export default withStyles(styles)(ErrorModal)
