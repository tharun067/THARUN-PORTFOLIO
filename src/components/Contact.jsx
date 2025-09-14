import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaDownload } from "react-icons/fa";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const downloadResume = () => {
    // Create a simple resume download
    const resumeContent = `
THARUN CHAVA
Full Stack Developer

Email: tharunchava067@gmail.com
LinkedIn: linkedin.com/in/tharun-chava-77a57930a
GitHub: github.com/tharun067

SKILLS:
- Frontend: React.js, JavaScript, TypeScript, HTML/CSS, Tailwind CSS
- Backend: Node.js, Python, FastAPI, MongoDB
- Tools: Git, Docker, Three.js

EXPERIENCE:
- React.js Developer (March 2024 - Present)
- Full Stack Developer (Jan 2023 - Present)
- AI/ML Enthusiast (2022 - Present)

PROJECTS:
- Career Navigator - Career path finder
- AORTA ORACLE - Heart disease prediction
- Agrimitra - Plant disease detection
- SpendWise - Personal finance tracker
    `;
    
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Tharun_Chava_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };
  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className='mt-12 flex flex-col gap-6 text-white text-lg'>
          <button
            onClick={downloadResume}
            className='flex items-center gap-3 hover:text-primary transition-colors duration-300 bg-tertiary p-4 rounded-lg hover:bg-[#915EFF]/20'
          >
            <FaDownload size={20} /> Download Resume
          </button>

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
