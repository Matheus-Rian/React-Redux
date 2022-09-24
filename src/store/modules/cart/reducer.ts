import { Reducer } from "redux";
import { CartState } from "./models";

const INITIAL_STATE: CartState = {
  items: []
}

const cart: Reducer<CartState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART':
      const { product } = action.payload;

      return {
        ...state,
        items: [
          ...state.items,
          {
            product,
            quantity: 1,
          },
        ],
      };
    default:
      return state;
  }
}

export default cart;
