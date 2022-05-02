import Cards from "@components/Cards";
import Section from "@components/Section";
import getClothesData, { ClothesDataType, ItemType } from "@utils/data"
import { useEffect, useState } from "react"

interface Props {
  type: ClothesDataType
}
const Gender = ({type}: Props) => {
  const [data, setData] = useState<ItemType[]>([]);

  useEffect(() => {
    const clothesData = getClothesData({type, max: 5});
    setData(clothesData)
  }, [type])

  return (
    <Section title={`Shop for ${type}`} className="mt-24">
      <Cards data={data} fakeMultiply={5} className="mt-16" />
    </Section>
  )
}

export default Gender