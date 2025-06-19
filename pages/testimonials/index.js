//components
import TestimonialSlider from "../../components/TestimonialSlider";


// framer motion 
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';
import ParticlesContainer from "../../components/ParticlesContainer";

const Testimonials = () => {
  return (
    <main>
    <title>Testimonials</title>
   <div className="h-full w-full bg-primary py-32 text-center scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-800 scrollbar-track-slate-300 h-[730px] overflow-y-scroll relative ">
    <ParticlesContainer/>
    <div className="container mx-auto h-full flex flex-col justify-center"> 
      {/* title */}
      <motion.h2
       variants={fadeIn('up', 0.2)} 
       initial='hidden' 
       animate='show' 
       exit='hidden'
       className="h2 mb-8 xl:mb-0">
        What client <span className="text-accent">Say.</span>
      </motion.h2>
      {/* slider */}
      <motion.div 
      variants={fadeIn('up', 0.4)} 
      initial='hidden' 
      animate='show' 
      exit='hidden'
      >
        
        <TestimonialSlider />
      </motion.div>
    </div>
   </div>
  </main>
  );
};

export default Testimonials;
