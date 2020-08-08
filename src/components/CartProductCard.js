import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Input,
} from "@material-ui/core";
import {
  Add as AddIcon,
  Remove as RemoveIcon,
  Delete as DeleteIcon,
} from "@material-ui/icons";

import { setProductQuantity, deleteProductFromCart } from "../redux/cart";
import { useStyles } from "../styles/CartProductCardStyles";

const CardActionAreaCustom = React.forwardRef((props, ref) => (
  <div role="button" {...props} ref={ref} />
));

function CartProductCard(props) {
  const [localProductQuantity, setLocalProductQuantity] = useState(1);
  const classes = useStyles();

  useEffect(() => {
    if (localProductQuantity > 0) {
      props.setProductQuantity(props.product.id, localProductQuantity);
    }
  }, [localProductQuantity]);

  function handleChange(event) {
    if (event.target.value < 0) {
      setLocalProductQuantity(1);
    } else {
      setLocalProductQuantity(event.target.value);
    }
  }

  function handleBlur() {
    if (localProductQuantity < 1) {
      setLocalProductQuantity(1);
    }
  }

  function incrementProductQuantity() {
    setLocalProductQuantity((prev) => prev + 1);
  }

  function decrementProductQuantity() {
    if (localProductQuantity - 1 > 0) {
      setLocalProductQuantity((prev) => prev - 1);
    }
  }

  return (
    <Card variant="outlined" className={classes.card}>
      <CardActionArea
        className={classes.cardActionArea}
        component={CardActionAreaCustom}
      >
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
            Price:{" "}
            {props.product.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <div className={classes.productQuantity}>
            <div className={classes.quantityIcons}>
              <IconButton size="small" onClick={incrementProductQuantity}>
                <AddIcon />
              </IconButton>
              <IconButton size="small" onClick={decrementProductQuantity}>
                <RemoveIcon />
              </IconButton>
            </div>
            <Input
              className={classes.productQuantityInput}
              value={localProductQuantity}
              inputProps={{
                "aria-label": "quantity",
                className: classes.textCenter,
              }}
              onChange={handleChange}
              type="number"
              min={1}
              onBlur={handleBlur}
            />
          </div>
          <IconButton
            onClick={() => props.deleteProductFromCart(props.product.id)}
          >
            <DeleteIcon color="secondary" />
          </IconButton>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}

const mapDispatchToProps = {
  setProductQuantity,
  deleteProductFromCart,
};

export default connect(null, mapDispatchToProps)(CartProductCard);
