import "./product.css";
import React, { createContext, useContext } from "react";
import Button from "@mui/material/Button";
import StarIcon from "@mui/icons-material/Star";
import Star from "@mui/icons-material/Star";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Delete from "@mui/icons-material/Delete";

const cartContext = createContext();

var newId = 0;

const Product = ({ shopPage, setShopPage, cart, setCart, id }) => {
  const starList = [];

  for (let i = 1; i <= shopPage.rating; i++) {
    starList.push(<Star sx={{ color: "gold" }} />);
  }
  const handleClick = () => {
    setCart(cart + 1);
  };

  const deleteProduct = () => {
    if (cart > 0) {
      setCart(cart - 1);
    }
  };

  const color = "lightgray";

  return (
    <div className="productContainer">
      <img
        className="productPicture"
        src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
        alt="dummy-product-image"
      />
      <div className="productDetails">
        <h5 className="productName">{shopPage.product}</h5>
        {starList}
        {/* {shopPage.rating.map((ele) => <Star sx={{color: "gold"}}/>)} */}
        <p className="productPrice">{shopPage.price}</p>
      </div>
      <div className="addToCart">
        {cart === 0 ? (
          <Button
            variant="outlined"
            className="button"
            sx={{ color: "black", borderColor: "black" }}
            onClick={handleClick}
          >
            {shopPage.options}
          </Button>
        ) : (
          <Button
            variant="outlined"
            className="button"
            sx={{ color: { color }, borderColor: { color } }}
          >
            {shopPage.options}
          </Button>
        )}
      </div>
      <DeleteIcon onClick={deleteProduct} color="error" />
    </div>
  );
};

export default Product;
