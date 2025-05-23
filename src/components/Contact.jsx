import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className='mt-12 flex flex-col gap-6 text-white text-lg'>
          <a
            href='mailto:tharunchava067@gmail.com'
            className='flex items-center gap-3 hover:text-primary transition-colors duration-300'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaEnvelope size={20} /> tharunchava067@gmail.com
          </a>

          <a
            href='https://www.linkedin.com/in/tharun-chava-77a57930a/'
            className='flex items-center gap-3 hover:text-primary transition-colors duration-300'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin size={20} /> linkedin.com/in/tharun-chava-77a57930a
          </a>

          <a
            href='https://github.com/tharun067'
            className='flex items-center gap-3 hover:text-primary transition-colors duration-300'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub size={20} /> github.com/tharun067
          </a>

          <a
            href='https://instagram.com/tharunchowdary_06/'
            className='flex items-center gap-3 hover:text-primary transition-colors duration-300'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram size={20} /> instagram.com/tharunchowdary_06
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
