type manipulateOrderByID = (id: string) => void;
type updateInCartFunc = (id: string, action: 'add' | 'remove') => void;
type moveInOrderFunc = (id: string, quantity: number) => void;
export interface ProductsContextInterface {
  updateInCart: updateInCartFunc;
  removeFromCart: manipulateOrderByID;
  moveInOrder: moveInOrderFunc;
  cart: ProductsList[],
  orders: ProductsList[],
}

export interface ProductsList {
  id: string;
  quantity: number;
}