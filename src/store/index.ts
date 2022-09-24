import { createStore } from "redux";
import { CartState } from "./modules/cart/models";
import rootReducers from "./modules/rootReducers";

export interface IStateStore {
  cart: CartState,
}

const store = createStore(rootReducers);

export default store;