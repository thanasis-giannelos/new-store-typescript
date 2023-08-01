import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../cart/context/CartContext";

const Header: React.FC = () => {
  const { getTotalAmount } = useContext(CartContext);
  const numberOfProducts = getTotalAmount();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between"}}>
          <Typography 
            variant="h5" 
            component={Link} 
            to="/" 
            sx={{ textDecoration: "none", color: "inherit" }}>
            ReactStore
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            component={Link}    
            to="/cart"        
            sx={{ mr: 2 }}
          >
            <ShoppingCartIcon />
            {numberOfProducts > 0 && <span style={{ fontSize: 13 }}>{numberOfProducts}</span>}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
