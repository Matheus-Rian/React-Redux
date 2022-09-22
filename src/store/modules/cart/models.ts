export interface Product {
  id: number,
  name: string,
  price: number,
}

export interface itemCart {
  product: Product,
  quantity: number,
}

export interface CartState {
  items: itemCart[],
}
