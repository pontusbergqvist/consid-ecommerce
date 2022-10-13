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

  const removeFromCart = (product) => {
    dispatch({
      type: "REMOVE_CART",
      payload: product,
    });
  };

  const decrementQuantity = (product) => {
    dispatch({
      type: "DECREMENT",
      payload: product,
    });
  };

  const incrementQuantity = (product) => {
    dispatch({
      type: "INCREMENT",
      payload: product,
    });
  };

  const reset = () => {
    dispatch({
      type: "RESET",
    });
  };

  const value = {
    products: state.products,
    addToCart,
    removeFromCart,
    decrementQuantity,
    incrementQuantity,
    reset,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default Context;
