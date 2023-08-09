import { useState } from "react";
import AppContext from "./AppContext";
import propTypes from "prop-types";

const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItem, setCartItem] = useState([]);

  const value = {
    products,
    setProducts,
    cartItem,
    setCartItem,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;
