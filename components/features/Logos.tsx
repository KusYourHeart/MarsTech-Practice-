import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '@/styles/logos.module.scss';

const logoGroups = [
    ["/images/cv_3_img/logos/l1.png", "/images/cv_3_img/logos/l1.png", "/images/cv_3_img/logos/l1.png", "/images/cv_3_img/logos/l1.png", "/images/cv_3_img/logos/l1.png"],
    ["/images/cv_3_img/logos/l2.png", "/images/cv_3_img/logos/l2.png", "/images/cv_3_img/logos/l2.png", "/images/cv_3_img/logos/l2.png", "/images/cv_3_img/logos/l2.png"],
    ["/images/cv_3_img/logos/l3.png", "/images/cv_3_img/logos/l3.png", "/images/cv_3_img/logos/l3.png", "/images/cv_3_img/logos/l3.png", "/images/cv_3_img/logos/l3.png"],
];

const Logos = () => {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);

  const cycleImages = () => {
    setCurrentSetIndex((prevIndex) => (prevIndex + 1) % logoGroups.length);
    setTimeout(cycleImages, 4000); // 5000ms for exit animation + 5000ms for enter animation
  }

  useEffect(() => {
    const timeout = setTimeout(cycleImages, 2000); // initial delay
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={{ position: 'relative', height: '300px' }}>
      <AnimatePresence>
        <div key={currentSetIndex}>
          {logoGroups[currentSetIndex].map((url) => (
            <motion.img
              key={url}
              src={url}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 5 }}
              style={{ position: 'absolute', top: 0, left: 0 }}
            />
          ))}
        </div>
      </AnimatePresence>
    </div>
  )
};
  
export default Logos;