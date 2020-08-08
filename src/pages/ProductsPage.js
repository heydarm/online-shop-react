import React from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";

import { useStyles } from "../styles/ProductsPageStyles";
import ProductCard from "../components/ProductCard";

function ProductsPage(props) {
  const classes = useStyles();
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search).get("query");
  const searchQuery = queryParam && queryParam.trim();

  function searchByQuery(query) {
    const normalizedQueryWords = query
      .toLowerCase()
      .replace(/[ ,.]+/g, " ")
      .split(" ");

    if (query) {
      return props.products.filter((item) => {
        for (let word of normalizedQueryWords) {
          if (item.name.toLowerCase().includes(word)) {
            return true;
          }
        }
        return false;
      });
    }
  }

  const products = searchQuery ? searchByQuery(searchQuery) : props.products;

  const productsList = products.map((item) => (
    <Grid item key={item.id} xs={12} sm={4} md={3} lg={2}>
      <ProductCard product={item} />
    </Grid>
  ));

  return (
    <Grid container className={classes.mainGridContainer}>
      <Grid item xs={false} sm={1} />
      <Grid
        item
        container
        xs={12}
        sm={10}
        spacing={2}
        classes={{
          "spacing-xs-2": classes.cardWrapperGridItem,
        }}
        justify={productsList.length === 0 ? "center" : "flex-start"}
      >
        {productsList.length === 0 ? (
          <Typography>No items found</Typography>
        ) : (
          productsList
        )}
      </Grid>
      <Grid item xs={false} sm={1} />
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(ProductsPage);
