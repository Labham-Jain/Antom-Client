import Button from "@components/Button"
import Input from "@components/Input"
import { ChangeEventHandler, useCallback, useState } from "react"
import { BiKey, BiPhone } from "react-icons/bi"
import { VscEye, VscEyeClosed } from "react-icons/all"
import { useForm } from "react-hook-form"
import {toast} from 'react-toastify';
import API from "api"

const AddAdmin = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {register, handleSubmit, setValue} = useForm();
  const submitForm  = async (data: any) => {
    const response: any = await API.post("admin/update", {body: JSON.stringify({...data, access: data.access === undefined ? true : data.access})}).json()
    if(response.status === 200) {
      toast(response.data, {type: "success", position: 'bottom-left'})
    }
  }
  const toggleAccess: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    setValue('access', event.target.checked)
  }, []);
  return (
    <div className="flex flex-col justify-center items-center h-[80vh]">
      <h3 className="mb-8 text-3xl">Add New Admin</h3>
      <form action="#" className="w-96 flex flex-col justify-center" onSubmit={handleSubmit(submitForm)}>
        <div>
          <Input placeholder="Admin's Phone Number" type="number" autoComplete="tel" {...register("phone", {required: true})} leftAdornment={<BiPhone color="#e47070"/>}/>
        </div>
        <div className="mt-4">
          <Input placeholder="Access Password" type={showPassword ? 'text' : 'password'} {...register("admin_password", {required: true})} autoComplete="new-password" leftAdornment={<BiKey color="#e47070"/>} rightAdornment={<Button type="button" className="bg-transparent text-black" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <VscEye /> : <VscEyeClosed />}</Button>}/>
        </div>
        <div className="flex mt-4">
          <input type="checkbox" defaultChecked className="w-5 h-5" id="access" onChange={toggleAccess} />
          <label htmlFor="access" className="text-sm ml-2">Allow access (Allow / Disallow)</label>
        </div>
        <Button className="mt-4 rounded-full">Update</Button>
      </form> 
    </div>
  )
}

export default AddAdmin