import { Product, ActionTypes } from './models';

export function addProductToCartRequest(product: Product) {
  return {
    type: ActionTypes.addProductRequest,
    payload: {
      product,
    },
  };
}

export function addProductToCartSuccess(product: Product) {
  return {
    type: ActionTypes.addProductSuccess,
    payload: {
      product,
    },
  };
}

export function addProductToCartFailure(productId: number) {
  return {
    type: ActionTypes.addProductFailure,
    payload: {
      productId,
    },
  };
}