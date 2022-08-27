import logo from "./logo.svg";
import "./App.css";
import Product from "./components/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import ProductSlider from "./components/ProductSlider/ProductSlider";
import Footer from "./components/Footer/Footer";
import { createContext, useState } from "react";
import { useContext } from "react";

function App() {
  const [shopPage, setShopPage] = useState([
    {
      id: 1,
      product: "Fancy Product",
      price: "$40.00 - $80.00",
      options: "View options",
      rating: 0,
      cart: 0,
    },
    {
      id: 2,
      product: "Special Item",
      price: "$18.00",
      options: "Add to cart",
      rating: 5,
      cart: 0,
    },
    {
      id: 3,
      product: "Sale Item",
      price: "$25.00",
      options: "Add to cart",
      rating: 0,
      cart: 0,
    },
    {
      id: 4,
      product: "Popular Item",
      price: "$40.00",
      options: "Add to cart",
      rating: 5,
      cart: 0,
    },
    {
      id: 5,
      product: "Sale Item",
      price: "$20.00",
      options: "Add to cart",
      rating: 0,
      cart: 0,
    },
    {
      id: 6,
      product: "Fancy Product",
      price: "$120.00 - $280.00",
      options: "View options",
      rating: 0,
      cart: 0,
    },
    {
      id: 7,
      product: "Special Item",
      price: "$18.00",
      options: "Add to cart",
      rating: 5,
      cart: 0,
    },
    {
      id: 8,
      product: "Popular Item",
      price: "$40.00",
      options: "Add to cart",
      rating: 5,
      cart: 0,
    },
  ]);
  const [cart, setCart] = useState(0);
  return (
    <div className="app">
      <Navbar cart={cart} setCart={setCart} />
      <ProductSlider />
      <div className="container">
        {shopPage.map((shopPage, id) => (
          <Product
            shopPage={shopPage}
            setShopPage={setShopPage}
            cart={cart}
            setCart={setCart}
            key={id}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
