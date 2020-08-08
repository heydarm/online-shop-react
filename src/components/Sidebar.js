import React from "react";
import {
  List,
  ListItem,
  Drawer,
  Link,
  Typography,
  useMediaQuery,
  IconButton,
} from "@material-ui/core";
import {
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
} from "@material-ui/icons";
import { useTheme } from "@material-ui/core/styles";
import { firstCharToUpperCase } from "../utils/stringUtils";
import { categories } from "../data";
import { useStyles } from "../styles/SidebarStyles";
import { LinkBehavior } from "./additional/LinkBehavior";
import { toggleTheme } from "../redux/theme";
import { connect } from "react-redux";

function Sidebar(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const classes = useStyles(matches);

  const categoriesList = categories.map((item) => (
    <ListItem key={item.id}>
      <Link
        component={LinkBehavior}
        linkTo={`/products/${item.name}`}
        color="inherit"
      >
        <Typography className={classes.typography}>
          {firstCharToUpperCase(item.name)}
        </Typography>
      </Link>
    </ListItem>
  ));

  return (
    <Drawer
      anchor="left"
      open={props.isSideMenuOpen}
      onClose={() => props.setIsSideMenuOpen(false)}
    >
      <List className={classes.sideMenuContent} role="list">
        {categoriesList}
        <List>
          <IconButton onClick={props.toggleTheme}>
            {theme.palette.type === "dark" ? (
              <Brightness4Icon />
            ) : (
              <Brightness7Icon />
            )}
          </IconButton>
        </List>
      </List>
    </Drawer>
  );
}

const mapDispatchToProps = {
  toggleTheme,
};

export default connect(null, mapDispatchToProps)(Sidebar);
