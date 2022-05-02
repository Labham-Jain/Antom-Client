import {
  CarouselProvider,
  Slide,
  Slider,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Banner1 from "@images/banner-1.jpg";
import Banner2 from "@images/banner-2.jpg";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { motion } from "framer-motion";
import "./landingcarousel.css";
import getAnimation from "@utils/animation";

const zoomIn = getAnimation("zoom-in");

const LandingCarousel = () => {
  return (
    <div className="flex justify-center w-full select-none">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={40}
        totalSlides={2}
        infinite
      >
        <div className="w-[90vw] relative">
          <ButtonBack className="absolute top-1/2 translate-y-1/2 -left-3 z-10 bg-white hover:bg-black hover:text-white transition-all shadow-md p-2 rounded-sm">
            <BiChevronLeft size={32} />
          </ButtonBack>
          <Slider>
            <Slide index={0} className="relative">
              <img src={Banner1} />
              <div className="banner-overlay banner1">
                <motion.div
                  variants={zoomIn}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="absolute top-1/2 -translate-y-1/2"
                >
                  <h4>15000+ New Designs for 2022</h4>
                  <h3>#New Arrivals</h3>
                </motion.div>
              </div>
            </Slide>
            <Slide index={1} className="relative">
              <img src={Banner2} />
              <div className="banner-overlay banner2">
                <div className="absolute top-1/2 right-0 -translate-y-1/2">
                  <h4>On Men's Collection</h4>
                  <h3>30% Sale</h3>
                </div>
              </div>
            </Slide>
          </Slider>
          <ButtonNext className="absolute top-1/2 translate-y-1/2 -right-3 z-10 bg-white hover:bg-black hover:text-white transition-all shadow-md p-2 rounded-sm">
            <BiChevronRight size={32} />
          </ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  );
};

export default LandingCarousel;
