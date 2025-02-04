import { motion } from "framer-motion";
import '../Home/Home.css'
import homeImage from '../../assets/homeimage.png'

function Home() {
  return (
    <div className="homeSection">
      {/* <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      //   initial="hidden"
      // whileInView="visible"
      // viewport={{ once: true }}
      // transition={{ duration: 0.3 }}
      // variants={{
      //   visible: { opacity: 1, scale: 1 },
      //   hidden: { opacity: 0, scale: 0 }
      // }}

      > */}
      <img src={homeImage} className="homeImage" />
      <div>
      <motion.h1
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }}
      className="homeHeading"
    > 
        Hi, I'm Lavanya
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="homeDescription"
      >
        A meticulous software engineer with a fondness for clean code, whimsical design, and the endless pursuit of elegant technology.
      </motion.p>
      </div>
      

      
    </div>
  );
}

export default Home;

// import React from 'react';

// const Home = () => {

//   return (
//     <div>
//         <h1>Home</h1>
//     </div>
//   );
// };

// export default Home;
