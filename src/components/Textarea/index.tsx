import { HTMLAttributes } from "react"

interface Props extends HTMLAttributes<HTMLTextAreaElement> {
  label?: string
}
const TextArea = ({label, className, ...props}: Props) => {
  return (
    <div>
      {label ? <p className="mb-2">{label}</p> : null}
      <textarea className={`border-[1px] border-black outline-none rounded-lg text-sm min-h-[120px] resize-none ${className}`} {...props} />
    </div>
  )
}

export default TextArea