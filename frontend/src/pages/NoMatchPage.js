import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const NoMatchPage = () => (
  <Grid container>
    <Grid item xs={12}>
      <Typography style={{ marginLeft: 15 }} variant={'display4'}>Not found</Typography>
    </Grid>
  </Grid>
)

export default NoMatchPage
