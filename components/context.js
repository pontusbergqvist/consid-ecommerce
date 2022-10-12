import { useReducer, createContext } from "react";
import reducer, { initialState } from "../components/reducer";

export const ShopContext = createContext(initialState);

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (product) => {
    dispatch({
      type: "ADD_CART",
      payload: product,
    });
  };
  const value = {
    total: state.total,
    products: state.products,
    addToCart,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default Context;
