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
import Link from '@mui/material/Link';

import { useState } from "react";

function NavBar() {
  const MenuCategoryList = [
    {
      mainCategoryid: "1",
      mainCategoryName: "Home",
      Mainroute: "/home",
      subCategory: [
        {
          setCategoryId: "1.1",
          subCategoryName: "Kitchen",
          subCategoryRoute: "/home/kitchen",
        },
        {
          subCatergoryId: "",
          subCategoryName: "Dining",
          subCategoryRoute: "/home/dining",
        },
        {
          subCatergoryId: 3,
          subCategoryName: "Bath",
          subCategoryRoute: "/home/bath",
        },
        {
          subCatergoryId: 4,
          subCategoryName: "Home Accessories",
          subCategoryRoute: "/home/homeaccessories",
        },
      ],
    },
    {
      mainCategoryid: 2,
      mainCategoryName: "Fashion",
      Mainroute: "/fashion",
      subCategory: [
        {
          setCategoryId: 1,
          subCategoryName: "Mens Fashion",
          subCategoryRoute: "/fashion/mensfashion",
        },
        {
          subCatergoryId: 2,
          subCategoryName: "Womens Fashion",
          subCategoryRoute: "/fashion/womensfashion",
        },
        {
          subCatergoryId: 3,
          subCategoryName: "Kids",
          subCategoryRoute: "/fashion/kidsfashion",
        },
      ],
    },
    {
      mainCategoryid: 3,
      mainCategoryName: "Grocery",
      Mainroute: "/grocery",
      subCategory: [
        {
          setCategoryId: 1,
          subCategoryName: "grocery1",
          subCategoryRoute: "/grocery",
        },
        {
          subCatergoryId: 2,
          subCategoryName: "grocery2",
          subCategoryRoute:  "/grocery",
        },
        {
          subCatergoryId: 3,
          subCategoryName: "grocery3",
          subCategoryRoute: "/grocery",
        },
      ],
    },
    {
      mainCategoryid: 4,
      mainCategoryName: "Electronics",
      mainroute: "/electronics",
      subCategory: [
        {
          setCategoryId: 1,
          subCategoryName: "Mobiles",
          subCategoryRoute:"/electronics/mobiles",
        },
        {
          subCatergoryId: 2,
          subCategoryName: "TV",
          subCategoryRoute: "/electronics/tv",
        },
        {
          subCatergoryId: 3,
          subCategoryName: "Laptops",
          subCategoryRoute: "/electronics/laptops",
        },
        {
          subCatergoryId: 4,
          subCategoryName: "Accesories",
          subCategoryRoute: "/electronics/accessories",
        },
      ],
    },
    {
      mainCategoryid: 5,
      mainCategoryName: "Others",
      Mainroute: "/others",
      subCategory: [
        {
          setCategoryId: 1,
          subCategoryName: "Luggage",
          subCategoryRoute: "/others/lugagge"
        },
        {
          subCatergoryId: 2,
          subCategoryName: "Sports&Fitness",
          subCategoryRoute: "/others/sports&fitness",
        },
        {
          subCatergoryId: 3,
          subCategoryName: "Books",
          subCategoryRoute:  "/others/books",
        },
      ],
    },
  ];

  const initialCategoryState = {
    Home: false,
    Fashion: false,
    Kitchen: false,
    Electronics: false,
  };
  const [openMenu, setOpenMenu] = useState(initialCategoryState);
  // console.log(openMenu);

  const [categoryButton, setCategoryButton] = useState(null);
  const handleCategoryButton = (event) => {
    console.log("mouse enter");
    setCategoryButton("true");
    // setAnchorEl(event.currentTarget);
  };

  const handleExpandMenu = (mainCategoryName) => {
    console.log("inside handleExpand", mainCategoryName);
    // setOpenMenu((prev) => ({ ...prev, category: !prev.Home }));
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
              {MenuCategoryList.map((cat) => (
                <>
                  <ListItemButton
                    onClick={() => {
                      console.log(cat.mainCategoryName);
                      setOpenMenu((prev) => ({
                        ...prev,
                        [cat.mainCategoryName]: !prev?.[cat.mainCategoryName],
                      }));
                    }}
                  >
                    <Link href={cat.mainroute}> <ListItemText  primary= {cat.mainCategoryName}/></Link>
                  
                    {openMenu?.Home ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </ListItemButton>
                  <Collapse
                    in={openMenu?.[cat.mainCategoryName]}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {(cat?.subCategory).map((subcat) => (
                        <ListItemButton sx={{ pl: 4 }}>
                          <Link href={subcat.subCategoryRoute}>  <ListItemText primary={subcat?.subCategoryName} /></Link>
                        
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                </>
              ))}

             
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
