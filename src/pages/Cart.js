import React from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";

import { useStyles } from "../styles/ProductsPageStyles";
import CartProductCard from "../components/CartProductCard";

function Cart(props) {
  const classes = useStyles();

  const productsList = props.productsInCart.map((item) => (
    <Grid item key={item.id} xs={12}>
      <CartProductCard product={item} />
    </Grid>
  ));

  return (
    <Grid container className={classes.mainGridContainer}>
      <Grid item xs={false} sm={1} />
      <Grid item container xs={12} sm={10}>
        {productsList}
      </Grid>
      <Grid item xs={false} sm={1} />
    </Grid>
  );
}

const mapStateToProps = (state) => ({ productsInCart: state.cart });

export default connect(mapStateToProps)(Cart);
