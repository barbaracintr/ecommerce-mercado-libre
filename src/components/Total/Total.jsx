import { useContext } from "react";
import AppContext from "../../context/AppContext";
import "./Total.css";

const Total = () => {
  const { cartItem } = useContext(AppContext);

  const totalPrice = cartItem.reduce((acc, item) => {
    return acc + item["price"];
  }, 0);

  return (
    <div className="total_container">
      <span>Total: R$ {totalPrice.toFixed(2)}</span>
    </div>
  );
};

export default Total;
