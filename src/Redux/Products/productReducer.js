import { ADD_TO_CART, REMOVE_FROM_CART } from "./productType";

const initialState = {
  numberOfItems: 0,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        numberOfItems: state.numberOfItems + 1,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        numberOfItems: state.numberOfItems - 1,
      };
    default:
      return state;
  }
};

// export const productReducerDecrement = (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };
