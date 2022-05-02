import Button from "@components/Button";
import Input from "@components/Input";
import Section from "@components/Section";
import TextArea from "@components/Textarea";
import { useForm } from "react-hook-form"

const AddProduct = () => {
  const {register} = useForm();
  return (
    <Section title="Add new products" className="w-full pt-12 flex flex-col items-center">
      <form action="#" className="w-3/4 pt-12">
        <div className="w-full flex justify-between">
          <div className="flex flex-col w-full gap-y-5">
            <div className="w-1/4">
              <Input className="px-6" {...register("name", {required: true})} label="Name" required />
            </div>
            <div className="w-1/4">
              <TextArea className="px-4 pt-3 w-full" {...register("description")} label="Description" />
            </div>
            <div className="w-1/4">
              <Input className="px-6" label="Price (INR)" {...register("price", {required: true})} required />
            </div>
            <div className="w-1/4">
              <Input className="px-6" label="Quantity" {...register("quantity", {required: true})} required />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end mt-24">
          <Button className="w-max rounded-md px-4">Add Product</Button>
        </div>
      </form>
    </Section>
  )
}

export default AddProduct