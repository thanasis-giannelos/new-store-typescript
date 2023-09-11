import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography
} from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { CartContext } from "../../cart/CartContext";
import './Menu.css';

const Header: React.FC = () => {
  const { getTotalAmount } = useContext(CartContext);
  const { signedInUser } = useContext(AuthContext);
  const numberOfProducts = getTotalAmount();

  const [showMenu, setShowMenu] = React.useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu)
  };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  const categories = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting",
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "white",
        color: "black",
        boxShadow: "none",
        top: 0,
        zIndex: 100,
      }}
    >
      <Toolbar
        sx={{ width: "80%", justifyContent: "space-between", margin: "0 auto" }}
      >
        <Box width="20rem" display="flex" justifyContent="space-between">
          <Typography
            variant="h4"
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              color: "inherit",
              fontWeight: "bold",
            }}
          >
            ReactStore
          </Typography>
          <div className='menu-container'>
            <Button  className='menu-btn' onClick={handleMenu}>Categories</Button>
            {/* <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {categories.map((cat) => (
                <MenuItem onClick={handleClose}>{cat}</MenuItem>
              ))}
            </Menu>
 */}
            <ul className={`menu-list ${!showMenu && 'not-active'}`}>
              {categories.map((cat) => {
                return (
                  <li className='menu-item'>
                    <Link to="#" style={{ textDecoration: "none" }}>
                      {cat}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </Box>
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
