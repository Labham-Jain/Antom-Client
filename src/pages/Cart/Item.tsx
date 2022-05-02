import Button from '@components/Button';
import { ItemType } from '@utils/data'

interface ClothInfoType extends ItemType {
  quantity: number;
}

interface Props {
  clothInfo: ClothInfoType
}

const Item = ({clothInfo}: Props) => {
  return (
    <div className='w-3/4 h-[200px] my-4 flex'>
      <img src={clothInfo.src} className="h-full w-[150px] object-cover rounded-md" alt="" />
      <div className='ml-10 mt-2 w-full flex flex-col justify-between'>
        <div>
          <h3 className='text-xl'>{clothInfo.name}</h3>
          <h5 className='text-xs text-gray-400 mt-3'>Product ID: {clothInfo.id}</h5>
          <h5 className='text-xs text-gray-400 mt-3'>Quantity: {clothInfo.quantity}</h5>
        </div>
        <div className='w-full flex justify-end items-center'>
          <p>₹ {clothInfo.price * clothInfo.quantity}</p>
          <p className='text-xs text-gray-400 mx-3'>{clothInfo.price} x {clothInfo.quantity}</p>
        </div>
        <div className='flex w-full justify-end'>
          <Button className='w-24 text-sm p-2 rounded-md'>Remove</Button>
        </div>
      </div>
    </div>
  )
}

export default Item