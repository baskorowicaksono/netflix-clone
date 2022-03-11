import React from 'react'
import "./newProduct.scss"

function NewProduct() {
  return (
    <div className="newProduct">
         <h1 className="newProductTitle">
            New Product
        </h1>
        <form action="" className="newProductForm">
            <div className="newProductItem">
                <label>Image</label>
                <input type="file" id="file" />
            </div>
            <div className="newProductItem">
                <label>Name</label>
                <input type="text" placeholder= "PlayStation 5" />
            </div>
            <div className="newProductItem">
                <label>Stock</label>
                <input type="text" placeholder= "123" />
            </div>           
            <div className="newProductItem">
                <label for="active">Active</label>
                <select name="active" id="active" className="newProductSelect">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <button className="newProductButton">Create</button>
        </form>
    </div>
  )
}

export default NewProduct