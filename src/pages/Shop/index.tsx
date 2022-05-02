import Cards from '@components/Cards';
import { ProductsList } from '@contexts/ProductsContext/ProductsContext';
import getClothesData, { ClothesDataType, ItemType } from '@utils/data';
import { useEffect, useState } from 'react';

const Shop = () => {
  const [tab, setTab] = useState<ClothesDataType>('any');
  const [collections, setCollections] = useState<ItemType[]>([]);

  useEffect(() => {
    const collection = getClothesData({ type: tab, max: tab === 'any' ? 10 : 6 });
    setCollections(collection)
  }, [tab]);

  return (
    <div className='pb-12 mt-24 flex justify-center'>
      <div className='w-3/4'>
        <div className='flex w-max rounded-3xl overflow-hidden border-2'>
          <p className={`${tab === "any" ? '!bg-[#e47070] !text-white' : ''} py-3 cursor-pointer transition-all duration-200 bg-white text-black px-6`} onClick={() => setTab('any')}>All</p>
          <p className={`${tab === "men" ? '!bg-[#e47070] !text-white' : ''} py-3 cursor-pointer transition-all duration-200 bg-white text-black px-6`} onClick={() => setTab('men')}>Men</p>
          <p className={`${tab === "women" ? '!bg-[#e47070] !text-white' : ''} py-3 cursor-pointer transition-all duration-200 bg-white text-black px-6`} onClick={() => setTab('women')}>Women</p>
        </div>
        <p className='ml-6 my-6 text-gray-400'>Showing {collections.length * 5} Results.</p>
        <div className=''>
          <Cards data={collections} fakeMultiply={5} className="mb-7" />
        </div>
      </div>
    </div>
  )
}

export default Shop