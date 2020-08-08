import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  sideMenuContent: {
    width: (props) => (props ? "30vw" : "70vw"),
  },
  typography: {
    fontSize: "1.5em",
  },
});
