export enum ActionTypes {
  addProductRequest = "ADD_PRODUCT_TO_CART_REQUEST",
  addProductSuccess = "ADD_PRODUCT_TO_CART_SUCCESS",
  addProductFailure = "ADD_PRODUCT_TO_CART_FAILURE",
}

export interface Product {
  id: number,
  title: string,
  price: number,
}

export interface ItemCart {
  product: Product,
  quantity: number,
}

export interface CartState {
  items: ItemCart[],
  failedStockChecked: number[],
}
