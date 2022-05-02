import { forwardRef, InputHTMLAttributes } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  leftAdornment?: React.ReactChild | React.ReactNode
  rightAdornment?: React.ReactChild | React.ReactNode
  label?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(({leftAdornment, rightAdornment, className, label, required, ...props}: Props, ref) => {
  return (
    <div>
      {label ? <p className="mb-2">{label}{required ? <sup className="ml-1 text-[#e47070]">*</sup> : null}</p> : null}
      <div className='flex border-[1px] border-black rounded-full bg-white overflow-hidden h-10'>
        {leftAdornment ? <div className=" h-full flex items-center justify-center px-3">{leftAdornment}</div> : null}
        <input className={`input w-full h-full outline-none text-sm ${className || ''}`} ref={ref} {...props} required={required}/>
        {rightAdornment ? <div className=" h-full flex items-center justify-center px-3">{rightAdornment}</div> : null}
      </div>
    </div>
  )
});

export default Input