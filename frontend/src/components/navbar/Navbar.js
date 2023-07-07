import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useAuth } from "../../hooks/Auth";
import { useState, useContext } from "react";
import CartContext from "../dashboard/CartContext";
import { useNavigate } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -1,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function Navbar() {
  const { user, isAuthenticated, login, logout } = useAuth();
  const [username, setUsername] = useState(""); // State for username
  const [password, setPassword] = useState(""); // State for password
  const cartItems = useContext(CartContext);

  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
  }

  const handleLogin = () => {
    login(username, password);
  };

  const handleLogout = () => {
    logout();
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ethernal Elegance
          </Typography>
          <Box>
            {isAuthenticated ? (
              <div>
                <IconButton aria-label="cart">
                  <StyledBadge
                    badgeContent={cartItems ? cartItems.length : 0}
                    color="secondary"
                    sx={{ mr: 2 }}
                  >
                    <ShoppingCartIcon style={{ color: "white" }} />
                  </StyledBadge>
                </IconButton>
                <span>Welcome, {user.first_name}!</span>
                <Button
                  sx={{ ml: 5 }}
                  href="/"
                  color="inherit"
                  onClick={handleLogout}
                >
                  Log out
                </Button>
              </div>
            ) : (
              <div>
                <Button href="/login" color="inherit" onClick={handleLogin}>
                  Log in
                </Button>
              </div>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
