import Button from "@components/Button"
import Input from "@components/Input"
import { useContext, useState } from "react"
import { BiKey, BiPhone } from "react-icons/bi"
import { VscEye, VscEyeClosed } from "react-icons/all"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { AuthCtx } from "@contexts/AuthContext"
import {toast} from 'react-toastify'
const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {register, handleSubmit} = useForm();
  const navigate = useNavigate();
  const Authentication = useContext(AuthCtx)
  const submitForm  = async (data: any) => {
    const {phone, password} = data;
    try {
      const success = await Authentication?.login(phone, password)
      if(success){
        navigate('/');
      }
    } catch (error: any) {
      toast(error.message, {
        type: 'error',
        position: 'bottom-left'
      })
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-[80vh]">
      <h3 className="mb-8 text-3xl">Login</h3>
      <form action="#" className="w-96 flex flex-col justify-center" onSubmit={handleSubmit(submitForm)}>
        <div>
          <Input placeholder="Phone Number" type="number" autoComplete="tel" {...register("phone", {required: true})} leftAdornment={<BiPhone color="#e47070"/>}/>
        </div>
        <div className="mt-4">
          <Input placeholder="Password" type={showPassword ? 'text' : 'password'} {...register("password", {required: true})} autoComplete="new-password" leftAdornment={<BiKey color="#e47070"/>} rightAdornment={<Button type="button" className="bg-transparent text-black" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <VscEye /> : <VscEyeClosed />}</Button>}/>
        </div>
        <Button className="mt-4 rounded-full">Login</Button>
        <div className="flex gap-1 mt-3 text-sm">
          <p>Don't have an account?</p>
          <Link to="/register" className="text-[#e47070]">Register</Link>
        </div>
      </form> 
    </div>
  )
}

export default Login