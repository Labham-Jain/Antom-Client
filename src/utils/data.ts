import API from "api"

const getClothesData = async (type: 'all' | 'men' | 'women' = "all") => {
  let {data} : {data: any[]} = await API.get(`products?gender=${type}`).json()
  data = data.map(item => ({price: parseInt(item.price), id: item._id, name: item.name, src: item.images && item.images[0]}))
  return data
}

export const getClothInfo = (id: string) => {
  return {price: 0, id: '', name: '', src: ''}
}

export interface ItemType {
  src: string;
  name: string;
  id: string;
  price: number;
}

export default getClothesData