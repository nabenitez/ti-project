import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { getStocks } from '../lib/api'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import RefreshIcon from '@mui/icons-material/Refresh'
import IconButton from '@mui/material/IconButton'

const columns = [
  { field: 'id', headerName: '_id', width: 200 },
  { field: 'total', headerName: 'Total', width: 200 },
]

const Pending = () => {
  const [fetching, setFetching] = React.useState(true)
  const [data, setData] = React.useState(null)
  const [click, setClick] = React.useState(false)
  React.useEffect(() => {
    if (click || fetching) {
      getStocks().then((res) => {
        setData(res.map((elem) => ({ id: elem._id, ...elem })))
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
          Pending
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

export default Pending
