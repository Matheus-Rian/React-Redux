import { AxiosResponse } from 'axios';
import { takeLatest, select, call, put } from 'redux-saga/effects';
import { IStateStore } from '../..';
import api from '../../../services/api';
import { addProductToCartRequest, addProductToCartSuccess, addProductToCartFailure } from './actions';
import { ActionTypes } from './models';

type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>;

interface IStockResponse {
  id: number;
  quantity: number
}

function* checkProductStock({ payload }: CheckProductStockRequest) {
  const { product } = payload;

  const currentlyQuantity: number = yield select((state: IStateStore) => {
    return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0;
  });

  const availableStockResponse: AxiosResponse<IStockResponse> = yield call(api.get, `stock/${product.id}`);

  if (availableStockResponse.data.quantity > currentlyQuantity)
    yield put(addProductToCartSuccess(product));
  else 
    yield put(addProductToCartFailure(product.id));
}

function* mySaga() {
  yield takeLatest(ActionTypes.addProductRequest, checkProductStock);
}

export default mySaga;