import { combineReducers, createStore } from "redux";
import { cartReducer } from "./cart";
import { themeReducer } from "./theme";
import { productsReducer } from "./products";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  isLightTheme: themeReducer,
});

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
