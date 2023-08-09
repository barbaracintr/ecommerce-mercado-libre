import { BsSearch } from "react-icons/bs";
import "./SearchBar.css";
import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import fetchProducts from "../../api/fetchProducts";

const SearchBar = () => {
  const { setProducts } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    const products = await fetchProducts(searchValue);

    setProducts(products);
    setSearchValue("");
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="search"
        placeholder="Buscar produtos"
        className="search_input"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        required
      />
      <button type="submit" className="search_button">
        <BsSearch />
      </button>
    </form>
  );
};

export default SearchBar;
