import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Cart.css";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

const Cart = () => {
  const { cartItem } = useContext(AppContext);
  const qtdItemCart = cartItem.length;

  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className="cart_button">
        <AiOutlineShoppingCart />
        <span className="cart-status">{qtdItemCart}</span>
      </button>
      <Sidebar open={open} setOpen={setOpen} />
    </>
  );
};

export default Cart;
