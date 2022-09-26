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
