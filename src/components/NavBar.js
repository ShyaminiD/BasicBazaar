import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";

import { useState } from "react";

function NavBar() {
  const initialCategoryState = {
    Home: false,
    Fashion: false,
    Kitchen: false,
    Electronics: false,
  };
  const [openMenu, setOpenMenu] = useState(initialCategoryState);
  console.log(openMenu);

  const [categoryButton, setCategoryButton] = useState(null);
  const handleCategoryButton = (event) => {
    console.log("mouse enter");
    setCategoryButton("true");
    // setAnchorEl(event.currentTarget);
  };

  const handleExpandMenu = () => {
    setOpenMenu((prev) => ({ ...prev, Home: !prev.Home }));
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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

          <Button
            id="category-button"
            color="inherit"
            aria-haspopup="true"
            onClick={handleCategoryButton}
          >
            Categories
          </Button>
          <Drawer
            open={categoryButton}
            onClose={() => setCategoryButton(false)}
            PaperProps={{ sx: { width: 300 } }}
          >
            <List sx={{ width: "100%", maxWidth: 360 }}>
              <ListItemButton
                onClick={() => {
                  setOpenMenu((prev) => ({ ...prev, Home: !prev.Home }));
                }}
              >
                Home
                {openMenu?.Home ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItemButton>
              <Collapse in={openMenu?.Home} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Starred" />
                  </ListItemButton>
                </List>
              </Collapse>

              <ListItemButton
                onClick={() =>
                  setOpenMenu((prev) => ({ ...prev, Fashion: !prev.Fashion }))
                }
              >
                Fashion
              </ListItemButton>
              {openMenu?.Fashion ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              <Collapse in={openMenu?.Fashion} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Starred" />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton>Kitchen</ListItemButton>
              <ListItemButton>Electronics</ListItemButton>
            </List>
          </Drawer>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MY SHOP
          </Typography>

          <IconButton color="inherit">
            <ShoppingCartIcon />
          </IconButton>

          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
