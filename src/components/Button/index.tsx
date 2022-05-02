import { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{

}


const Button = ({className, children, ...props}: Props) => {
  return (
    <button className={`bg-[#e47070] disabled:bg-opacity-40 hover:bg-opacity-60 transition-all duration-200 p-3 text-white ${className || ''}`} {...props}>{children}</button>
  )
}

export default Button