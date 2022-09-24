import { Reducer } from "redux";
import { CartState } from "./models";
import produce from "immer";

const INITIAL_STATE: CartState = {
  items: [],
};

const cart: Reducer<CartState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "ADD_PRODUCT_TO_CART": {
        const { product } = action.payload;

        draft.items.push({
          product,
          quantity: 1,
        });
      
        break;
      }
      default:
        return draft;
    }
  });
};

export default cart;
