import Cards from "@components/Cards";
import Section from "@components/Section";
import getClothesData from "@utils/data";
import { useRef } from "react";
import LandingCarousel from "./LandingCarousel";

const Home = () => {
  const bestPick = useRef(getClothesData({type: 'any', max: 10}))
  const mensPick = useRef(getClothesData({type: 'men', max: 5}))
  const womensPick = useRef(getClothesData({type: 'women', max: 5,}))
  return (
    <div className="pb-12">
      <LandingCarousel />
      <Section title="Best Picks For You" className="mt-14">
        <Cards data={bestPick.current} className="mt-20" />
      </Section>
      <Section title="Shop for Women" className="mt-14">
        <Cards data={womensPick.current} className="mt-20" />
      </Section>
      <Section title="Shop for Men" className="mt-14">
        <Cards data={mensPick.current} className="mt-20" />
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
