// testimonial data
const testimonialData = [
  {
    name: 'Ravinder Kumar ',
    position: 'Manager, TGT',
    message:
      "They truly understood our requirements and went the extra mile to deliver a polished, user-friendly app.",
  },
  {
    name: 'Dr. Sakile Camara',
    position: 'Owner, Midwest Social Science Research Associates',
    message:
     "Their genuine investment in building a long-lasting relationship with us, not just completing a project, impressed us.",
  },
  {
    name: 'Alex Florentin',
    position: 'Director, black mesa',
    message:
     "They showcased very good work and communication."
  },
];


//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//import required modules
import {Pagination} from 'swiper';
import {Navigation} from "swiper";

// icons
import {FaQuoteLeft} from 'react-icons/fa';

//next image
import Image from "next/image";



const TestimonialSlider = () => {
  return( 
  <Swiper 
  navigation={true}
  pagination={{
    clickable: true,
  }}
  modules={[Navigation, Pagination]}
  className="h-[400px] md-h-[500px]"
  >
  {
    testimonialData.map((person, index) => {
      return(
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center md:flex-row gap-x-5 h-full px-8">
            {/* avatar, name, position */}
            <div className="w-full max-w-[350px] flex flex-col xl:justify-center 
               items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* name */}
                <div className="text-lg">{person.name}</div>
                {/* position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest ">
                  {person.position}
                </div>
              </div>
            </div>
            {/* quote & message */}
            <div className=" flex-1 flex flex-col justify-center before:w-[1px]
              xl:before:bg-white/20 xl:before:absolute xl:before:left-0 
              xl:before:h-[200px] relative xl:pl-20 ">
              {/* quote icon */}
              <div className="mb-4">
                <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"/>
              </div>
              {/* message */}
              <div className="xl:text-lg text-center md:test-left ">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      );
    })};
  </Swiper>
  );
};

export default TestimonialSlider;
