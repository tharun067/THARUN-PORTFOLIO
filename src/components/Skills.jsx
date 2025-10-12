import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const skillCategories = [
  {
    title: "Languages & Libraries",
    skills: [
      { name: "Python", level: 95 },
      { name: "Java", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Pandas", level: 90 },
      { name: "NumPy", level: 90 },
      { name: "TensorFlow", level: 85 },
      { name: "Keras", level: 85 }
    ]
  },
  {
    title: "Web & Backend",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 80 },
      { name: "Node.js", level: 85 },
      { name: "FastAPI", level: 82 },
      { name: "Streamlit", level: 75 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 88 }
    ]
  },
  {
    title: "AI / ML & LLMs",
    skills: [
      { name: "Deep Learning", level: 90 },
      { name: "NLP", level: 88 },
      { name: "Reinforcement Learning", level: 75 },
      { name: "Generative AI", level: 85 },
      { name: "LangChain", level: 80 },
      { name: "LLaMA", level: 75 },
      { name: "OpenAI / Gemini", level: 80 }
    ]
  },
  {
    title: "Tools & Databases",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "Docker", level: 75 },
      { name: "MySQL", level: 78 },
      { name: "MongoDB", level: 78 },
      { name: "Firebase", level: 72 },
      { name: "Selenium", level: 70 },
      { name: "BeautifulSoup", level: 70 }
    ]
  }
];

const SkillBar = ({ skill, index }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.1, 0.75)}
    className="mb-4"
  >
    <div className="flex justify-between mb-2">
      <span className="text-white font-medium">{skill.name}</span>
      <span className="text-secondary">{skill.level}%</span>
    </div>
    <div className="w-full bg-tertiary rounded-full h-2">
      <motion.div
        className="bg-gradient-to-r from-[#915EFF] to-[#00cea8] h-2 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        transition={{ duration: 1, delay: index * 0.1 }}
        viewport={{ once: true }}
      />
    </div>
  </motion.div>
);

const SkillCategory = ({ category, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className="bg-tertiary p-6 rounded-xl"
  >
    <h3 className="text-white text-xl font-bold mb-6 text-center">
      {category.title}
    </h3>
    {category.skills.map((skill, skillIndex) => (
      <SkillBar key={skill.name} skill={skill} index={skillIndex} />
    ))}
  </motion.div>
);

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Expertise</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Here's a comprehensive overview of my technical skills and proficiency levels. 
        I continuously learn and adapt to new technologies to stay current with 
        industry trends and best practices.
      </motion.p>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={category.title}
            category={category}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");