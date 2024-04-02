import "./LoadingScreen.css";
import loadingImage from "../assets/img-logo.png";
import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 1 },
  animate: { opacity: 0 },
};

const LoadingScreen = () => {
  return (
    <motion.div
      data-aos='fade'
      variants={animations}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{ duration: 0.5, delay: 2.5 }}
      className='loading-div'
    >
      <img src={loadingImage} alt='loading' className='loading-image' />
      <div className='loading-bar'></div>
    </motion.div>
  );
};

export default LoadingScreen;
