import Button from "@components/Button";
import { BiCheck, BiWifi } from "react-icons/bi"
import {SiVisa} from 'react-icons/si';

const Payment = () => {
  return (
    <div className="pb-12 mt-24 flex justify-center">
      <div className="w-3/4">
        <h3 className="text-xl">Select card to buy:</h3>
        <div className="mt-10">
          {/* debit card */}
          <div className="w-1/4 border-2 h-48 relative border-gray-800 rounded-md p-5 bg-gray-50">
            <h4>
              <span className="mx-2">4532</span>
              <span className="mx-2">8552</span>
              <span className="mx-2">7827</span>
              <span className="mx-2">1222</span>
            </h4>
            <BiWifi size={36} className='mt-3 ml-2' />
            <p className="mt-3 ml-2">DEMO CARD</p>
            <div className="flex mt-3 ml-2 justify-between items-center">
              <p>03/32</p>
              <SiVisa size={36} />
            </div>
            {/* checked tick */}
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center bg-black text-white"><BiCheck /></div>
          </div>
          {/* end */}
        </div>
        <h3 className="text-xl mt-10">Select shipping address:</h3>
        <div className="w-2/4 mt-8 h-56 border-2 border-black p-6 relative bg-gray-50 rounded-md">
          <h3 className="text-xl">Default Address</h3>
          <p className="mt-4">Studio 12,</p>
          <p className="mt-2">Dadasaheb Phalke Chitranagari, Goregaon East</p>
          <p className="mt-2">Mumbai, Maharastra</p>
          <p className="mt-2">India (400063)</p>
          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center bg-black text-white"><BiCheck /></div>
        </div>
        <div className="w-3/4 flex items-center justify-end">
          <Button>Order</Button>
        </div>
      </div>
    </div>
  )
}

export default Payment