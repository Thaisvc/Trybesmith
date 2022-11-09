export interface IOrder {
  id: number;
  userId: number;
  productsId: number[];
}

export interface IOrderProducts {
  user: number,
  product: [
    number,
  ]
}