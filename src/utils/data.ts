export interface Reviews {
  name: string;
  message: string;
  star: number;
}

export interface ItemType {
  name: string;
  id: string;
  src: string;
  stars: number;
  max_stars: number;
  total_reviews: number;
  reviews: Reviews[];
  price: number;
}
export interface DataType {
  men: ItemType[];
  women: ItemType[];
}
const data: DataType = {
  men: [
    {
      name: "Black & White Gradient Shirt",
      id: "men.0",
      src: "/src/assets/images/men/cloth-1.jpg",
      stars: 4.6,
      max_stars: 50,
      total_reviews: 1224677,
      reviews: [
        {
          name: "Pankaj Bishnoi",
          message: "Loved it. Perfect fit for my size!!!",
          star: 5,
        },
        {
          name: "Vishali Malhotra",
          message: "Pretty good pattern. Bought for Husband 😊",
          star: 4.5,
        },
        {
          name: "Sanjay Kapoor",
          message: "Nice! gifted it to my brother!",
          star: 4,
        },
      ],
      price: 1259,
    },
    {
      name: "Cheetah Designed White Shirt",
      id: "men.1",
      src: "/src/assets/images/men/cloth-2.jpg",
      stars: 4.2,
      max_stars: 50,
      total_reviews: 2040390,
      reviews: [
        { name: "Jay Surya", message: "Superb color!", star: 4.2 },
        { name: "Ajay Singhania", message: "Very nice!", star: 4.6 },
        {
          name: "Uday mishra",
          message: "Nice! very casual party design!!",
          star: 4.3,
        },
      ],
      price: 899,
    },
    {
      name: "Plain White Shirt",
      id: "men.2",
      max_stars: 50,
      reviews: [
        {
          name: "Surya Pratap",
          message: "Good. I use it for office.",
          star: 4.1,
        },
        { name: "Vishu Rana", message: "nice 👍", star: 4.4 },
        {
          name: "Amit chaudhary",
          message: "good quality",
          star: 4.2,
        },
      ],
      src: "/src/assets/images/men/cloth-3.jpg",
      stars: 43,
      total_reviews: 809983,
      price: 1399,
    },
    {
      name: "Blue Shirt For Offices",
      id: "men.3",
      max_stars: 50,
      reviews: [
        { name: "Ajay Vimal", message: "great fit", star: 4.9 },
        { name: "Tushar Gupta", message: "nice", star: 4.4 },
        { name: "Amit Tondon", message: "good quality.", star: 4.2 },
      ],
      src: "/src/assets/images/men/cloth-4.jpg",
      stars: 4.8,
      total_reviews: 1921839,
      price: 1199,
    },
    {
      name: "Premium Partywear Shirt",
      id: "men.4",
      max_stars: 50,
      reviews: [
        { name: "Aman Thukral", message: "बहुत अच्छी |", star: 4.3 },
        {
          name: "Mamta Sharma",
          message: "nice color i like it",
          star: 4.4,
        },
        {
          name: "Gaurav Kukreja",
          message: "very attractive in house parties.",
          star: 4.2,
        },
      ],
      src: "/src/assets/images/men/cloth-5.jpg",
      stars: 4.7,
      total_reviews: 1893847,
      price: 1599,
    },
    {
      name: "Premium Off-White Shirt",
      id: "men.5",
      max_stars: 50,
      reviews: [
        {
          name: "Ishita Kaur",
          message: "Osm Colors! Gonna gift my boyfiend 🤗",
          star: 5,
        },
        {
          name: "Amrita Banerjee",
          message: "nice color i like it",
          star: 4.4,
        },
        {
          name: "Ayush Kushal",
          message: "Very nice color, suitable for all moments",
          star: 4.6,
        },
      ],
      src: "/src/assets/images/men/cloth-6.jpg",
      stars: 4.8,
      total_reviews: 2356975,
      price: 1499,
    },
  ],
  women: [
    {
      id: "women.0",
      max_stars: 50,
      name: "Light Pink Top",
      price: 1699,
      reviews: [
        {
          message: "Superb!",
          name: "Arohi Suneja",
          star: 5,
        },
        {
          message: "Very Pretty. My wife will definitely love this!.",
          name: "Ronny Singh",
          star: 5,
        },
        {
          message: "Good Quality!!!",
          name: "Ruchi Verma",
          star: 4.7,
        },
      ],
      src: "/src/assets/images/women/cloth-1.jpg",
      stars: 4.9,
      total_reviews: 4058938,
    },
    {
      id: "women.1",
      max_stars: 50,
      name: "Velvet Red Top",
      price: 1549,
      reviews: [
        {
          message: "Simple and sober!!",
          name: "Akansha",
          star: 5,
        },
        {
          message: "Best gift for my sister!",
          name: "Rounak",
          star: 4.6,
        },
        {
          message: "Loved it!. Gonna wear in parties!!!!",
          name: "Monal Gupta",
          star: 5,
        },
      ],
      src: "/src/assets/images/women/cloth-2.jpg",
      stars: 4.7,
      total_reviews: 3545862,
    },
    {
      id: "women.2",
      max_stars: 50,
      name: "Light Purple Top",
      price: 1499,
      reviews: [
        {
          message: "Sweet!",
          name: "Harshita Sumani",
          star: 5,
        },
        {
          message: "Perfect!!!",
          name: "Ruhi",
          star: 4.8,
        },
        {
          message: "Loved it!. Gonna wear it every time!",
          name: "Shivani Supriya",
          star: 4.5,
        },
      ],
      src: "/src/assets/images/women/cloth-3.jpg",
      stars: 4.4,
      total_reviews: 2984765,
    },
    {
      id: "women.3",
      max_stars: 50,
      name: "Dark Green Top",
      price: 1499,
      reviews: [
        {
          message: "Very well created!",
          name: "Upsina TM",
          star: 4.6,
        },
        {
          message: "Nice! Gonna Hangout Now 😁😁",
          name: "kashish",
          star: 4.9,
        },
        {
          message: "Loved it!. Gonna wear it every time!",
          name: "Divya Ghoslani",
          star: 4.8,
        },
      ],
      src: "/src/assets/images/women/cloth-4.jpg",
      stars: 4.6,
      total_reviews: 2982938,
    },
    {
      id: "women.4",
      max_stars: 50,
      name: "Premium White Top",
      price: 1899,
      reviews: [
        {
          message:
            "Super nice! bought 3 pieces for everyday wearing 🤭🤭",
          name: "Rupashi Dutta",
          star: 5,
        },
        {
          message: "Nice!",
          name: "Khushi",
          star: 4.9,
        },
        {
          message: "Loved it!. Gonna wear it every time!",
          name: "Divya Ghoslani",
          star: 4.8,
        },
      ],
      src: "/src/assets/images/women/cloth-5.jpg",
      stars: 4.8,
      total_reviews: 5904393,
    },
    {
      id: "women.5",
      max_stars: 50,
      name: "Premium Black Top",
      price: 1899,
      reviews: [
        {
          message: "Very nice! i like the arm design",
          name: "Muskan Jindal",
          star: 4.9,
        },
        {
          message: "Nice",
          name: "Khushi",
          star: 4.9,
        },
        {
          message: "Loved it!. Gonna wear it every time!",
          name: "Divya Ghoslani",
          star: 4.8,
        },
      ],
      src: "/src/assets/images/women/cloth-5.jpg",
      stars: 4.8,
      total_reviews: 6903943,
    },
  ],
};

export type ClothesDataType = 'any' | 'men' | 'women';
interface ClothesDataFnc {
  type?: ClothesDataType;
  max?: number;
}
const getClothesData = ({
  type = "any",
  max = 6,
}: ClothesDataFnc) => {
  switch (type) {
    case "men":
      return [...data.men.filter((_item, index) => index < max)];
    case "women":
      return [...data.women.filter((_item, index) => index < max)];
    default:
      return [
        ...data.women.filter((_item, index) => index < max / 2),
        ...data.men.filter((_item, index) => index < max / 2),
      ];
  }
};

export const getClothInfo = (id: string) => {
  const gender = id.split(".")[0] as "men" | "women";
  return data[gender].filter((item) => item.id === id)[0];
};

export default getClothesData;
