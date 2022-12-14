import addOrUpdate from "./addOrUpdate";
import remove from "./remove";
import increment from "./increment";
import decrement from "./decrement";

export const initialState = {
  products: [],
  addToCart: () => {},
  removeFromCart: () => {},
  decrementQuantity: () => {},
  incrementQuantity: () => {},
  reset: () => {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART":
      return addOrUpdate(state, action);
    case "REMOVE_CART":
      return remove(state, action);
    case "DECREMENT":
      return decrement(state, action);
    case "INCREMENT":
      return increment(state, action);
    case "RESET":
      return initialState;
    default:
      throw new Error("Wrong action type");
  }
};

export default reducer;
