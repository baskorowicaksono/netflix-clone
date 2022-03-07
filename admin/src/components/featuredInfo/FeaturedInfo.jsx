import React from 'react'
import "./featuredInfo.scss"
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import { ArrowUpwardOutlined } from '@mui/icons-material';


function FeaturedInfo() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">
                    $3,487
                </span>
                <span className="featuredMoneyRate">
                    -4.7 <ArrowDownwardOutlinedIcon className='featuredIcon negative' />
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">
                    $5,283
                </span>
                <span className="featuredMoneyRate">
                    -2.3 <ArrowDownwardOutlinedIcon className='featuredIcon negative' />
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">
                    $4,531
                </span>
                <span className="featuredMoneyRate">
                    +2.5 <ArrowUpwardOutlined className='featuredIcon positive'/>
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
    </div>
  )
}

export default FeaturedInfo