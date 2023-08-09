import { useContext } from "react";
import AppContext from "../../context/AppContext";
import "./CartItem.css";
import { BsFillCartXFill } from "react-icons/bs";

const CartItem = () => {
  const { cartItem, setCartItem } = useContext(AppContext);

  const removeItem = (e) => {
    e.preventDefault();
    const itemDelete = Number(e.target.id);
    cartItem.splice(itemDelete, 1);
    setCartItem([...cartItem]);
  };

  return (
    <ul className="list-cart">
      {cartItem.map((product, index) => (
        <li key={product.id} id={index} className="item-list">
          <button onClick={removeItem} id={index}>
            <BsFillCartXFill />
          </button>
          <img src={product.thumbnail} alt="Imagem de produtos" className="" />
          <span className="item-list-title">{product.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default CartItem;
