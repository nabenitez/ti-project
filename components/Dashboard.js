import React from 'react'

import Stocks from './Stocks'
import Storages from './Storages'
import { Grid } from '@mui/material'

const Dashboard = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Storages />
      </Grid>
      <Grid item xs={12}>
        <Stocks />
      </Grid>
    </Grid>
  )
}

export default Dashboard
