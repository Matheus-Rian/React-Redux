export interface Product {
  id: number,
  title: string,
  price: number,
}

export interface itemCart {
  product: Product,
  quantity: number,
}

export interface CartState {
  items: itemCart[],
}
