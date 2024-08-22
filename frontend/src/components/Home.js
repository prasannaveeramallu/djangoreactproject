
import React from 'react'
import AxiosInstance from './Axios'
import {useEffect, useMemo, useState}  from 'react'
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import Dayjs from 'dayjs'
import { Box } from '@mui/material';
import IconButton from '@mui/material/Icon';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Email as EmailIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';


const Home = () => {
  const [loading, setLoading] = useState(true)
  const [myData, setMydata] = useState()

  const GetData = () => {
    AxiosInstance.get(`project/`).then((res) => {
      setMydata(res.data)
      console.log(res.data)
      setLoading(false)
  })
  }

useEffect (() => {
  GetData();
}, [])

const columns = useMemo(
  () => [
    {
      accessorKey: 'name', //access nested data with dot notation
      header: 'Name',
      size: 150,
    },
    {
      accessorKey: 'status',
      header: 'Status',
      size: 150,
    },
    {
      accessorKey: 'comments', //normal accessorKey
      header: 'Comments',
      size: 200,
    },
    {
      accessorFn: (row) => Dayjs(row.start_date).format('DD-MM-YYYY'),
      header: 'Start date',
      size: 150,
    },
    {
      accessorFn: (row) => Dayjs(row.end_Date).format('DD-MM-YYYY'),
      header: 'End date',
      size: 150,
    },
  ],
  [],
);

  

  


return (
    <div>
      { loading ? <p>Loading data...</p> :
        <MaterialReactTable columns={columns} data={myData}
        enableRowActions
        renderRowActions={({row}) => (
          <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
           
            <IconButton color="secondary" component={Link} to={`edit/${row.original.id}`}>
              <EditIcon />
            </IconButton>
            <IconButton color="error" component={Link} to={`delete/${row.original.id}`}>
              <DeleteIcon />
            </IconButton>
          </Box>
        )}
        
        />
      }
       
    </div>
  )
};

export default Home