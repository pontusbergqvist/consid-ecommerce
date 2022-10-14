const decrement = (state, action) => {
  const productIndex = state.products.findIndex(
    (product) => product.id === action.payload.id
  );
  const quantity = state.products[productIndex].quantity - 1;
  if (quantity <= 0) {
    return {
      ...state,
      products: state.products.filter(
        (product) => product.id !== action.payload.id
      ),
    };
  } else {
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
  }
};

export default decrement;
