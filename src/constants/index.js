import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  python,
  docker,
  fastapi,
  spend,
  heart,
  agri,
  career,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI Agents Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "python",
    icon: python,
    },
    {
        name: "fastapi",
        icon:fastapi
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Freelance",
    icon: web,
    iconBg: "#383E56",
    date: "March 2024 - April 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Personal Projects",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "AI/ML Enthusiast",
    company_name: "Self-Learning",
    icon: creator,
    iconBg: "#383E56",
    date: "2022 - Present",
    points: [
      "Exploring machine learning algorithms and their practical applications.",
      "Building predictive models for healthcare and agriculture domains.",
      "Implementing computer vision solutions for real-world problems.",
      "Staying updated with latest AI/ML trends and technologies.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Tharun proved me wrong.",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Tharun does.",
    
  },
  {
    testimonial:
      "Tharun had implemented a complex backend logic to optimize the performance.",
    
  },
];

const projects = [
  {
    name: "Career Navigator - Find your Ideal career path",
    description:
      "Explore the career opportunites and future scope of your dream jobs based on the skills and technologies you are interested in.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: career,
    source_code_link: "https://github.com/tharun067",
  },
  {
    name: "AORTA ORACLE",
    description:
      "Keep your heart safe with early prediction of heart diseases for a healthy and happy life.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: heart,
    source_code_link: "https://github.com/tharun067",
    },
  {
    name: "Agrimitra",
    description:
      "A Farmer friendly application that predicts leaf diseases and suggest appropriate remedies to get rid of those.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: agri,
    source_code_link: "https://github.com/tharun067",
  },
  {
    name: "SpendWise-Personal Finance Tracker",
    description:
      "A smart tracker application to ledger, seggregate and analyse your spending habits.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: spend,
    source_code_link: "https://github.com/tharun067",
  },
];

export { services, technologies, experiences, testimonials, projects };
