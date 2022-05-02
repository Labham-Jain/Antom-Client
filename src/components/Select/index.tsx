import { forwardRef, HTMLAttributes } from "react"

interface Props extends HTMLAttributes<HTMLSelectElement> {
  label?: string;
  required?: boolean;
}
const Select = forwardRef<HTMLSelectElement, Props>(({children, label, required, className, ...props}: Props, ref) => {
  return (
    <div>
      {label ? <p className="mb-2">{label}{required ? <sup className="ml-1 text-[#e47070]">*</sup> : null}</p> : null}
      <select ref={ref} className={`w-full appearance-none bg-none h-9 outline-none bg-white border-[1px] border-black rounded-full px-4 ${className || ''}`} {...props}>
        {children}
      </select>
    </div>
  )
})

export default Select