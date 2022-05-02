import { nanoid } from "nanoid";
import {
  CarouselProvider,
  Slide,
  Slider,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { IoMdImages } from "react-icons/io";

interface Props {
  images: (string | undefined)[];
}

const Carousel = ({images}: Props) => {
  return (
    <>
      {!images.length ? (
        <div className="w-[300px] h-[400px] bg-gray-100 text-gray-400 flex flex-col items-center justify-center">
          <IoMdImages size={70}/>
          <p>Select Images</p>
        </div>
      ): 
      <CarouselProvider naturalSlideWidth={100} totalSlides={images.length} naturalSlideHeight={100} className="relative">
        <ButtonBack className="absolute top-1/2 text-white -translate-y-1/2 left-0 z-10">Back</ButtonBack>
        <Slider className="w-[300px] h-[400px] rounded-md">
          {images.map((image, index) => (
            <Slide index={index} key={nanoid(10)}>
              <div>
                <img src={image} className={"object-cover w-full h-full"} />
              </div>
            </Slide>
          ))}
        </Slider>
        <ButtonNext className="absolute top-1/2 text-white -translate-y-1/2 right-0 z-10">Next</ButtonNext>
      </CarouselProvider>}
    </>
  )
}

export default Carousel