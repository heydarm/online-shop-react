import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Badge,
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  ShoppingCart as ShoppingCartIcon,
} from "@material-ui/icons";

import { useStyles } from "../styles/HeaderStyles";
import Sidebar from "./Sidebar";
import { LinkBehavior } from "./additional/LinkBehavior";
import { useTheme } from "@material-ui/styles";

function Header(props) {
  const [searchVal, setSearchVal] = useState("");
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();

  function handleSubmit(event) {
    event.preventDefault();
    if (searchVal.trim()) {
      history.replace(`/search?query=${event.target.elements[0].value}`);
    }
  }

  return (
    <AppBar position="sticky">
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => setIsSideMenuOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          className={classes.title}
          variant="h6"
          color="inherit"
          component={LinkBehavior}
          linkTo="/"
        >
          
          Online market
        </Typography>
        <form action="/search" onSubmit={handleSubmit} className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            name="query"
            value={searchVal}
            onChange={(event) => setSearchVal(event.target.value)}
            autoComplete="off"
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            classes={{
              input: classes.searchInput,
            }}
          />
        </form>
        <IconButton
          aria-label={`show ${props.productsInCart.length} items in cart`}
          color="inherit"
          className={classes.cartIcon}
          component={LinkBehavior}
          linkTo="/cart"
        >
          <Badge badgeContent={props.productsInCart.length} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
      <Sidebar
        setIsSideMenuOpen={setIsSideMenuOpen}
        isSideMenuOpen={isSideMenuOpen}
      />
    </AppBar>
  );
}

const mapStateToProps = (state) => ({ productsInCart: state.cart });

export default connect(mapStateToProps)(Header);
