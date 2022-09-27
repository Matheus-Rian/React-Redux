import { Reducer } from "redux";
import { CartState, ItemCart, Product, ActionTypes } from './models';
import produce from "immer";

interface actionPayload {
  product: Product;
}

const INITIAL_STATE: CartState = {
  items: [],
  failedStockChecked: [],
};

const cart: Reducer<CartState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.addProductSuccess: {
        const { product } = action.payload as actionPayload;

        const productInCartIndex = draft.items.findIndex((item: ItemCart) => item.product.id === product.id);
    
        if (productInCartIndex >= 0)
          draft.items[productInCartIndex].quantity++;
        else
          draft.items.push({ product, quantity: 1 });
      
        break;
      }
      case ActionTypes.addProductFailure: {
        draft.failedStockChecked.push(action.payload.productId);
        break;
      }
      default:
        return draft;
    }
  });
};

export default cart;
