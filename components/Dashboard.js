import React from 'react'
import Stocks from './Stocks'
import Finished from './Finished'
import Accepted from './Accepted'
import Storages from './Storages'
import Rejected from './Rejected'
import { Typography } from '@mui/material'
import { Grid } from '@mui/material'

const Dashboard = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={5}>
        <Stocks />
      </Grid>
      <Grid item xs={12} md={7}>
        <Storages />
      </Grid>
      <Grid item xs={12} sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom component="div">
          Orders
        </Typography>
      </Grid>
      <Grid item xs={12} md={12}>
        <Accepted />
      </Grid>
      <Grid item xs={12} md={12}>
        <Finished />
      </Grid>
      <Grid item xs={12} md={12}>
        <Rejected />
      </Grid>
    </Grid>
  )
}

export default Dashboard
