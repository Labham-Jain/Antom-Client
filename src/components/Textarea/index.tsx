import { forwardRef, HTMLAttributes } from "react"

interface Props extends HTMLAttributes<HTMLTextAreaElement> {
  label?: string
}
const TextArea = forwardRef<HTMLTextAreaElement, Props>(({label, className, ...props}: Props, ref) => {
  return (
    <div>
      {label ? <p className="mb-2">{label}</p> : null}
      <textarea ref={ref} className={`border-[1px] border-black outline-none rounded-lg text-sm min-h-[120px] resize-none ${className}`} {...props} />
    </div>
  )
})

export default TextArea