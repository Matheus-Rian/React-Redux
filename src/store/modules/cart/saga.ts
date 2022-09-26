import { takeLatest, select } from 'redux-saga/effects';
import { IStateStore } from '../..';
import { addProductToCartRequest } from './actions';

type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>;

function* checkProductStock({ payload }: CheckProductStockRequest) {
  const { product } = payload;

  const currentlyQuantity: number = yield select((state: IStateStore) => {
    return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0;
  });

  console.log(currentlyQuantity);
}

function* mySaga() {
  yield takeLatest('ADD_PRODUCT_TO_CART_REQUEST', checkProductStock);
}

export default mySaga;