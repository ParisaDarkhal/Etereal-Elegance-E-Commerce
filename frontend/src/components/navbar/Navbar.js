import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth } from "../../hooks/Auth";
import { useState } from "react";

export default function Navbar() {
  const { user, isAuthenticated, login, logout } = useAuth();
  const [username, setUsername] = useState(""); // State for username
  const [password, setPassword] = useState(""); // State for password

  const handleLogin = () => {
    login(username, password);
  };

  const handleLogout = () => {
    logout();
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
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
                <p>Welcome, {user.first_name}!</p>
                <Button href="/" color="inherit" onClick={handleLogout}>
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
