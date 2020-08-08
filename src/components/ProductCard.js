import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useRouteMatch, useLocation } from "react-router-dom";
import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Snackbar,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import { addProductToCart } from "../redux/cart";
import { useStyles } from "../styles/ProductCardStyles";

const CardActionAreaCustom = React.forwardRef((props, ref) => (
  <Link role="button" {...props} ref={ref} />
));

function ProductCard(props) {
  const classes = useStyles();
  const [itemInCartSnackbarOpen, setItemInCartSnackbarOpen] = useState(false);
  const match = useRouteMatch();
  const { search } = useLocation();

  function handleClick() {
    const sameProductInCart = props.productsInCart.find(
      (item) => item.id === props.product.id
    );
    if (!sameProductInCart) {
      props.product.quantity = 1;
      props.addProductToCart(props.product);
    } else {
      setItemInCartSnackbarOpen(true);
    }
  }

  const cardContent = (
    <>
      <CardMedia
        component="img"
        className={classes.cardImage}
        image={props.product.imageUrl}
        title={props.product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.product.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          onClick={handleClick}
          variant="outlined"
          fullWidth
          color="secondary"
        >
          Add to cart
        </Button>
      </CardActions>
    </>
  );

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={itemInCartSnackbarOpen}
        onClose={() => setItemInCartSnackbarOpen(false)}
        key={"Product already in cart"}
        autoHideDuration={1500}
      >
        <Alert severity="info">Product already in cart</Alert>
      </Snackbar>

      <Card variant="outlined" className={classes.card}>
        {props.noLink ? (
          <div>{cardContent}</div>
        ) : (
          <CardActionArea
            className={classes.cardActionArea}
            to={`${match.url}/${props.product.id}${search}`}
            component={CardActionAreaCustom}
          >
            {cardContent}
          </CardActionArea>
        )}
      </Card>
    </>
  );
}

const mapStateToProps = (state) => ({ productsInCart: state.cart });

const mapDispatchToProps = {
  addProductToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
