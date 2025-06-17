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
  fetch("https://sathwarainfotech.com/portfolio/admin/public/api/projects", {
    method: 'GET'
  })
    .then(res => {
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log("Fetched data from API:", data);
      if (Array.isArray(data)) {
        setProjects(data);
      } else {
        console.warn("Expected array but got:", data);
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
