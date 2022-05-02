import API from "api";
import { createContext, useCallback, useEffect, useState } from "react";
import { GenericContextComponent } from "../Contexts";
import {manipulateOrderByID, moveInOrderFunc, ProductsContextInterface, ProductsList, updateInCartFunc, uploadNewProductType} from "./ProductsContext";

export const ProductsCtx = createContext<ProductsContextInterface>({
  updateInCart: () => {},
  moveInOrder: () => {},
  removeFromCart: () => {},
  uploadNewProduct: () => {},
  cart: [],
  orders: []
});

function ProductsContext({ children }: GenericContextComponent) {
  const [cart, setCart] = useState<ProductsList[]>([]);
  const [orders, updateOrders] = useState<ProductsList[]>([]);

  const updateInCart: updateInCartFunc = useCallback((id, action) => {

    setCart((previousCart) => {
      const item = previousCart.filter(item => item.id === id)[0];
      let newCart: ProductsList[];
      if(item && action === 'remove') {

        if(item.quantity == 1){
          newCart = previousCart.filter((previousItem) => previousItem.id !== id);
        } else {
          newCart = previousCart.map((previousItem) => {
            if(previousItem.id === id){
              previousItem.quantity -= 1;
            }
            return previousItem
          })
        }

      } else if(action === 'add' && item){
        newCart = previousCart.map(item => {
          if(item.id === id){
            item.quantity += 1
          }
          return item;
        })
      } else {
        newCart = [...previousCart, {id, quantity: 1}]
      }
      localStorage.setItem('cart', JSON.stringify(newCart))
      return newCart;
    });

  }, [cart]);
  const removeFromCart = () => {};
  const moveInOrder = () => {};

  const uploadNewProduct: uploadNewProductType = (data: any) => {
    const newData = {...data, images: undefined}
    const formData = new FormData();
    const newDataKeys = Object.keys(newData);

    for (let i = 0; i < newDataKeys.length; i++) {
      const key = newDataKeys[i];
      formData.append(key, newData[key])
    }
    [...data.images].map((img: File) => {
      formData.append('images', img, img.name);
    });
    API.post("products", { body: formData, headers: {"Content-Type": undefined} })

  }

  useEffect(() => {
    const cartString = localStorage.getItem('cart');
    if(cartString){
      setCart(JSON.parse(cartString))
    }
  }, []);

  const values: ProductsContextInterface = {
    updateInCart,
    moveInOrder,
    removeFromCart,
    uploadNewProduct,
    cart,
    orders,
  }
  return (
    <ProductsCtx.Provider value={values}>{children}</ProductsCtx.Provider>
  );
}

export default ProductsContext;
