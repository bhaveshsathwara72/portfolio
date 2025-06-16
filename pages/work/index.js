// pages/Work/index.js
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import ParticlesContainer from '../../components/ParticlesContainer';
import AppContext from '../../context/AppContext'; // ✅ correct import

export default function Work() {
const { projects } = useContext(AppContext);
console.log("Projects in Work page:", projects);

  if (!projects || projects.length === 0) {
    return <p className="text-white text-center mt-10">Loading projects...</p>;
  }

  return (
    <section className="h-full scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-800 scrollbar-track-slate-300 h-[730px] overflow-y-scroll relative">
      <title>Work</title>
      <ParticlesContainer />
      <div className="pb-10 max-w-7xl mx-auto">
        <div className="bg-primary py-16 text-center container mx-auto flex flex-col justify-center">
          <h2 className="h2 mb-8 xl:mb-0">
            My <span className="text-accent">Work.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item, index) => (
            <Link key={index} href={`/ProjectDetails/${item.id}`} className="text-blue-400 hover:text-blue-300">
              <div className="group bg-primary rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700">
                <div className="relative h-64">
                  <Image
                   src={item.image || '/fallback.jpg'} // fallback if image is missing
                    width={400}
                    height={500}  
                    alt="Project"
                    className="w-auto h-auto rounded-lg"
                  />
                </div>
                <div className="p-6">
                  <div className="text-white w-full">
                    <p className="text-sm font-semibold uppercase tracking-wider mb-2">Web Development</p>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90 line-clamp-2">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">{item.frontend_technologies}</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
