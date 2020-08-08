import React from "react";
import { Typography } from "@material-ui/core";

import { useStyles } from "../styles/FooterStyles";

function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography>Copyright 2020</Typography>
    </footer>
  );
}

export default Footer;
