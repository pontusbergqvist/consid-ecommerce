const remove = (state, action) => {
  return {
    ...state,
    products: state.products.filter(
      (product) => product.id !== action.payload.id
    ),
  };
};

export default remove;
