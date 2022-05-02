import Button from "@components/Button"
import { ProductsCtx } from "@contexts/ProductsContext"
import { ProductsContextInterface } from "@contexts/ProductsContext/ProductsContext"
import { nanoid } from "nanoid";
import { useCallback, useContext, useEffect, useState } from "react"
import { BiMinus, BiPlus, BiShoppingBag } from "react-icons/bi"
import ReactStars from "react-stars"

const Card = ({item}: {item: any}) => {
  const {cart, updateInCart} = useContext<ProductsContextInterface>(ProductsCtx);
  const [cartItemCount, setCartItemCount] = useState<number>(0)

  const updateCart = useCallback((id: string, action: 'add' | 'remove') => {
    updateInCart(id, action);
  }, []);

  useEffect(() => {
    const thisItem = cart.filter(cartItem => cartItem.id === item.id)[0]
    if(thisItem){
      setCartItemCount(thisItem.quantity)
    } else {
      setCartItemCount(0)
    }
  }, [cart]);

  return (
    <div className="w-[250px] h-[420px] bg-white shadow-none overflow-hidden relative flex flex-col" key={nanoid(10)}>
      <span className="bg-black bg-opacity-20 w-full rounded-md h-[250px] block absolute"></span>
      <img src={import.meta.env.VITE_BACKEND_URL + item.src} className="w-full h-[250px] object-cover rounded-md" alt="" />
      <div id="product_details" className="mt-4 ml-2 flex flex-col h-full justify-between">
        <h3 className={`${item.name.length > 22 ? 'text-base' : 'text-lg'} font-sans font-semibold`}>{item.name}</h3>
        <div className="flex items-center gap-2 select-none">
          {/* @ts-ignore */}
          {item.stars} <ReactStars count={5} value={item.stars} edit={false} size={18} color2="#e47070"  />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-xs mt-1">{item.total_reviews} Reviews</p>
          <p className="text-lg mt-1">₹ {item.price}</p>
        </div>
        {cartItemCount === 0 ? <Button className="mt-1 w-max h-8 rounded-full flex justify-center items-center" onClick={() => updateCart(item.id, 'add')}><BiShoppingBag /> <span className="text-sm ml-2">Add to cart</span></Button> : <div className="flex gap-3 items-center">
        <Button className="rounded-full w-8 h-8 flex items-center p-0 justify-center" onClick={() => updateCart(item.id, 'remove')}><BiMinus /></Button>
        <p>{cartItemCount}</p>
        <Button className="rounded-full w-8 h-8 flex items-center p-0 justify-center" disabled={cartItemCount === 10} onClick={() => updateCart(item.id, 'add')}><BiPlus /></Button>
        </div>}
      </div>
    </div>
  )
}

export default Card