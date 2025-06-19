// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// Icons
import {
  FaDesktop,
  FaGlobe,
  FaCloudSunRain,
  FaChartPie,
  FaUsers
} from 'react-icons/fa';
import { RxArrowRight } from 'react-icons/rx';

// Import required Swiper modules (for Swiper v11+)
import { FreeMode, Pagination } from 'swiper/modules';

// Service data
const serviceData = [
  {
    icon: <FaDesktop />,
    title: 'UI/UX Design',
    description: "Creating modern, intuitive, and responsive interfaces for mobile and web apps to boost user engagement.",
  },
  {
    icon: <FaGlobe />,
    title: 'Full-Stack Development',
    description: "Building robust mobile and web apps using Flutter, React, Node.js, and Laravel with scalable architecture.",
  },
  {
    icon: <FaCloudSunRain />,
    title: 'API & Cloud Integration',
    description: "Secure REST API development and cloud deployment using Firebase, AWS, and DigitalOcean.",
  },
  {
    icon: <FaChartPie />,
    title: 'Internship & Training',
    description: "Hands-on internship programs with real projects in mobile, web, and cloud technologies.",
  },
  {
    icon: <FaUsers />,
    title: 'Tech Consulting',
    description: "Helping startups make the right technology decisions with a strong product foundation.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true} // ✅ fixed casing
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 shadow-none md:shadow-lg sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">{item.icon}</div>
            {/* title & desc */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>
            {/* arrow */}
            <div className="text-3xl">
              <RxArrowRight className="group-hover:-rotate-45 group-hover:text-accent transition-all duration-300" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
