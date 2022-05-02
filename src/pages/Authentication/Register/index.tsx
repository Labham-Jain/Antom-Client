import Button from "@components/Button"
import Input from "@components/Input"
import { useCallback, useContext, useState } from "react"
import { BiKey, BiPhone, BiUser } from "react-icons/bi"
import { VscEye, VscEyeClosed } from "react-icons/all"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { AuthCtx } from "@contexts/AuthContext"

const Register = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {register: formRegister, handleSubmit} = useForm();
  const Authentication = useContext(AuthCtx);

  const submitForm  = useCallback((data: any) => {
    const {phone, password, name} = data;
    Authentication?.register(name, phone, password)  
  }, [])

  return (
    <div className="flex flex-col justify-center items-center h-[80vh]">
      <h3 className="mb-8 text-3xl">Register</h3>
      <form action="#" className="w-96 flex flex-col justify-center" onSubmit={handleSubmit(submitForm)}>
        <div>
          <Input placeholder="Name" type="text" autoComplete="name" {...formRegister("name", {required: true})} leftAdornment={<BiUser color="#e47070"/>}/>
        </div>
        <div className="my-4">
          <Input placeholder="Phone Number" type="number" autoComplete="tel" {...formRegister("phone", {required: true})} leftAdornment={<BiPhone color="#e47070"/>}/>
        </div>
        <div>
          <Input placeholder="Password" type={showPassword ? 'text' : 'password'} {...formRegister("password", {required: true})} autoComplete="new-password" leftAdornment={<BiKey color="#e47070"/>} rightAdornment={<Button type="button" className="bg-transparent text-black" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <VscEye /> : <VscEyeClosed />}</Button>}/>
        </div>
        <Button className="mt-4 rounded-full">Register</Button>
        <div className="flex gap-1 mt-3 text-sm">
          <p>Already have an account?</p>
          <Link to="/login" className="text-[#e47070]">Login</Link>
        </div>
      </form> 
    </div>
  )
}

export default Register