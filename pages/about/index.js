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
          '/Android.png',
          '/Flutter.png',
          '/IONIC.png',
          '/IOS.png',
          '/ReactNative.png',
        ],
      },
    ],
  },
  {
    title: 'Frontend',
    info: [
      {
        icons: [
          '/Angular.png',
          '/CSS.png',
          '/GraphQl.png',
          '/HTML.png',
          '/javascript.png',
          '/Next.png',
          '/React.png',
          '/Svelte.png',
          '/Tailwind.png',
          '/TypeScript.png',
          '/VueJs.png',
        ],
      },
    ],
  },
  {
    title: 'Backend',
    info: [
      {
        icons: [
          '/ASP.png',
          '/Codeignitor.png',
          '/Django.png',
          '/JAVA.png',
          '/Laravel.png',
          '/Node.png',
          '/PHP.png',
          '/Python.png',
          '/Ruby-on-Rails.png',
          '/Yii.png',
          '/Express.png',
        ],
      },
    ],
  },
  {
    title: 'Database',
    info: [
      {
        icons: [
          '/Firebase.png',
          '/MongoDB.png',
          '/MySql.png',
          '/PostgreSQl.png',
        ],
      },
    ],
  },
  {
    title: 'Design',
    info: [
      {
        icons: [
          '/xd.png',
          '/photoshop.png',
          '/illustrator.png',
          '/aftereffects.png',
          '/animate.png',
          '/bridge.png',
          '/acrobat.png',
          '/figma.png',
        ],
      },
    ],
  },
  {
    title: 'AI',
    info: [
      {
        icons: [
          '/Django.png',
          '/Flask.png',
          '/Pyramid.png',
          '/Python.png',
          '/Tornado.png',
          '/Web2py.png',
          '/Zope.png',
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
          <div className="flex-1 flex flex-col justify-center mr-10">
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
              10 years ago, I began freelancing as a developer. Since then, I&apos;ve done remote
              work for agencies, consulted for startups, and collaborated on digital products for
              business and consumer use.
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
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={10} duration={5} />+
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Years Of experience
                  </div>
                </div>
                {/* clients */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={250} duration={5} />+
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Satisfied clients
                  </div>
                </div>
                {/* projects */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={650} duration={5} />+
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Finished Projects
                  </div>
                </div>
                {/* awards */}
                <div className="relative flex-1">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={8} duration={5} />+
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Winning awards
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
