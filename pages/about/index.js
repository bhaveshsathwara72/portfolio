import React, { useState } from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import ParticlesContainer from '../../components/ParticlesContainer';
import Circles from '../../components/Circles';

const aboutData = [
  {
    title: 'Mobile',
    info: [
      {
        icons: [
          '/m1.png',
          '/m2.png',
          '/m3.png',
          '/m4.png',
        ],
      },
    ],
  },
  {
    title: 'Frontend',
    info: [
      {
        icons: [
          '/f1.png',
          '/f2.png',
          '/f3.png',
          '/f4.png',
          '/f5.png',
          '/f6.png',
          '/f7.png',
          '/f8.png',
          '/f9.png',
          '/f10.png',
        ],
      },
    ],
  },
  {
    title: 'Backend',
    info: [
      {
        icons: [
          '/b1.png',
          '/b2.png',
          '/b3.png',
          '/b4.png',
          '/b5.png',
          '/b6.png',
          '/b7.png',
          '/b8.png',
          '/b9.png',
          '/b10.png',
        ],
      },
    ],
  },
  {
    title: 'Database',
    info: [
      {
        icons: [
          '/db1.png',
          '/db2.png',
          '/db3.png',
          '/db4.png',
        ],
      },
    ],
  },
  {
    title: 'Design',
    info: [
      {
        icons: [
          '/d1.png',
          '/d2.png',
          '/d3.png',
          '/d4.png',
          '/d5.png',
          '/d6.png',
        ],
      },
    ],
  },
  {
    title: 'AI',
    info: [
      {
        icons: [
          '/AI1.png',
          '/AI2.png',
          '/AI3.png',
          '/AI4.png',
        ],
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <main className='h-full w-full scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-800 scrollbar-track-slate-300 h-[730px] overflow-y-scroll relative'>
      <title>About</title>
      <Circles />
      <ParticlesContainer />
      <div className="py-32 text-center xl:text-left">

        <div className="conatiner h-full relative mx-auto flex flex-col xl:flex-row gap-x-8 xl:text-left">
          {/* text section */}
          <div className="flex-1 flex flex-col justify-center mr-10 md:mt-10">
            <motion.h2
              variants={fadeIn('right', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-[36px] font-semibold ml-10 mb-5"
            >
              Captivating <span className="text-accent">Stories</span> birth magnificent designs.
            </motion.h2>

            <motion.p
              variants={fadeIn('right', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-[500px] text-[18px] mx-auto ml-10 mt-2 mb-6 xl:mb-12 px-5 xl:px-0"
            >
              8+ years of experience in mobile and web development, delivering scalable digital solutions for startups, enterprises, and SaaS platforms.
            </motion.p>

            {/* counters */}
            <motion.div
              variants={fadeIn('right', 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
            >
              <div className="flex flex-1 xl:gap-x-6 ml-10 px-5">
                {/* experience */}
                <div className="relative flex-1 after:w-[2px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={8} duration={5} />+
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Years Of experience
                  </div>
                </div>
                {/* clients */}
                <div className="relative flex-1 after:w-[2px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={100} duration={5} />+
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Satisfied clients
                  </div>
                </div>
                {/* projects */}
                <div className="relative flex-1  after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={150} duration={5} />+
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Finished Projects
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* tabbed skills section */}
          <motion.div
            variants={fadeIn('left', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col w-full xl:max-w-[48%] h-[250px] mt-10"
          >
            <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
              {aboutData.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              ))}
            </div>

            <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
              {aboutData[index].info.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* icons */}
                  <div className="gap-x-4">
                    <div className="container flex max-w-lg md:max-w-lg  grid grid-cols-5 gap-2">
                      {item.icons.map((iconSrc, iconIndex) => (
                        <div key={iconIndex} className="text-2xl text-white p-4">
                          <Image
                            src={iconSrc}
                            width={50}
                            height={50}
                            alt="Project Icon"
                            className="w-[70px] md:w-[70px] h-auto rounded-lg "
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default About;
