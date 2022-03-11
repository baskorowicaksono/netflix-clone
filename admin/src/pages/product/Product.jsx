import { Publish } from '@mui/icons-material';
import React from 'react'
import { Link } from 'react-router-dom'
import Chart from "../../components/chart/Chart";
import { productData } from '../../dataDummies';
import "./product.scss"

function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">
          Product
        </h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart
            data= {productData}
            dataKey= "Sales"
            title="Sales Performance" 
           />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src="https://asset.kompas.com/crops/1C-M-9auIGQ6NICQLHdac3T88ME=/131x95:935x631/750x500/data/photo/2020/06/12/5ee2d91340862.jpg" alt="product-img" className="productInfoImg" />
            <span className="productInfoName">PlayStation 5</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">1623</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active:</span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form action="" className="productForm">
          <div className="productFormLeft">
            <label htmlFor="">Product Name</label>
            <input type="text" name="" placeholder='PlayStation 5' />

            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productFormUpload">
              <img src="https://asset.kompas.com/crops/1C-M-9auIGQ6NICQLHdac3T88ME=/131x95:935x631/750x500/data/photo/2020/06/12/5ee2d91340862.jpg" alt="product-uploadImg" className="productUploadImg" />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" name="" id="file" style={{display: "none"}} />
            </div>
            <button className="productUploadButton">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Product