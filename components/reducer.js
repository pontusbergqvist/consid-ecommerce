import addOrUpdate from "../utils/reducer/addCart";

export const initialState = {
  total: 0,
  products: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    // ADD_CART: Checks if object with product id exists in products array, if it exists - update quantity for existing product object - else create new product object
    case "ADD_CART":
      return addOrUpdate(state, action);
    default:
      throw new Error("Wrong action type");
  }
};

export default reducer;
