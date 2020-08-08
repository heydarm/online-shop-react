import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Dialog } from "@material-ui/core";
import ProductCard from "../ProductCard";
import { connect } from "react-redux";

function ProductPopup(props) {
  const [isProductPopupOpen, setIsProductPopupOpen] = useState(true);
  const { productId } = useParams();
  const history = useHistory();

  function handleClose() {
    setIsProductPopupOpen(false);
    history.goBack();
  }

  const product = props.products.find((item) => item.id === +productId);

  return (
    <Dialog onClose={handleClose} open={isProductPopupOpen}>
      <ProductCard product={product} noLink />
    </Dialog>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(ProductPopup);
