import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  card: {
    height: "100%",
    margin: "0 auto",
  },
  cardActionArea: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  cardImage: {
    maxHeight: 150,
    margin: "0 auto",
    objectFit: "contain",
    padding: "10px",
  },
  cardActions: {
    width: "100%",
    marginTop: "auto",
  },
});
