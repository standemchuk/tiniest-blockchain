import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  header: {
    marginTop: 20,
    padding: theme.spacing.unit * 2
  }
})

export const PageHeader = (props) => (
  <Grid item xs={12}>
    <Typography
      className={props.classes.header}
      variant='display1'
      paragraph
      align={'center'}
    >
      {props.title}
    </Typography>
  </Grid>
)

export default withStyles(styles)(PageHeader)
