import { useContext, useEffect, useState } from "react";
import "./Products.css";
import fetchProducts from "../../api/fetchProducts";
import Product from "../Product/Product";
import LinearProgress from "@mui/material/LinearProgress";
import AppContext from "../../context/AppContext";

const Products = () => {
  const { products, setProducts } = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts("iphone")
      .then((res) => {
        setProducts(res);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {loading ? (
        <LinearProgress />
      ) : (
        <ul className="products container">
          {products.map((product) => (
            <Product productData={product} key={product.id} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Products;
