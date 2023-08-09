import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./Product.css";
import propTypes from "prop-types";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

// const theme = createTheme({
//   components: {
//     MuiPaper: {
//       defaultProps: {
//         style: {
//           margin: '0.1rem'
//         }
//       }
//     },
//     MuiButtonBase: {
//       defaultProps: {
//         style: {
//           position: "absolute",
//           top: 0,
//           right: 0
//         },
//       },
//     },
//   },
// });

const Product = ({ productData }) => {
  const { id, title, thumbnail, price } = productData;

  const { cartItem, setCartItem } = useContext(AppContext);

  const handleClick = () => {
    setCartItem([...cartItem, productData]);
  };

  return (
    // <ThemeProvider theme={theme}>
    <Paper elevation={4}>
      <li className="card__infos" id={id}>
        <img src={thumbnail} alt="Foto do Produto" className="card__img" />
        <span className="card__price">
          {price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <span className="card__title">{title}</span>
        <IconButton
          className="btn__buy"
          color="primary"
          aria-label="add to shopping cart"
          onClick={handleClick}
        >
          <AddShoppingCartIcon />
        </IconButton>
      </li>
    </Paper>
    // </ThemeProvider>
  );
};

export default Product;

Product.propTypes = {
  productData: propTypes.shape({}),
}.isRequired;
