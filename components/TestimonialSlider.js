import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa";

const testimonialData = [
  {
    name: 'Ravinder Kumar ',
    position: 'Manager, TGT',
    message: "They truly understood our requirements and went the extra mile to deliver a polished, user-friendly app.",
  },
  {
    name: 'Dr. Sakile Camara',
    position: 'Owner, Midwest Social Science Research Associates',
    message: "Their genuine investment in building a long-lasting relationship with us, not just completing a project, impressed us.",
  },
  {
    name: 'Alex Florentin',
    position: 'Director, black mesa',
    message: "They showcased very good work and communication."
  },
];

const TestimonialSlider = () => {
  const swiperRef = useRef(null);

  return (
    <div className="space-y-4">
      {/* Clickable Menu */}
     

      {/* Swiper Slides */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="h-[400px]"
      >
        {testimonialData.map((person, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-5 h-full px-8">
              <div className="w-full max-w-[350px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  <div className="text-lg">{person.name}</div>
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {person.position}
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center relative xl:pl-20">
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                <div className="xl:text-lg text-center md:text-left">
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
