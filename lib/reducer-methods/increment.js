const increment = (state, action) => {
  const productIndex = state.products.findIndex(
    (product) => product.id === action.payload.id
  );
  const quantity = state.products[productIndex].quantity + 1;
  return {
    ...state,
    products: state.products.map((product, i) => {
      if (i === productIndex) {
        return {
          ...product,
          quantity: quantity,
        };
      } else {
        return { ...product };
      }
    }),
  };
};

export default increment;
