"use client";

import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import AppContext from '../../../context/AppContext';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaCheck } from 'react-icons/fa';
import ParticlesContainer from '../../../components/ParticlesContainer';
import { fadeIn } from '../../../variants';

export default function Works() {
  const router = useRouter();
  const { id } = router.query;
  const { projects } = useContext(AppContext);
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    if (!id || !projects || projects.length === 0) return;

    const project = projects.find((p) => String(p.id) === id);
    if (!project || !project.gallery_urls) return;

    try {
      let images = [];

      if (Array.isArray(project.gallery_urls)) {
        images = project.gallery_urls;
      } else if (typeof project.gallery_urls === 'string') {
        if (project.gallery_urls.trim().startsWith('[')) {
          images = JSON.parse(project.gallery_urls);
        } else {
          images = project.gallery_urls.split(',');
        }
      }

      setGalleryImages(images);
    } catch (error) {
      console.error('Invalid gallery_urls format:', error);
      setGalleryImages([]);
    }
  }, [id, projects]);

  if (!projects || projects.length === 0) {
    return <p className="text-white text-center mt-10">Loading projects...</p>;
  }

  if (!id) {
    return <p className="text-white text-center mt-10">Loading project details...</p>;
  }

  const project = projects.find((p) => String(p.id) === id);

  if (!project) {
    return <p className="text-white text-center mt-10">Project not found.</p>;
  }

  return (
    <section>
      <ParticlesContainer />
      <div className="h-full w-full bg-primary">
        <div className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-800 scrollbar-track-slate-300 h-[730px] overflow-y-scroll relative">
          <div className="mt-10 p-6 rounded-2xl shadow-lg max-w-5xl mx-auto space-y-6">
            <button
              onClick={() => router.back()}
              className="mt-10 flex items-center px-6 py-3 bg-primary hover:bg-accent transition-all duration-300 rounded-xl border border-gray-100/20 text-white hover:scale-105 transform hover:shadow-lg w-fit">
              <FaArrowLeft className="mr-2" /> Go Back
            </button>

            <motion.h1
              variants={fadeIn('down', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-center text-3xl font-bold"
            >
              <span className="text-accent">{project.title}</span>
            </motion.h1>

            <div className="flex flex-col lg:flex-row gap-6">
              <motion.div
                variants={fadeIn('right', 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="flex-1"
              >
                <Image
                  src={project.image || '/fallback.jpg'}
                  width={400}
                  height={400}
                  alt="Project Image"
                  className="w-full h-full rounded-lg transition-all duration-300"
                />
              </motion.div>

              <motion.div
                variants={fadeIn('left', 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="flex-1 space-y-4"
              >
                <div className="bg-primary h-[245px] p-8 rounded-2xl shadow-lg border-gray-700 border hover:bg-primary/600 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-white">Technologies Used</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-gray-200">Frontend</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-900/30 text-blue-200 rounded-full text-sm border border-blue-800/50">
                          {project.frontend_technologies}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-gray-200">Backend</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-900/30 text-blue-200 rounded-full text-sm border border-blue-800/50">
                          {project.backend_technologies}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  {project.web_link && (
                    <Link
                      href={project.web_link}
                      target="_blank"
                      className="flex items-center px-6 py-3 bg-black/30 hover:bg-primary transition-all duration-300 rounded-xl border border-gray-100/20 text-white hover:scale-105 transform hover:shadow-lg w-fit"
                    >
                      <Image
                        src="/globe.svg"
                        width={30}
                        height={30}
                        alt="visit"
                        className="mr-3 brightness-0 invert h-fit color: transparent"
                      />
                      <span className="font-semibold text-lg"> Visit Website </span>
                    </Link>
                  )}
                  {project.play_store_link && (
                    <Link
                      href={project.play_store_link}
                      target="_blank"
                      className="flex items-center bg-black/30 hover:bg-primary transition-all duration-300 rounded-xl border border-gray-100/20 text-white hover:scale-105 transform hover:shadow-lg w-fit"
                    >
                      <Image
                        src="/playstore.png"
                        width={200}
                        height={0}
                        alt="playstore"
                        className="object-contain h-fit color: transparent"
                      />
                    </Link>
                  )}
                  {project.app_store_link && (
                    <Link
                      href={project.app_store_link}
                      target="_blank"
                      className="flex items-center bg-black/30 hover:bg-primary transition-all duration-300 rounded-xl border border-gray-100/20 text-white hover:scale-105 transform hover:shadow-lg w-fit"
                    >
                      <Image
                        src="/asdownload.jpg"
                        width={200}
                        height={0}
                        alt="appstore"
                        className="object-contain h-fit color: transparent"
                      />
                    </Link>
                  )}
                </div>
              </motion.div>
            </div>

            <div>
              <motion.h2
                variants={fadeIn('down', 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="text-xl font-semibold mb-2"
              >
                Overview
              </motion.h2>
              <p className="text-gray-400 text-sm">{project.long_description}</p>
            </div>

            <div>
              <motion.h2
                variants={fadeIn('down', 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="text-xl font-semibold mb-2"
              >
                Key Features
              </motion.h2>
              <p className="flex text-white text-sm items-start gap-2">
                <FaCheck className="mt-1" /> {project.features}
              </p>
            </div>

            <div>
              <motion.h2
                variants={fadeIn('down', 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="text-xl font-semibold mb-2"
              >
                Project Journey
              </motion.h2>

              <div className="bg-primary/90 p-4 border border-gray-700 rounded-xl mb-4 hover:border-accent transition-all duration-300">
                <h3 className="font-semibold mb-1 text-white-400">The Challenge</h3>
                <p className="text-gray-400 text-sm">{project.challenge}</p>
              </div>

              <div className="bg-primary/90 p-4 border border-gray-700 rounded-xl hover:border-accent transition-all duration-300">
                <h3 className="font-semibold mb-1 text-white-400">Our Solution</h3>
                <p className="text-gray-400 text-sm">{project.solution}</p>
              </div>
            </div>

            {/* Gallery */}
            <div>
              <motion.h2
                variants={fadeIn('down', 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="text-xl font-semibold mb-2"
              >
                Gallery
              </motion.h2>

              {galleryImages.length === 0 ? (
                <p className="text-gray-400 text-sm">No gallery images available.</p>
              ) : (
                <motion.div
                  variants={fadeIn('down', 0.6)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="gallery-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"
                >
                  {galleryImages.map((src, i) => (
                    <Image
                      key={i}
                      src={src.trim()}
                      width={300}
                      height={500}
                      alt={`Gallery Image ${i + 1}`}
                      className="rounded-lg m-2 transition-all duration-300"
                    />
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
