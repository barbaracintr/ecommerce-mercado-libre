import { Drawer } from "@mui/material";
import propTypes from "prop-types";
import CartItem from "../CartItem/CartItem";
import Total from "../Total/Total";

const Sidebar = (boolOpen) => {
  const { open, setOpen } = boolOpen;

  return (
    <Drawer open={open} anchor={"right"} onClose={() => setOpen(false)}>
      <CartItem />
      <Total />
    </Drawer>
  );
};

export default Sidebar;

Sidebar.propTypes = {
  boolOpen: propTypes.shape({}),
}.isRequired;
