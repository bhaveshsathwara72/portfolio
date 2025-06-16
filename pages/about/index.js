import React, {useState} from "react";
import ParticlesContainer from '../../components/ParticlesContainer';
import Image from 'next/image';

// about data
const aboutData = [

 {
    title: 'Mobile',
    info: [
      {
        icons: [
          <Image
              src='/Android.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[70px] md:w-full h-auto rounded-lg"
              />,
          <Image
              src='/Flutter.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[70px] md:w-full h-auto rounded-lg"
              />,
           <Image
              src='/IONIC.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[70px] md:w-full h-auto rounded-lg"
              />,
          <Image
              src='/IOS.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[70px] md:w-full h-auto rounded-lg"
              />,
           <Image
              src='/ReactNative.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[70px] md:w-full h-auto rounded-lg"
              />,
        ],
      },
    ],
  },

 {
    title: 'Frontend',
    info: [
      {
        icons: [
          <Image
              src='/Angular.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[70px] md:w-full h-auto rounded-lg"
              />, 
          <Image
              src='/CSS.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[70px] md:w-full h-auto rounded-lg"
              />,  
          <Image
              src='/GraphQl.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[70px] md:w-full h-auto rounded-lg"
              />,
          <Image
              src='/HTML.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[70px] md:w-full h-auto rounded-lg"
              />, 
          <Image
              src='/javascript.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[70px] md:w-full h-auto rounded-lg"
              />,  
          <Image
              src='/Next.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[70px] md:w-full h-auto rounded-lg"
              />,  
          <Image
              src='/React.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[70px] md:w-full h-auto rounded-lg"
              />,  
          <Image
              src='/Svelte.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[70px] md:w-full h-auto rounded-lg"
              />,  
         <Image
              src='/Tailwind.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[70px] md:w-full h-auto rounded-lg"
              />,  
        <Image
              src='/TypeScript.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[70px] md:w-full h-auto rounded-lg"
              />,
        <Image
              src='/VueJs.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[70px] md:w-full h-auto rounded-lg"
              />,
          

        ],
      },
    ],
  },

 {
    title: 'Backend',
    info: [
      {
        icons: [
         <Image
              src='/ASP.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[70px] md:w-full h-auto rounded-lg"
              />,
         <Image
              src='/Codeignitor.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[70px] md:w-full h-auto rounded-lg"
              />,
         <Image
              src='/Django.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[70px] md:w-full h-auto rounded-lg"
              />,
         <Image
              src='/JAVA.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[70px] md:w-full h-auto rounded-lg"
              />,
        <Image
              src='/Laravel.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[70px] md:w-full h-auto rounded-lg"
              />,
         <Image
              src='/Node.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[70px] md:w-full h-auto rounded-lg"
              />,
         <Image
              src='/PHP.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[70px] md:w-full h-auto rounded-lg"
              />,
          <Image
              src='/Python.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[70px] md:w-full h-auto rounded-lg"
              />,
          <Image
              src='/Ruby-on-Rails.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[70px] md:w-full h-auto rounded-lg"
              />,
         <Image
              src='/Yii.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[70px] md:w-full h-auto rounded-lg"
              />,
        <Image
              src='/Express.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[70px] md:w-full h-auto rounded-lg"
              />,
        ],
      },
    ],
  },

 {
    title: 'Database',
    info: [
      {
        icons: [
           <Image
              src='/Firebase.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[70px] md:w-full h-auto rounded-lg"
              />,,
           <Image
              src='/MongoDB.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[70px] md:w-full h-auto rounded-lg"
              />,
           <Image
              src='/MySql.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[70px] md:w-full h-auto rounded-lg"
              />,
           <Image
              src='/PostgreSQl.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[70px] md:w-full h-auto rounded-lg"
              />,
        ],
      },
    ],
  },

  {
    title: 'Design',
    info: [
      {
        icons: [
         <Image
            src='/xd.png'
            width={50} 
            height={50}
            alt="Project"
            className="w-[50px] md:w-[60px] h-auto rounded-lg"
            />, 
           <Image
              src='/photoshop.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[50px] md:w-[60px] h-auto rounded-lg"
              />,  
           <Image
              src='/illustrator.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[50px] md:w-[60px] h-auto rounded-lg"
              />, 
           <Image
              src='/aftereffects.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[50px] md:w-[60px] h-auto rounded-lg"
              />, 
           <Image
              src='/animate.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[50px] md:w-[60px] h-auto rounded-lg"
              />, 
           <Image
              src='/bridge.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[50px] md:w-[60px] h-auto rounded-lg"
              />, 
           <Image
              src='/acrobat.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[50px] md:w-[60px] h-auto rounded-lg"
              />, 
           <Image
              src='/figma.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[50px] md:w-[60px  ] h-auto rounded-lg"
              />,  
        ],
      },
    ],
  },

  { 
    title: 'AI',
    info: [
      {
        icons: [
         <Image
              src='/Django.png'
              width={30} 
              height={30}
              alt="Project"
              className="w-[70px] md:w-full h-auto rounded-lg"
              />,
         <Image
              src='/Flask.png'
              width={30} 
              height={30}
              alt="Project"
              className="w-[70px] md:w-full h-auto rounded-lg"
              />,
         <Image
              src='/Pyramid.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[70px] md:w-full h-auto rounded-lg"
              />,
         <Image
              src='/Python.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[70px] md:w-full h-auto rounded-lg"
              />,
        <Image
              src='/Tornado.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[70px] md:w-full h-auto rounded-lg"
              />,
         <Image
              src='/Web2py.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[70px] md:w-full h-auto rounded-lg"
              />,
         <Image
              src='/Zope.png'
              width={50} 
              height={50}
              alt="Project"
              className="w-[70px] md:w-full h-auto rounded-lg"
              />,
        ],
      },
    ],
  },


  
];

