import React from 'react'
import "./userList.scss"
import {rows} from "../../dataDummies.js"
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link } from 'react-router-dom';

function UserList() {
    const [data, setData] = React.useState(rows);
    
    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
                return(
                    <div className="userAvatar">
                        <img className='userAvatarImg' src={params.row.avatar} alt="user-avatar" />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 90,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 90,
        },
        {
            field: 'action',
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/"+params.row.id}>
                            <button className="editButton">Edit</button>
                        </Link>
                        <DeleteOutlineOutlinedIcon className="deleteButton" onClick={() => handleDelete(params.row.id)} />
                    </>
                    
                )
            }
        }
      ];
      
  return (
    <div className="userList">
        <DataGrid
        rows={data}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}

export default UserList