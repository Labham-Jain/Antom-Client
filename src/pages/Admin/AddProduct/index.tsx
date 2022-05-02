import Button from "@components/Button";
import Carousel from "@components/Carousel";
import Input from "@components/Input";
import Section from "@components/Section";
import Select from "@components/Select";
import TextArea from "@components/Textarea";
import { ProductsCtx } from "@contexts/ProductsContext";
import convertBase64File from "@utils/convertBase64File";
import { ChangeEventHandler, useContext, useState } from "react";
import { useForm } from "react-hook-form"

const AddProduct = () => {
  const {register, handleSubmit, setValue} = useForm();
  const {uploadNewProduct} = useContext(ProductsCtx);
  const [images, setImages] = useState<(string | undefined)[]>([]);
  const onSubmit = (data: any) => {
    console.log(data)
    uploadNewProduct(data)
  }


  const onImageInputChange: ChangeEventHandler<HTMLInputElement> = async (event) => {
    setValue("images[]", event.target.files)
    const files = await convertBase64File(event.target.files)
    if(files) setImages(files);
  }

  return (
    <Section title="Add new product" className="w-full pt-12 flex flex-col items-center">
      <form action="#" className="w-7/12 pt-12" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between w-full">
          <div className="flex flex-col w-1/2 gap-y-5">
            <div className="w-1/2">
              <Input className="px-6" {...register("name", {required: true})} label="Name" required />
            </div>
            <div className="w-1/2">
              <TextArea className="px-4 pt-3 w-full" {...register("description")} label="Description" />
            </div>
            <div className="w-1/2">
              <Input className="px-6" label="Price (INR)" type="number" {...register("price", {required: true})} required />
            </div>
            <div className="w-1/2">
              <Input className="px-6" label="Quantity" type="number" {...register("quantity", {required: true})} required />
            </div>
            <div className="w-1/2">
              <Select className="px-6" {...register("gender", {required: true})} label="Gender">
                <option value="men" className="text-sm">Men</option>
                <option value="women" className="text-sm">Women</option>
              </Select>
            </div>
          </div>
          <div className="w-1/2 max-w-[300px]">
            <Carousel images={images}/>
            <input type="file" multiple className="hidden" onChange={onImageInputChange} id="images" />
            <label htmlFor="images" className="cursor-pointer block  bg-[#e47070] p-2 text-center mt-4 rounded-full text-white">Select Images</label>
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