import { useEffect, useState } from "react";


import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaQuoteLeft } from "react-icons/fa";

const fullTestimonialData = [
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
  // Add more fake/testimonial items here for demo pagination
];

const ITEMS_PER_PAGE = 2;

const TestimonialSlider = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [page, setPage] = useState(1);

  // Load initial testimonials
  useEffect(() => {
    const loadInitial = fullTestimonialData.slice(0, ITEMS_PER_PAGE);
    setTestimonials(loadInitial);
  }, []);

  const loadMore = () => {
    const nextItems = fullTestimonialData.slice(0, (page + 1) * ITEMS_PER_PAGE);
    if (nextItems.length > testimonials.length) {
      setTestimonials(nextItems);
      setPage(prev => prev + 1);
    }
  };

  return (
    <Swiper
      Navigation={true}
      Pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
      onSlideChange={(swiper) => {
        if (swiper.activeIndex === testimonials.length - 1) {
          loadMore();
        }
      }}
    >
      {testimonials.map((person, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-14">
            {/* avatar, name, position */}
            <div className="w-full max-w-[360px] flex flex-col xl:justify-center 
              items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                <div className="text-lg">{person.name}</div>
                <div className="text-[12px] uppercase font-extralight tracking-widest ">
                  {person.position}
                </div>
              </div>
            </div>
            {/* quote & message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px]
              xl:before:bg-white/20 xl:before:absolute xl:before:left-0 
              xl:before:h-[200px] relative xl:pl-20 ">
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
  );
};

export default TestimonialSlider;
