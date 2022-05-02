import Button from "@components/Button"
import { ProductsCtx } from "@contexts/ProductsContext"
import { getClothInfo } from "@utils/data"
import { nanoid } from "nanoid"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Item from "./Item"

const Cart = () => {
  const {cart} = useContext(ProductsCtx);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      const {price} = getClothInfo(item.id);
      total += (item.quantity * price);
    })
    setTotal(total)
  }, [cart])

  useEffect(() => {
    window.scrollTo({top: 0})
  }, []);

  return (
    <div className='pb-12 mt-36 flex flex-col items-center'>
      <div className="flex flex-col items-center w-full">
        {cart.map((item) => <Item clothInfo={{...getClothInfo(item.id), quantity: item.quantity}} key={nanoid(10)} />)}
      </div>
      <div className="w-3/4 h-[2px] bg-gray-200 mt-12"></div>
      <div className="w-3/4 flex justify-end">
        <div className="w-1/4 mt-12 flex flex-col">
          <p className="text-xl">Total Summary</p>
          {cart.map(item => (
            <div className="flex justify-between my-3" key={nanoid(10)}>
              <p className="text-sm text-gray-400">{getClothInfo(item.id).name}</p>
              <p className="text-sm text-gray-400">₹ {getClothInfo(item.id).price * item.quantity}</p>
            </div>
          ))}
          <div className="w-full h-[2px] bg-gray-200 my-3"></div>
          <div className="flex justify-between">
            <p>Total: </p>
            <p>₹ {total}</p>
          </div>
          <Link to='/pay' className="p-4 bg-[#e47070] text-white text-center w-full rounded-md mt-4">
            Proceed To Pay
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cart