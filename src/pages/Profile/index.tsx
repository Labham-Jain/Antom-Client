import { AuthCtx } from '@contexts/AuthContext';
import { useContext } from 'react';
import ReactAvatar from 'react-avatar';
import { BiBasket, BiMoney, BiPackage, BiUser } from 'react-icons/bi';
import { IoSettingsOutline } from 'react-icons/io5';

const Profile = () => {
  const Authentication = useContext(AuthCtx)
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-3/4 p-12">
        <div className='flex'>
          <ReactAvatar name={Authentication?.details?.name} round />
          <div className='flex items-center ml-8'>
            <p className='text-2xl'>{Authentication?.details?.name}</p>
          </div>
        </div>

        <div className='w-full h-16 mt-16 shadow-md flex items-center hover:text-[#e47070] transition-all'>
          <div className='rounded-full flex items-center justify-center ml-5 w-8 h-8'>
            <BiPackage size={24}/>
          </div>
          <p className='ml-4'>Orders</p>
        </div>

        <div className='w-full h-16 mt-6 shadow-md flex items-center hover:text-[#e47070] transition-all'>
          <div className='rounded-full flex items-center justify-center ml-5 w-8 h-8'>
            <BiBasket size={24}/>
          </div>
          <p className='ml-4'>Cart</p>
        </div>

        <div className='w-full h-16 mt-6 shadow-md flex items-center hover:text-[#e47070] transition-all'>
          <div className='rounded-full flex items-center justify-center ml-5 w-8 h-8'>
            <BiMoney size={24}/>
          </div>
          <p className='ml-4'>Antom Pay</p>
        </div>

        <div className='w-full h-16 mt-6 shadow-md flex items-center hover:text-[#e47070] transition-all'>
          <div className='rounded-full flex items-center justify-center ml-5 w-8 h-8'>
            <IoSettingsOutline size={24}/>
          </div>
          <p className='ml-4'>Settings</p>
        </div>

        <div className='w-full h-16 mt-6 shadow-md flex items-center hover:text-[#e47070] transition-all'>
          <div className='rounded-full flex items-center justify-center ml-5 w-8 h-8'>
            <BiUser size={24}/>
          </div>
          <p className='ml-4'>Admin</p>
        </div>

      </div>
    </div>
  )
}

export default Profile