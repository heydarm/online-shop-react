export function addProductToCart(product) {
  return { type: "ADD_PRODUCT_TO_CART", payload: product };
}

export function setProductQuantity(id, quantity) {
  return { type: "SET_PRODUCT_QUANTITY", payload: { id, quantity } };
}

export function deleteProductFromCart(id) {
  return { type: "DELETE_PRODUCT_FROM_CART", payload: id };
}

const initialState = [];

export function cartReducer(cart = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART":
      return [...cart, action.payload];
    case "SET_PRODUCT_QUANTITY":
      return cart.map((product) =>
        product.id === action.payload.id
          ? { ...product, quantity: action.payload.quantity }
          : product
      );
    case "DELETE_PRODUCT_FROM_CART":
      return cart.filter((item) => item.id !== action.payload);
    default:
      return cart;
  }
}
