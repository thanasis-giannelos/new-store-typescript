import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../cart/context/CartContext";
import classes from "./Header.module.css";

const Header: React.FC = () => {
  const { getTotalAmount } = useContext(CartContext);

  return (
    <header className={classes.header}>
      <nav>
        <h1>
          <Link to="/">ReactStore</Link>
        </h1>
        <ul>
          <li>
            <NavLink to="/cart">
              Cart {getTotalAmount() > 0 && getTotalAmount()}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
