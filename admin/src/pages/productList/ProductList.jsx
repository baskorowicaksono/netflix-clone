import {productRows} from "../../dataDummies.js"
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link } from 'react-router-dom';

import React from 'react'
import "./productlist.scss"

function ProductList() {
    const [data, setData] = React.useState(productRows);
    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
                return(
                    <div className="productListName">
                        <img className='productListImg' src={params.row.img} alt="user-avatar" />
                        {params.row.name}
                    </div>
                )
            }
        },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 160,
        },
        {
            field: 'action',
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row.id}>
                            <button className="productEditButton">Edit</button>
                        </Link>
                        <DeleteOutlineOutlinedIcon className="productDeleteButton" onClick={() => handleDelete(params.row.id)} />
                    </>
                    
                )
            }
        }
      ];
      
  return (
    <div className="productList">
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

export default ProductList