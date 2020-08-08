import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  card: {
    height: "100%",
    margin: "0 auto",
  },
  cardActionArea: {
    display: "flex",
    justifyContent: "flex-start",
  },
  cardImage: {
    minWidth: "0px",
    minHeight: "0px",
    maxWidth: "150px",
    maxHeight: "150px",
    objectFit: "contain",
    padding: "10px",
  },
  cardActions: {
    marginLeft: "auto",
  },
  productQuantity: {
    display: "flex",
    alignItems: "center",
    marginRight: "10px",
  },
  quantityIcons: {
    display: "flex",
    flexDirection: "column",
    marginRight: "20px",
  },
  productQuantityInput: {
    maxWidth: "20px",
  },
  textCenter: {
    textAlign: "center",
  },
});
