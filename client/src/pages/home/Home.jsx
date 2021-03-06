import "./home.scss"
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import React from "react";
import axios from "axios";

const Home = ({type}) => {
  const [lists, setLists] = React.useState([]);
  const [genre, setGenre] = React.useState(null);

  React.useEffect(() => {
    const getRandomLists = async () => {
      try{
        const res = await axios.get(`/lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,{
          headers: {
            token: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
          }
        });
        setLists(res.data);
      } catch(err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className='home'>
        <Navbar />
        <Featured type= {type}/>
        {lists.map((list) => (
          <List list={list} />
        ))}
    </div>
  )
}

export default Home;