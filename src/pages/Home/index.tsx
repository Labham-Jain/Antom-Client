import Cards from "@components/Cards";
import Section from "@components/Section";
import getClothesData, { ItemType } from "@utils/data";
import { useEffect, useState } from "react";
import LandingCarousel from "./LandingCarousel";

const Home = () => {
  const [all, setAll] = useState<ItemType[]>([]);
  const [women, setWomen] = useState<ItemType[]>([]);
  const [men, setMen] = useState<ItemType[]>([]);

  useEffect(() => {
    const promise = (async () => {
      const allData = await getClothesData();
      const menData = await getClothesData('men');
      const womenData = await getClothesData('women');
      setAll(allData);
      setMen(menData);
      setWomen(womenData);
    })();
    
    return () => {
      Promise.resolve(promise)
    }

  }, []);

  return (
    <div className="pb-12">
      <LandingCarousel />
      <Section title="Best Picks For You" className="mt-14">
        <Cards data={all} className="mt-20" />
      </Section>
      <Section title="Shop for Women" className="mt-14">
        <Cards data={women} className="mt-20" />
      </Section>
      <Section title="Shop for Men" className="mt-14">
        <Cards data={men} className="mt-20" />
      </Section>
      <Section className="mt-20 px-52 flex flex-col gap-4">
        <div className="w-full h-[2px] bg-gray-200"></div>
        <div className="flex flex-wrap justify-between mt-5">
          <p>Copyright &copy; 2022 - ANTOM.</p>
          <div className="flex gap-1">
            <p>Created By </p><a href="https://labhamjain.in/">Labham Jain</a>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Home;
