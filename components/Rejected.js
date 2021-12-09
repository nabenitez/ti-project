import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { getStats } from '../lib/api'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import RefreshIcon from '@mui/icons-material/Refresh'
import IconButton from '@mui/material/IconButton'

const columns = [
  { field: 'id', headerName: '_id', width: 300 },
  { field: 'total', headerName: 'client', width: 300 },
]

const Rejected = () => {
  const [fetching, setFetching] = React.useState(true)
  const [dataB2b, setDataB2b] = React.useState(null)
  const [dataSftp, setDataSftp] = React.useState(null)
  const [click, setClick] = React.useState(false)
  React.useEffect(() => {
    if (click || fetching) {
      getStats().then((res) => {
        console.log(res)
        setDataB2b(
          res.rejectedB2b.map((elem) => ({
            id: elem.orderId,
            total: elem.cliente,
          }))
        )
        setDataSftp(
          res.rejectedSftp.map((elem) => ({
            id: elem.orderId,
            total: elem.cliente,
          }))
        )
        setFetching(false)
        setClick(false)
      })
    }
  }, [click])

  const handleClick = () => {
    setClick(true)
    setFetching(true)
  }

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Box sx={{ height: 400, mt: 4 }}>
          <Box sx={{ display: 'flex' }}>
            <Typography
              sx={{ flexGrow: 1 }}
              variant="h6"
              id="tableTitle"
              component="div"
            >
              Rejected B2b
            </Typography>
            <IconButton aria-label="delete" onClick={handleClick}>
              <RefreshIcon />
            </IconButton>
          </Box>

          {!fetching ? (
            <DataGrid
              rows={dataB2b}
              columns={columns}
              pageSize={6}
              rowsPerPageOptions={[6]}
            />
          ) : (
            <Box sx={{ display: 'flex', height: 400, width: '100%' }}>
              <CircularProgress sx={{ m: 'auto' }} />
            </Box>
          )}
        </Box>
      </Grid>
      <Grid item xs={12} md={6} spacing={2}>
        <Box sx={{ height: 400, mt: 4 }}>
          <Box sx={{ display: 'flex' }}>
            <Typography
              sx={{ flexGrow: 1 }}
              variant="h6"
              id="tableTitle"
              component="div"
            >
              Rejected Sftp
            </Typography>
            <IconButton aria-label="delete" onClick={handleClick}>
              <RefreshIcon />
            </IconButton>
          </Box>

          {!fetching ? (
            <DataGrid
              rows={dataSftp}
              columns={columns}
              pageSize={6}
              rowsPerPageOptions={[6]}
            />
          ) : (
            <Box sx={{ display: 'flex', height: 400, width: '100%' }}>
              <CircularProgress sx={{ m: 'auto' }} />
            </Box>
          )}
        </Box>
      </Grid>
    </Grid>
  )
}

export default Rejected
