import { ItemType } from "@utils/data";
import { nanoid } from "nanoid";
import { HTMLAttributes, useEffect, useState } from "react";
import Card from "./Card";

interface Props extends HTMLAttributes<HTMLDivElement> {
  data: ItemType[];
  fakeMultiply?: number;
}

function Cards({ data, className, fakeMultiply, ...props }: Props) {
  const [cardData, setCardData] = useState<ItemType[]>([]);

  useEffect(() => {
    if(fakeMultiply){
      const newData: ItemType[] = [];
      Array(fakeMultiply).fill(null).forEach(() => newData.push(...data))
      setCardData(newData)
    } else {
      setCardData(data)
    }
  }, [data]);
  return (
    <div className={`w-full flex justify-center ${className || ''}`} {...props}>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-5 gap-y-7 gap-x-12">
        {cardData.map((item) => (
          <Card item={item} key={nanoid(10)} />
        ))}
      </div>
    </div>
  );
}

export default Cards;