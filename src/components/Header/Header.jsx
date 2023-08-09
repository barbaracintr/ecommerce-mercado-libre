import Cart from "../Cart/Cart";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <SearchBar />
        <Cart />
      </div>
    </header>
  );
};

export default Header;
