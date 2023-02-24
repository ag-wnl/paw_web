'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
    
      <img
        src="/search.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      />
      <h2 className="ml-40 font-extrabold tracking-widest text-[32px] leading-[30.24px] text-white">
        PAW
      </h2>

      {/* right side of navbar */}
      <div className='flex flex-row space-x-10 ml-20  '>
        <h2 className="font-normal tracking-widest text-[17px] leading-[30.24px] text-white">
            ABOUT US
        </h2>

        <h2 className="font-normal tracking-widest text-[17px] leading-[30.24px] text-white">
            PROJECTS
        </h2>

        <h2 className="font-normal tracking-widest text-[17px] leading-[30.24px] text-white">
            GALLERY
        </h2>

        <h2 className="font-normal tracking-widest text-[17px] leading-[30.24px] text-white">
            CONTACT US
        </h2>

      </div>
      
      
      
      <img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
