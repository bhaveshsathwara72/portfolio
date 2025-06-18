// componens
import Circles from '/components/Circles';
import ParticlesContainer from '../../components/ParticlesContainer';

//icons
import {BsArrowRight} from 'react-icons/bs';
import {FaEnvelope,FaPhoneAlt} from 'react-icons/fa'
import { 
  RiBehanceLine, 
  RiDribbbleLine, 
  RiFacebookLine, 
  RiInstagramLine, 
  RiPinterestLine, 
  RiYoutubeLine } from 'react-icons/ri';

//framer motion 
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';
import Link from 'next/link';
import Image from 'next/image';



const Contact = () => {

const btnckick =() =>{
  alert('Thank You')
}


  return (
    <main>
     
        <title>Contact</title>
    <div className='bg-primary'>
      <ParticlesContainer />
    <div className="relative bg-primary py-32 text-center xl:text-left relative bg-primary/30 scrollbar-hover:scrollbar-thumb-sky-500 scrollbar-active:scrollbar-thumb-sky-400 h-[730px] scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300 overflow-y-scroll">
      <div className='container mx-auto text-center xl:text-left flex flex-col xl:flex-row gap-x-8 items-center 
        justify center '>
          
      <div className=' mt-5  h-full w-full p-8 transition-all duration-300 md:w-auto  md:max-w-lg '>
         <div className='flex gap-x-6 w-full p-6 text-4xl hover:text-accent transition-all duration-300 text-left md:text-left'>
          <FaEnvelope />
           <div className='text-lg font-bold text-white'>
             Email:
             <div className='gap-x-6 p-2 text-sm'>
                info@sathwarainfotech.com
             </div>
          </div>
         </div>

         <div className='flex gap-x-6 w-full p-6 text-4xl hover:text-accent transition-all duration-300  text-left md:text-left'>
          <FaPhoneAlt />
           <div className='text-lg font-bold text-white'>
             Contact:
             <div className='gap-x-6 p-2 text-sm'>
                +91 91040 81291
             </div>
          </div>
         </div>

          <div className='flex gap-x-6 w-full p-6 text-4xl hover:text-accent transition-all duration-300  text-left md:text-left'>
            <div className='text-lg font-bold text-white'>
              Our Social Network:
              <div className='flex-1 flex md:flex-row max-w-max gap-x-2 items-center p-2 m-2 '>
                <div className='text-white text-2xl p-2 items-center bg-blue rounded-full border border-white hover:bg-accent '>
                  <Link href={'https://dribbble.com/sathwara-infotech'} 
                  >
                    <Image
                        src={'/dribble.png'}
                        width={50}
                        height={50}
                        alt="Project Icon"
                        className="w-[28px] md:w-[30px] h-auto rounded-lg hover:bg-accent transition-all duration-300"
                      />
                  </Link>
                </div>
                <div className='text-white text-2xl p-2 items-center bg-blue rounded-full border border-white hover:bg-accent '>
                  <Link href={'https://www.behance.net/sathwarinfotech'} 
                  >
                    <Image
                        src={'/behance.png'}
                        width={50}
                        height={50}
                        alt="Project Icon"
                        className="w-[28px] md:w-[30px] h-auto rounded-lg hover:bg-accent transition-all duration-300"
                      />
                  </Link>
                </div>
                <div className='text-white text-2xl p-2 items-center bg-blue rounded-full border border-white hover:bg-accent '>
                  <Link href={'https://github.com/bhaveshsathwara72'} 
                  >
                    <Image
                        src={'/github.png'}
                        width={50}
                        height={50}
                        alt="Project Icon"
                        className="w-[28px] md:w-[30px] h-auto rounded-lg hover:bg-accent transition-all duration-300"
                      />
                  </Link>
                </div>
                <div className='text-white text-2xl p-2 items-center bg-blue rounded-full border border-white hover:bg-accent '>
                  <Link href={'https://www.linkedin.com/in/bhaveshsathwara/'} 
                  >
                    <Image
                        src={'/linkedin.png'}
                        width={50}
                        height={50}
                        alt="Project Icon"
                        className="w-[28px] md:w-[30px] h-auto rounded-lg hover:bg-accent transition-all duration-300"
                      />
                  </Link>
                </div>
                </div>
            </div>
          </div>
        </div>
        {/* text & form */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
          <motion.h2
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2 text-center mb-12'>
           { "Let's"}<span className='text-accent'>Connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form 
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex-l flex flex-col gap-6 w-full mx-auto'>
            {/* input group */}
            <div className='flex gap-x-6 w-full'>
              <input type='text' placeholder='name' className='input  border hover:border-accent' />
              <input type='text' placeholder='email' className='input  border hover:border-accent' />
            </div>
            <input type='text' placeholder='Subject' className='input  border hover:border-accent' />
            <textarea placeholder='Message' className='textarea  border hover:border-accent'></textarea>
            <button className='btn rounded-full border border-white/50 max-w-[170px] py-8 
              transition-all duration-300 flex items-center justify-center overflow-hidden 
              hover:border-accent group' onClick={btnckick}>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all
              duration-500 '>
                {"Let's talk"}</span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 
              group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
          </motion.form>
        </div>
        
        
      </div>
    </div>
    </div>
  </main>
  )
};

export default Contact;
