import { applyMiddleware, createStore } from "redux";
import { CartState } from "./modules/cart/models";
import rootReducers from "./modules/rootReducers";
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from "@redux-devtools/extension";
import mySaga from "./modules/cart/saga";

export interface IStateStore {
  cart: CartState,
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(
  rootReducers,
  composeWithDevTools(
    applyMiddleware(...middlewares)
  ),
);

sagaMiddleware.run(mySaga);

export default store;