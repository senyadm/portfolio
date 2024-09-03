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
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  aeternum,
  autoheaven,
  otrar,
  threejs,
  ruslan,
  ais,
  bogdan
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React | Next.js Developer",
    icon: mobile,
  },
  {
    title: "Project Manager",
    icon: backend,
  },
  {
    title: "Web-3 Creator",
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
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Bachelor Degree",
    company_name: "Astana IT University",
    icon: starbucks,
    iconBg: "#fff",
    date: "Sep 2021 - Jul 2024",
    points: [
      "Mastering the basics of frontend development, working on HTML5, CSS3, and Javascript assignments.",
      "Basic study of SQL and NoSQL, Database Management Systems.",
      "In-depth study of React.js, Next.js, Tailwind and MERN Stack, the primary study of Three.js, Node.js, Express.js.",
      "Participating in student sports programming events, maintaining a vibrant and productive student life.",
    ],
  },
  {
    title: "First Hackathon: 'Hackathon Blockchain Day' (2nd place)",
    company_name: "JAS Ventures Limited",
    icon: tesla,
    iconBg: "#fff",
    date: "June 17 '22 - June 20 '22",
    points: [
      "In a team of 4 coders called 'Aday Labs', my task was to write a landing site as quickly as possible.",
      "48 hours were allocated for the development of the project, where I learned how to quickly and efficiently create a website based on Figma design.",
      "Participating in code reviews and providing constructive feedback to other developers and hackathon judjes.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Blockchain University - Nimbl",
    icon: shopify,
    iconBg: "#000",
    date: "Jan 2023 - Mar 2023",
    points: [
      "Developing and maintaining web applications using React.js, Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design using Figma and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers using Trello, Teams, etc.",
    ],
  },
  {
    title: "Frontend Developer | Project Manager",
    company_name: "Booster Auto S.R.O - AutoHeaven",
    icon: meta,
    iconBg: "#F5F5F5",
    date: "Aug 2023 - Jul 2024",
    points: [
      "Experience in creating, supporting and maintaining a project.",
      "Tracking, issuing and completing tasks via trello.",
      "Development of a site with a heavy construction in a team at Next.js.",
      "Supporting the (psychological and technical) team and working in a team to accurately complete tasks efficiently and on time was part of my responsibilities as a project manager",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Arsenis's skills and ability to create websites impressed everyone, especially his diploma project which included a lot of technologies as WEB-3, Clerk, etc.",
    name: "Ruslan Omirgaliyev",
    designation: "Senior-Lecturer",
    company: "Astana IT University",
    image: ruslan,
  },
  {
    testimonial:
      "After extensive experience with the development team, Arsenis distinguished himself by the ability to adjust to goals and communicate correctly with people at work.",
    name: "Aisultan Kaipiyev",
    designation: "Student",
    company: "Nazarbayev University",
    image: ais,
  },
  {
    testimonial:
      "I sincerely thank Arsenis for the opportunity to write code quickly and efficiently, as well as his skills in project management and successful experience working with programmers helped us!",
    name: "Bogdan Strelkovsky",
    designation: "CEO",
    company: "auto-heaven.com",
    image: bogdan,
  },
];

const projects = [
  {
    name: "Aeternum web",
    description:
      "Web-based platform where you can log-in as a student or teacher, learn or create your own courses and get SBT diploma token to your WEB3 wallet as a certified and tokenized document.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "web-3",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: aeternum,
    source_code_link: "https://aeternum-web-lms.vercel.app/",
  },
  {
    name: "AutoHeaven",
    description:
      "A web platform where you can sell your car or find a car on an online platform, the market is designed for the Czech Republic and Poland. The work was done in a team of 4 people.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "cars",
        color: "pink-text-gradient",
      },
    ],
    image: autoheaven,
    source_code_link: "https://auto-heaven.com/en/",
  },
  {
    name: "Otrar",
    description:
      "A platform or marketplace for new OTC tokens (otrar coin), the website was created in 24 hours for the Jas Venture Hackathon. There were 2 frontend developers working on the project.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: otrar,
    source_code_link: "https://github.com/senyadm/",
  },
];

export { services, technologies, experiences, testimonials, projects };
