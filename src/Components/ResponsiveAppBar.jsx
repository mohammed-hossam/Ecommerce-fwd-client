import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SearchBar from "./SearchBar";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Divider from "@mui/material/Divider";
import ios from "../assets/apple-logo.svg";
import android from "../assets/android-logo.svg";
import CartCar from "./CartCar";
import { Stack } from "@mui/material";

const pages = ["Products"];
const settings = ["Profile", "Logout"];

const ResponsiveAppBar = (props) => {
  const count = props.items.length;

  return (
    <AppBar position="fixed">
      <Stack divider={<Divider />} spacing={2}>
        <UpperAppBar />
        <BottomAppBar count={count} />
      </Stack>
    </AppBar>
  );
};
export default ResponsiveAppBar;

function UpperAppBar() {
  const [isAuth, setIsAuth] = useState(true);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (setting) => {
    setAnchorElUser(null);
    switch (setting) {
      case "Profile":
        break;
      case "Logout":
        setIsAuth(false);
        break;
      default:
        break;
    }
  };

  return (
    <Stack
      direction="row"
      sx={{ justifyContent: "space-between", pt: 2, px: 1 }}
    >
      <span style={{ alignSelf: "center" }}>Welcome to E-Shop</span>
      <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
        <LocalPhoneIcon />
        <span>Hotline 16789</span>
        <span>Download app now</span>
        <img src={ios} width={20} alt="ios" />
        <img src={android} width={20} alt="android" />
      </Stack>

      {isAuth ? (
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="User Name" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem
                key={setting}
                onClick={() => handleCloseUserMenu(setting)}
              >
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      ) : (
        <MenuItem onClick={() => setIsAuth(true)}>Log In</MenuItem>
      )}
    </Stack>
  );
}

function BottomAppBar(props) {
  const count = props.count;
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Stack
      direction="row"
      sx={{ alignItems: "center", justifyContent: "space-between", px: 1 }}
    >
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          color: "inherit",
          textDecoration: "none",
        }}
      >
        E-Shop
      </Typography>

      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>

      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            {page}
          </Button>
        ))}
      </Box>

      <SearchBar />

      <Box>
        
          <CartCar/>
        
      </Box>
    </Stack>
  );
}

/*
<Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
*/
