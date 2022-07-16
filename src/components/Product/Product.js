import './product.css'
import React from 'react'
import Button from '@mui/material/Button';

const Product = ({shopPage}) => {
  return (
    <div className="productContainer">
    <img className="productPicture" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="dummy-product-image" />
    <div className="productDetails">
      <h5 className="productName">{shopPage.product}</h5>
      <p className="productPrice">{shopPage.price}</p>
    </div>
    <div className='addToCart'>
       <Button variant="outlined" className="button" sx={{color:"black", borderColor:"black"}}>{shopPage.options}</Button>
    </div>
   </div>
  )
}

export default Product
