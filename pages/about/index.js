import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import ParticlesContainer from '../../components/ParticlesContainer';
import Circles from '../../components/Circles';

const Contact = () => {
  return (
    <main>
      <title>Contact</title>
      <ParticlesContainer />
      <div className="py-32 text-center xl:text-left h-[730px] overflow-y-scroll relative scrollbar scrollbar-thumb-slate-800 scrollbar-track-slate-300 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        <Circles />

        <div className="container mx-auto h-full flex flex-col justify-center items-center">
          <motion.h2
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-4xl font-bold mb-4"
          >
            Let's Connect
          </motion.h2>

          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-8 max-w-xl text-center text-lg"
          >
            {"I'm always open to discussing product design work or partnership opportunities."}
          </motion.p>

          <motion.form
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full max-w-xl"
          >
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white text-black rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-white text-black rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-white text-black rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-accent text-white font-semibold rounded-md hover:bg-accent-dark transition"
            >
              Send Message
            </button>
          </motion.form>

          <motion.p
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mt-8 text-sm text-white/70 text-center max-w-xl"
          >
            {"Don't like forms? Send me an email instead at "}
            <a href="mailto:hello@example.com" className="text-accent underline">
              hello@example.com
            </a>
            .
          </motion.p>
        </div>
      </div>
    </main>
  );
};

export default Contact;