// Components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
import { motion } from "framer-motion";
import {fadeIn} from '../../variants';

//counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  
  return (
    <main>
      
      <title>About</title>
         <ParticlesContainer />
        <div className="py-32 text-center xl:text-left scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-800 scrollbar-track-slate-300 h-[730px] overflow-y-scroll relative">
            <Circles />
      <div className="conatiner h-full relative mx-auto flex flex-col  xl:flex-row gap-x-8 xl:text-left">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center mr-10">
            <motion.h2
            variants={fadeIn('right', 0.2)} 
            initial='hidden' 
            animate='show' 
            exit='hidden'
            className="text-[36px] font-semibold ml-10 mb-5">
              Captivating <span className="text-accent">Strories</span> birth magnificent designs.
            </motion.h2>
            <motion.p
            variants={fadeIn('right', 0.4)} 
            initial='hidden' 
            animate='show' 
            exit='hidden'
            className="max-w-[500px] text-[18px] mx-auto ml-10 mt-2 mb-6 xl:mb-12 px-5 xl:px-0">
              10 years ago, I began freelancing as devloper. Since then, I've done remote work for agencies, counsulted for startups, and collaborated on digital products for business and consumer use.
            </motion.p>
            {/* counters */}
            <motion.div 
              variants={fadeIn('right', 0.6)}  
              initial='hidden' 
              animate='show' 
              exit='hidden'
              className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
              <div className="flex flex-1 xl:gap-x-6 ml-10 px-5">
                {/* experience */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={10} duration={5}  /> + 
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                    Years Of experience
                  </div>
                </div>
                {/* clients */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={250} duration={5}  /> + 
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                    Satisfied clients
                  </div>
                </div>
                {/* Projects */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={650} duration={5}  /> + 
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                    Finished Projects
                  </div>
                </div>
               {/* awards */}
                <div className="relative flex-1">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={8} duration={5}  /> + 
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                    Winnings awards
                  </div>
                </div>
              </div>
            </motion.div>
        </div>
        {/* info */}
        <motion.div 
         variants={fadeIn('left', 0.4)} 
          initial='hidden' 
          animate='show' 
          exit='hidden'
          className=" flex flex-col w-full xl:max-w-[48%] h-[480px] mt-10">         
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4"> 
            {aboutData.map((item, itemIndex) => { 
              return(
                <div 
                    key={itemIndex} 
                    
                    className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'}
                      cursor-pointer capitalize xl:text-lg relative after:w-8 
                      after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                      onClick={() => setIndex(itemIndex)}
                      >
                    {item.title}
                </div>
              );
              })}
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
            return(
              <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div>{item.stage}</div>
                {/* icons */}
                <div className="gap-x-4">
                   <div className="conatiner flex w-[600px] grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5">
                  {item.icons?.map((icon, itemIndex)=>{
                  return(
                    <div key={itemIndex} className="text-2xl text-white p-4">
                      {icon}
                    </div>
                  )
                })}
                </div>
                 </div>
              </div>
            );
          })}
          </div>
        </motion.div>
      </div>
    </div>
  </main>
  )
};

export default About;
