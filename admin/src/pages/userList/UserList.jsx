import "./userList.scss"
import { DataGrid } from "@material-ui/data-grid"
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

const UserList = () => {

    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 160, renderCell: (params) => {
            return(
                <div className="userListUser">
                    <img src={params.row.avatar} alt="" className="userListImg"/>
                    {params.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 160 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        { 
            field: "transaction", 
            headerName: "Transaction Volume", 
            width: 200},
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return(
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        
                        <DeleteOutline className="userListDelete" onClick= {() => handleDelete(params.row.id)} />
                    </>
                )
            }
        }

      ];
      
  return (
    <div className='userList'>
        <div style={{ height: "100%", width: '100%' }}>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={8}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    </div>
  )
}

export default UserList