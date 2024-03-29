import { useContext, useEffect, useState } from "react";
import { createList } from "../../context/listContext/apiCalls";
import { ListContext } from "../../context/listContext/ListContext";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { getMovies } from "../../context/movieContext/apiCalls"
import "./newList.scss"
import { useHistory } from "react-router-dom";

const NewList = () => {
  const[list, setList] = useState(null);
  const history = useHistory();

  const {dispatch} = useContext(ListContext);
  const { movies, dispatch: dispatchMovie} = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);

  const handleChange = (e) => {
    const value = e.target.value;
    setList({...list, [e.target.name]: value});
  }

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({...list, [e.target.name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createList(list, dispatch)
    history.push("/lists");
  }

  return (
    <div className="newProduct">
        <div className="addProductTitle">New List</div>
        <form className="addProductForm">
          <div className="formLeft">
            <div className="addProductItem">
              <label>Title</label>
              <input type="text" placeholder="John Wick" name="title" onChange={handleChange}/>
            </div>

            <div className="addProductItem">
              <label>Genre</label>
              <input type="text" placeholder="genre" name="genre" onChange={handleChange} />
            </div>
            
            <div className="addProductItem">
              <label>Type</label>
              <select name="type" id="type" onChange={handleChange}>
                <option>Type</option>
                <option value="movie">Movie</option>
                <option value="series">Series</option>
              </select>
            </div>
          </div>
          <div className="formRight">
            <div className="addProductItem">
              <label>Content</label>
              <select multiple name="content" id="type" onChange={handleSelect} style={{height:"280px"}}>
                {movies.map(movie => (
                  <option value={movie._id} key={movie._id}>{movie.title}</option>
                ))}
              </select>
            </div>
          </div>
          <button className="addProductButton" onClick={handleSubmit}>Create</button> 
        </form>
    </div>
  )
}

export default NewList