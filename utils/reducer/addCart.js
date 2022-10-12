// ADD_CART: Checks if object with product id exists in products array, if it exists - update quantity for existing product object - else create new product object
const addOrUpdate = (state, action) => {
  const productIndex = state.products.findIndex(
    (product) => product.id === action.payload.id
  );
  if (productIndex !== -1) {
    return {
      ...state,
      products: state.products.map((product, index) => {
        if (productIndex === index) {
          return {
            id: product.id,
            quantity: product.quantity + action.payload.quantity,
          };
        } else {
          return product;
        }
      }),
      total: state.total + action.payload.quantity,
    };
  } else {
    return {
      ...state,
      products: [
        ...state.products,
        {
          id: action.payload.id,
          quantity: action.payload.quantity,
        },
      ],
      total: state.total + action.payload.quantity,
    };
  }
};

export default addOrUpdate;
