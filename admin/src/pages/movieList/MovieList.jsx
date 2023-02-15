import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteMovie, getMovies } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import "./movieList.scss"

const ProductList = () => {
    const {movies, dispatch} = useContext(MovieContext);

    useEffect(() => {
        getMovies(dispatch);
    }, [dispatch])

    const handleDelete = (id) => {
        deleteMovie(id, dispatch);
    }

    const columns = [
        { field: '_id', headerName: 'ID', width: 90 },
        { field: 'movie', headerName: 'Movie', width: 200, renderCell: (params) => {
            return(
                <div className="productListProduct">
                    <img src={params.row.img} alt="" className="productListImg"/>
                    {params.row.title}
                </div>
            )
        } },
        { field: 'genre', headerName: 'Genre', width: 120 },
        { field: 'year', headerName: 'Year', width: 120 },
        { field: 'limit', headerName: 'Limit', width: 120 },
        { field: 'isSeries', headerName: 'isSeries', width: 120 },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return(
                    <>
                        <Link to={{pathname:"/product/" + params.row._id, movie: params.row}}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        
                        <DeleteOutline className="productListDelete" onClick= {() => handleDelete(params.row._id)} />
                    </>
                )
            }
        }

      ];
      
  return (
    <div className='productList'>
        <div style={{ height: "100%", width: '100%' }}>
            <DataGrid
                rows={movies}
                columns={columns}
                pageSize={8}
                checkboxSelection
                disableSelectionOnClick
                getRowId={(row) => row._id}
            />
        </div>
    </div>
  )
}

export default ProductList