import { takeLatest } from 'redux-saga/effects';
import { addProductToCart } from './actions';

type CheckProductStockRequest = ReturnType<typeof addProductToCart>;

function checkProductStock({ payload }: CheckProductStockRequest) {
  console.log(payload);
  console.log('Adicionou ao carrinho');
}

function* mySaga() {
  yield takeLatest('ADD_PRODUCT_TO_CART', checkProductStock);
}

export default mySaga;