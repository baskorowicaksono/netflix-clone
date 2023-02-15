import { useEffect, useState } from "react"
import axios from "axios";
import Featured from "../../components/featured/Featured"
import List from "../../components/list/List"
import Navbar from "../../components/navbar/Navbar"
import "./home.scss"

const Home = ({type}) => {

  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async() => {
      try {
        const res = await axios.get(`lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
          headers: {
            token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGY2M2FlMjBkODdmNDRmMGNhNTZkYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTU4NjEzMywiZXhwIjoxNjc1NTg5NzMzfQ.Dw-1PeHLzHLQiCr0BlJonZ7WbGXbKWEKZQGPtZX_AIQ`
          }
        });
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className='home'>
        <Navbar />
        <Featured type={type} setGenre={setGenre}/>
        {lists.map((list) => (
          <List list={list} key={list._id}/>
        ))}
    </div>
  )
}

export default Home