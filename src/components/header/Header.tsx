import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Badge,
} from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { CartContext } from "../cart/CartContext";

const Header: React.FC = () => {
  const { getTotalAmount } = useContext(CartContext);
  // const { signedInUser } = useContext(AuthContext);
  const numberOfProducts = getTotalAmount();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const initialState = [] as string[];
  const { data: categories } = useFetch<string[]>(
    `https://dummyjson.com/products/categories`,
    initialState
  );

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

          <div>
            <Button
              id="categories-button"
              aria-controls={open ? "categories-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : "true"}
              onClick={handleClick}
            >
              Categories
            </Button>
            <Menu
              id="categories-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {categories.map((categ, index) => {
                return (
                  <MenuItem key={index} divider={true} onClick={handleClose}>
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={`categories/${categ}`}
                    >
                      {categ.toUpperCase()}
                    </Link>
                  </MenuItem>
                );
              })}
            </Menu>
          </div>
        </Box>
        <Box>
          {/* {signedInUser && (
            <Typography
              sx={{ display: "inline-block", marginRight: "16px" }}
              variant="body1"
            >
              {signedInUser.uid}
            </Typography>
          )} */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            component={Link}
            to="#"
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