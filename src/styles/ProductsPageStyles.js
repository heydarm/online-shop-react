import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  mainGridContainer: {
    flex: 1,
    padding: "25px 0",
  },
  dflex: {
    display: "flex",
  },
  cardWrapperGridItem: {
    [theme.breakpoints.down("sm")]: {
      margin: "0",
    },
  },
}));
