import { takeLatest } from 'redux-saga/effects';

function checkProductStock(action: any) {
  console.log(action)
  console.log('Adicionou ao carrinho');
}

function* mySaga() {
  yield takeLatest('ADD_PRODUCT_TO_CART', checkProductStock);
}

export default mySaga;