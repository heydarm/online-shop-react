import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { Paper, ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsPage from "./pages/ProductsPage";
import Cart from "./pages/Cart";
import ProductPopup from "./components/popups/ProductPopup";

import { useStyles } from "./styles/AppStyles";
import { lightTheme, darkTheme } from "./redux/theme";

function App(props) {
  const classes = useStyles();
  const theme = createMuiTheme(props.isLightTheme ? lightTheme : darkTheme);

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.appWrapper} square>
        <Header />

        <Paper elevation={0} className={classes.mainContentWrapper}>
          <Switch>

            <Route exact path="/">
              <Redirect to="/products" />
            </Route>

            <Route path="/products">
              <ProductsPage />
              <Route path="/products/:productId">
                <ProductPopup />
              </Route>
            </Route>

            <Route path="/cart">
              <Cart />
            </Route>

            <Route path="/search">
              <ProductsPage />
              <Route path="/search/:productId">
                <ProductPopup />
              </Route>
            </Route>

          </Switch>
        </Paper>

        <Footer />
      </Paper>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  isLightTheme: state.isLightTheme,
});

export default connect(mapStateToProps)(App);
