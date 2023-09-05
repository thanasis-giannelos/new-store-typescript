import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { CartContext } from "../cart/context/CartContext";

const Header: React.FC = () => {
  const { getTotalAmount } = useContext(CartContext);
  const { signedInUser } = useContext(AuthContext);
  const numberOfProducts = getTotalAmount();

  return (
    <AppBar position="sticky" sx={{ top: 0, zIndex: 100 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h5"
          component={Link}
          to="/"
          sx={{ textDecoration: "none", color: "inherit" }}
        >
          ReactStore
        </Typography>
        <Box>
          {signedInUser && (
            <Typography
              sx={{ display: "inline-block", marginRight: "16px" }}
              variant="body1"
            >
              {signedInUser.uid}
            </Typography>
          )}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            component={Link}
            to="/login"
            sx={{ mr: 2 }}
          >
            <PersonIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            component={Link}
            to="/cart"
            sx={{ mr: 2 }}
          >
            <Badge badgeContent={numberOfProducts} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
