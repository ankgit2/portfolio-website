import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Ankit Yadav",
  initials: "AY",
  url: "https://kashifalirajper.vercel.app/",
  location: "Maruti Vihar, Gurugram, Haryana",
  locationLink: "https://www.google.com/maps/place/Gurugram",
  description:
    "Aspiring Software Developer | Python, DSA",
  summary: `Hello, नमस्ते, hola, bonjour, olá & hallo! 👋 
  
  I'm an aspiring Python developer into DSA & problem-solving. 
  
  I enjoy breaking big problems into smaller ones. Still learning, still building, still occasionally breaking everything.

  Currently looking for opportunities to learn, build & grow.

  while (not_success):
  
  keep_trying()`,
  avatarUrl: "/me.jpg", 
  homework:
     [
  {
    title: "odo",
    description: "A bike route planning app that adapts to your needs and preferences. Generate routes with just a few clicks."
  },
  {
    title: "Power Flow Card Plus",
    description: "A power distribution card inspired by the official Energy Distribution card for Home Assistant."
  },
  {
    title: "survy",
    description: "An advanced survey app that allows you to create and share surveys with your friends."
  },
  {
    title: "wattguard",
    description: "A mobile app that allows you to monitor your energy consumption and identify potential inefficiencies."
  }
],
  skills: [
    "React.js",
    "Next.js",
    "Vue.js",
    "Nuxt.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "React Native",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "Firebase",
    "MongoDB",
    "MySQL",
    "SQL",
    "OpenAI",
    "Gemini",
    "Prompt Engineering",
    "CI/CD",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" },
           { href: "/about", icon: Icons.user, label: "About" },
           { href: "/contact", icon: Icons.send, label: "Contact" }
            
  ],

  contact: {
    email: "ankprof21@gmail.com",
    tel: "+91 7275856752",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ankgit2",
        icon: Icons.github,
        navbar: false,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yank21/",
        icon: Icons.linkedin,
        navbar: false,
      },
      Portfolio: {
        name: "Portfolio",
        url: "https://kashifalirajper.vercel.app/",
        icon: Icons.globe,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:ankprof21@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Elevatech Solutions",
      href: "https://elevatechsol.com/",
      badges: [],
      location: "Karachi, Sindh, Pakistan",
      title: "Full Stack Developer (Team Lead)",
      logoUrl: "/elevatech.png",
      start: "July 2025",
      end: "Present",
      description:
        "Leading end-to-end development of scalable web and mobile applications using React.js, Next.js, React Native (iOS & Android), and Node.js. Architecting full-stack systems with REST APIs, backend services, and database design across MongoDB, Firebase, and SQL. Managing app lifecycle and deployments to Apple App Store and Google Play Store, while integrating AI chatbots and voice agents using OpenAI and Gemini APIs. Driving architecture decisions, CI/CD workflows, and team mentorship to deliver high-impact SaaS features.",
    },
    {
      company: "Mercor Intelligence",
      href: "https://mercor.com/",
      badges: [],
      location: "Remote (Contract)",
      title: "Web Development & Design Expert",
      logoUrl: "/mercor.jpeg",
      start: "March 2025",
      end: "June 2025",
      description:
        "Trained and fine-tuned LLMs for front-end and full-stack development tasks. Built prompt pipelines to improve React, Vue, and Next.js code generation quality, evaluated outputs for correctness and production relevance, and created reference implementations for model validation. Worked closely with AI researchers to improve context understanding in Tailwind CSS, Node.js, and TypeScript workflows.",
    },
    {
      company: "Sohomax (Forsit)",
      href: "https://www.sohomax.co/",
      badges: [],
      location: "South Korea · Remote",
      title: "Frontend Developer",
      logoUrl: "/sohomax.png",
      start: "October 2023",
      end: "January 2025",
      description:
        "Developed responsive, user-friendly front-end components with React.js, react-hook-form, yup resolver, react-query, and Tailwind CSS. Built features for Compass using Vue Nuxt to track sales across Amazon, Qoo10, Walmart, and Shopify. Delivered API integrations, web scraping tooling with Node.js and Puppeteer, and performance-focused UI improvements while supporting collaborative engineering workflows on GitHub and Slack.",
    },
    {
      company: "Say Eagle",
      badges: [],
      href: "https://sayeagle.com/",
      location: "Karachi, Sindh, Pakistan",
      title: "Full Stack Developer",
      logoUrl: "/sayeagle.png",
      start: "January 2023",
      end: "November 2023",
      description:
        "Built SayEagle, a property management platform with role-based portals for managers, admins, tenants, and vendors. Led front-end delivery with React.js and backend services with Node.js + Firebase Functions. Managed real-time data using Firestore, secure authentication, and serverless APIs. Collaborated with cross-functional teams and mentored junior developers to maintain high-quality delivery standards.",
    },
    {
      company: "Futurealiti (Appsnation)",
      href: "https://appsnation.co/",
      badges: [],
      location: "Karachi, Sindh, Pakistan",
      title: "Full Stack Developer",
      logoUrl: "/appsnation.png",
      start: "April 2021",
      end: "December 2022",
      description:
        "Delivered large-scale products including task management and employee monitoring systems. Contributed to CNBC as a frontend team member and helped design scalable client/server architecture, database workflows, and responsive application features. Regularly handled debugging, upgrades, and performance optimization across projects.",
    },
  ],
  education: [
    {
      school: "Ankit Yadav",
      href: "",
      degree: "Aspiring Software Developer | Python, DSA",
      logoUrl: "/smiu.png",
      start: "",
      end: "",
    }
  ],
  
  projects: [
    {
      title: "Easy Travel Planner",
      href: "https://easy-travel-planner.vercel.app/",
      dates: "Feb 2025",
      active: true,
      description:
        "Easy Travel Planner is an AI-powered trip planning tool that helps users find budget-friendly hotels and optimal visiting times for attractions using real-time insights. Built with cutting-edge AI, it simplifies travel planning without the need for manual research.",
      technologies: [
        "React",
        "Gemini API",
        "Firebase",
        "Google Auth",
        "Tailwind CSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://easy-travel-planner.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Kashifalirajper/easy-travel-planner",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/etp.png",
      video: "",
    },
    {
      title: "SayEagle",
      href: "https://sayeagle.com/",
      dates: "Jan 2023 - Nov 2023",
      active: true,
      description: `SayEagle is a comprehensive property management platform that streamlines operations for managers, admins, tenants, and vendors. It offers real-time data management, secure authentication, and an intuitive user experience. 
- **Email:** kashif.zzy@gmail.com  
- **Password:** kashif123  `,
      technologies: [
        "React",
        "Node.js",
        "Firebase",
        "Cloud Firestore",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://sayeagle.web.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/sayEagle-web.png",
      video: "",
    },
    {
      title: "CNBC",
      href: "https://www.cnbc.com",
      dates: "April 2021 - September 2021",
      active: true,
      description:
        "Contributed to the front-end development of CNBC's website using React, enhancing user experience, performance, and responsiveness with modern UI components.",
      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "REST APIs",
        "Redux",
        "Webpack",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.cnbc.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/cnbc.png",
      video: "",
    },
    {
      title: "Revaiv",
      href: "https://revaiv.vercel.app/",
      dates: "January 2025",
      active: true,
      description:
        "RevAiv is a health management app that helps users track and improve hormonal symptoms and chronic conditions like PCOS, Thyroid, and Weight Gain with a holistic approach.",
      technologies: [
        "React.js",
        "JavaScript",
        "Firebase",
        "Google Auth",
        "Tailwind CSS",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://revaiv.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Kashifalirajper/Revaiv-FE",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/rev.png",
      video: "",
    },
  ],
} as const;
