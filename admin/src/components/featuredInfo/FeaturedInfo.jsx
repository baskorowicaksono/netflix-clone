import { ArrowDownward, ArrowUpward } from "@material-ui/icons"
import "./featuredInfo.scss"

const FeaturedInfo = () => {
  return (
    <div className="featuredInfo">
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,765</span>
                <span className="featuredMoneyRate">-14.2 <ArrowDownward className="featuredIcon negative" /></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$5,485</span>
                <span className="featuredMoneyRate">+4.7 <ArrowUpward className="featuredIcon " /></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
    </div>
  )
}

export default FeaturedInfo