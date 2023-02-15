import Chart from "../../components/chart/Chart"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import "./home.scss"
import WidgetSm from "../../components/widgetSm/WidgetSm"
import WidgetLg from "../../components/widgetLg/WidgetLg"
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

const Home = () => {
  const MONTHS = useMemo(() => 
  [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ], []);

  const [ userStats, setUserStats ] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const response = await axios.get("/users/stats", {
          headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
          }
        })

        const statsList = response.data.sort((a, b) => a._id - b._id);
        statsList.map((item) => 
        setUserStats(prev => 
          [...prev, 
            {name: MONTHS[item._id - 1], "New User": item.total}
          ])
        );
      } catch (error) {
        console.log(error);
      } 
    }

    getStats()
  }, [MONTHS]);

  return (
    <div className="home">
        <FeaturedInfo />
        <Chart title="User Analytics" data={userStats} dataKey="New User" grid />
        <div className="homeWidgets">
          <WidgetSm />
          <WidgetLg />
        </div>
    </div>
  )
}

export default Home