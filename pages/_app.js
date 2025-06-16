// pages/_app.js
import '../styles/globals.css';
import Layout from '../components/Layout';
import Transition from '../components/Transition';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from "react";
import AppContext from '../context/AppContext'; // ✅ from context

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const formData = new URLSearchParams();
    formData.append('data', '1');
    fetch("https://sathwarainfotech.com/portfolio/admin/public/api/projects", {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Cookie': 'humans_21909=1',
      },
     
    })
      .then(res => res.json())
     .then(data => {
        console.log("Fetched data from API:", data); // 👈 what does this print?

        if (Array.isArray(data)) {
          setProjects(data);
          console.log("Saved to context:", data); // 👈 check this
        } else {
          console.warn("projects is not an array:", data);
        }
      })
      .catch(err => {
        console.error("Failed to fetch projects:", err);
      });
  }, []);

  return (
    <AppContext.Provider value={{ projects, setProjects }}>
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </AppContext.Provider>
  );
}

export default MyApp;
