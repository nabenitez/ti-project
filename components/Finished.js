import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { getStats } from '../lib/api'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import RefreshIcon from '@mui/icons-material/Refresh'
import IconButton from '@mui/material/IconButton'

const columns = [
  { field: 'id', headerName: '_id', width: 300 },
  { field: 'total', headerName: 'client', width: 300 },
]

const Finished = () => {
  const [fetching, setFetching] = React.useState(true)
  const [data, setData] = React.useState(null)
  const [click, setClick] = React.useState(false)
  React.useEffect(() => {
    if (click || fetching) {
      getStats().then((res) => {
        setData(
          res.finished.map((elem) => ({
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
    <Box sx={{ height: 400, mt: 4 }}>
      <Box sx={{ display: 'flex' }}>
        <Typography
          sx={{ flexGrow: 1 }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Finished orders
        </Typography>
        <IconButton aria-label="delete" onClick={handleClick}>
          <RefreshIcon />
        </IconButton>
      </Box>

      {!fetching ? (
        <DataGrid
          rows={data}
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
  )
}

export default Finished
