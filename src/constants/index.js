import {
  html,
  css,
  js,
  ts,
  tailwind,
  bootstrap,
  chartjs,
  ngx,
  react,
  emailjs,
  angular,
  csharp,
  dotnet,
  python,
  java,
  jee,
  springboot,
  mysql,
  vscode,
  eclipse,
  github,
  git,
  slack,
  trello,
  intellij,
  postman,
  visualstudio,
  sqlserver,
  talend,
  ef,
  django,
  wordpress,
  elementor,
  sqlite,
  php,
  google,
  yoast
} from "../assets";
import React from "react";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },

  {
    id: "experiences",
    title: "Experiences",
  },

  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const aboutData = [
  {
    title: "Frontend Development",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    description:
      "I design and build interactive, responsive user interfaces that provide an exceptional user experience, transforming ideas into visually appealing web applications.",
  },
  {
    title: "Problem Solving",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-shield-check w-6 h-6"
        viewBox="0 0 16 16"
      >
        <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
        <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0" />
      </svg>
    ),
    description:
      "I tackle challenges methodically, seeking efficient and innovative solutions. I thrive on optimizing performance and resolving complex issues.",
  },
  {
    title: "Best Practices",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v6m-4-3h8M4 4h16M4 20h16"
        />
      </svg>
    ),
    description:
      "I follow industry best practices to ensure code quality, maintainability, and security. My focus on continuous improvement and clean architecture promotes effective collaboration.",
  },
  {
    title: "Backend Development",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        />
      </svg>
    ),
    description:
      "I create reliable, scalable backend systems that integrate APIs and manage databases efficiently, optimizing server-side solutions for enhanced application performance.",
  },
];

export const experiences = [
  {
    date: "Oct 2021 - Jul 2024",
    title: "SUP MTI - École Supérieure de Management, Télécommunications et d'Informatique Oujda, Maroc",
    text: "Master's Degree : 3 years after 2 years of preparatory studies in Computer Systems Engineering with focus on the following technologies:",
    technologies: [
      "Programming and Development : Python, Object-Oriented Programming in Java, HTML/CSS, JS, Java Swing, Java Mobile Development, Java JEE, Java Spring, C#, .NET ",
      "Data Management and Analysis : Advanced Databases, Data Analysis, Big Data",
      "Software Engineering and Methodologies : Agile Methodologies (Scrum), Business Plan and Change Management",
      "Networking and Security : Linux, Networking, Cryptography",
      "Web Technologies and Frameworks : XML/UML, Angular, Ionic, Firebase",
      "Machine Learning and Signal Processing : Machine Learning, Signal Processing, Business Intelligence, DevOps"
    ],
  },
  {
    date: "Oct 2019 - Jul 2021",
    title: "SUP MTI - École Supérieure de Management, Télécommunications et d'Informatique Oujda, Maroc",
    text: "Preparatory Studies : Common Preparatory Program for Engineering Cycle. Studied the following technologies:",
    technologies: [
      "Mathematics and Statistics : Mathematical Analysis, Algebra, Advanced Mathematics, Probability and Statistics",
      "Programming Fundamentals : C Programming, Advanced C Programming, C++ Programming",
      "Data Structures and Algorithms : Algorithms, Data Structures",
      "Computer Architecture : Binary Systems, Memory Storage of Objects, Advanced Computer Architecture",
      "Web Development : Basic HTML/CSS, JavaScript, PHP",
      "Databases and Information Systems : MySQL, MySQL Queries, MCD, MLD",
    ],
  },
  {
    date: "Jun 2025 - Jul 2025",
    title: "Coding Carpincho Project – AI Code Agents Evaluation - Outlier (Freelance)",
    text: "Comprehensive evaluation project comparing AI code agents' performance in real-world development environments. Led systematic assessment of Claude & Grok AI agents within Cursor IDE, developing rigorous evaluation methodologies and creating definitive solutions.",
    technologies: [
      "Evaluated and compared Claude & Grok AI code agents in the Cursor environment.",
      "Designed prompts to reveal model limitations within real-world code repositories.",
      "Built evaluation rubrics (High-Level Intent, Low-Level Key Facts, Negative Rubrics) to formally measure model responses.",
      "Produced golden patches (final solutions) by correcting and optimizing repository code.",
      "Created structured analyses and feedback to improve AI reliability for coding workflows.",
    ],
  },
  {
    date: "May 2025 - Jun 2025",
    title: "AndromedaUI Project – Reviewer (Prompt Evaluator) - Outlier (Freelance)",
    text: "Quality assurance and evaluation role focused on assessing contributions from other team members. Applied strict standards for quality, clarity, and technical relevance to support continuous improvement of prompts and AI model training processes.",
    technologies: [
      "Assessed work from other contributors by comparing prompts, generated outputs, and overall quality.",
      "Delivered detailed written feedback to support continuous improvement of prompts and AI model training.",
      "Applied strict standards of clarity, quality, and technical relevance.",
      "Evaluated proposed solutions for accuracy and implementation feasibility.",
      "Contributed to AI model training improvement through systematic review processes.",
    ],
  },
  {
    date: "Apr 2025 - May 2025",
    title: "AndromedaUI Project – Attempter (Prompt Engineer & Developer) - Outlier (Freelance)",
    text: "AI-powered web development role focused on crafting complex technical prompts to interact with advanced language models. Analyzed model outputs to assess relevance, coherence, and accuracy while proposing improvements and rewriting prompts to enhance performance.",
    technologies: [
      "Crafted complex technical prompts to interact with advanced AI models (LLMs).",
      "Analyzed model outputs to assess relevance, coherence, and accuracy.",
      "Proposed improvements and rewrote prompts or returned code to enhance model performance.",
      "Worked on technically oriented projects involving TypeScript, React, Next.js, and Tailwind CSS.",
      "Built and optimized features using modern web development frameworks.",
    ],
  },
  {
    date: "Dec 2024 - Present",
    title: "Web Developer (Freelance)",
    text: "Independent web developer based in Oujda, Morocco, specializing in custom website creation for French clients. Expertise in end-to-end web project management, from initial concept to final deployment, including SEO optimization and performance compliance.",
    technologies: [
      "Designed and developed websites using WordPress and Elementor for French clients.",
      "Managed the full development cycle: domain name acquisition, hosting setup, configuration, UI/UXdesign, SEO optimization, and Google indexing.",
      "Handled communication and project management independently, maintaining direct contact with clients.",
      "Ensured site performance, accessibility, and visibility on search engines.",
    ],
  },
  {
    date: "Sept 2024 - Nov 2024",
    title: "Professional Internship at Seomaniak Oujda",
    text: "As a Full Stack Developer, I led the complete development of a platform designed to connect entrepreneurs with investors, facilitating project funding and collaboration. The platform, built with a .NET backend and Angular frontend, is tailored to provide flexibility and transparency for both parties.",
    technologies: [
      "Custom Financing Options : Developed a system where Entrepreneurs can submit projects with flexible financing models like Murabaha, Musharaka, or others. This approach ensures control for entrepreneurs while meeting investor requirements. It provides a tailored solution for various funding needs.",
      "Category-Based Project Classification : Organized projects by their Economic, Social, impact... This allows Investors to make decisions based on their values and interests. The classification ensures alignment with their investment goals.",
      "Real-Time Messaging : Implemented a SignalR-based chat system for live communication between Entrepreneurs and Investors. This feature enhances collaboration, transparency and allows for seamless and efficient interaction throughout the investment process."
    ],
  },
  {
    date: "Mar 2024 - Sept 2024",
    title: "Final Year Project at Seomaniak Oujda",
    text: "As a Full Stack Developer intern, I was responsible for both front-end and back-end development, focusing on creating and maintaining web applications. This role involved collaborating with cross-functional teams to enhance application functionality and improve user experience.",
    technologies: [
        "Redesign and Maintenance of a Web Application : Led the redesign and maintenance of a web application dedicated to financial transactions, developed using .NET and Angular.",
        "Feature Addition : Implemented new features to enhance the application’s capabilities and meet user requirements.",
        "User Experience Improvement : Optimized application performance to enhance user experience and ensure smooth interactions."
    ],
  },
  {
    date: "Aug 2023 - Oct 2023",
    title: "Internship at Nismatech Oujda",
    text: "As a Full Stack Developer intern, I was tasked with designing and developing a web application. The role involved full-stack responsibilities, focusing on both back-end logic and front-end user interfaces to deliver an intuitive and effective solution.",
    technologies: [
      "Design and Development of a Medical Recommendation Web Application : Developed a web application using Python and Django that allows users to find and recommend doctors based on selected symptoms and city.",
      "User-Centered Search Functionality : Implemented a feature that generates relevant doctors for users based on their input criteria.",
      "Doctor Registration System : Enabled doctors to register on the platform by submitting their detailed contact information, allowing them to be listed in search results."
    ],
  },
  {
    date: "Feb 2023 - June 2023",
    title: "Final Year Project at SupMTI Oujda",
    text: "As part of my final year project, I developed a web application focused on assisting users with programming tasks. The project covered full-stack development, emphasizing functionality and automation.",
    technologies: [
      "Development of a Programming Q&A Web Application : Built a web platform using Python and Django that allows users to ask programming-related questions and provides automatic code generation and correction.",
      "User History Tracking : Implemented a personal database to record user activity and maintain an accessible history of their interactions with the platform.",
      "Multi-Language Integration : Integrated multiple programming languages, offering users a wide range of solutions tailored to their coding needs."
    ],
  },
  {
    date: "Feb 2022 - June 2022",
    title: "Academic Project at SupMTI Oujda",
    text: "In this academic project, I was responsible for designing and developing a fully functional travel agency website, focusing on both front-end design and back-end logic.",
    technologies: [
      "Design and Development of a Travel Agency Website : Created a website using HTML/CSS, JavaScript, and PHP that allows users to search for available flights based on the selected date.",
      "Flight Availability Feature : Implemented a dynamic feature to display available flights in response to user input.",
      "Responsive Mobile Design : Applied responsive web design principles to ensure a seamless and intuitive user experience across mobile devices."
    ],
  },
  {
    date: "Sep 2022",
    title: "Certification HackerRank - SQL (Intermediate)",
    text: "This certification demonstrates proficiency in SQL, including complex queries, data manipulation, and database management. It validates my ability to work with relational databases, write efficient queries, and solve real-world database problems with intermediate-level expertise.",
    linkText: "View Certificate",
    linkUrl:
      "https://drive.google.com/file/d/1BLerz1Ish4NENuYgSVZFmv0QsUGN9gG1/view?usp=drive_link",
  },
  {
    date: "Apr 2022",
    title: "Certification Udemy - JavaScript Fundamentals : A Course For Absolute Beginners",
    text: "This certification covers the foundational concepts of JavaScript, including variables, functions, loops, and data types. It demonstrates my understanding of core programming concepts in JavaScript, equipping me to build interactive web applications from scratch.",
    linkText: "View Certificate",
    linkUrl:
      "https://drive.google.com/file/d/1WfbGRXNInec8yrxvebTDp6LRly7f9YnM/view?usp=drive_link",
  },
  {
    date: "Mar 2022",
    title: "Certification Pirple - HTML5 and CSS3",
    text: "This certification covers fundamental concepts of HTML5 and CSS3, including page structure, styling elements, and using selectors. It demonstrates my ability to create well-structured and visually appealing web pages by applying modern web standards.",
    linkText: "View Certificate",
    linkUrl:
      "https://drive.google.com/file/d/1jsGGfxXOjupVjkrrYYPU_Mi96v5i2pq8/view?usp=drive_link",
  },
  {
    date: "Nov 2021",
    title: "Certification Udemy - Build A Search Engine With Python : Computer Science & Python",
    text: "This certification explores the principles of computer science and Python programming through the development of a functional search engine. It showcases my ability to apply algorithms, data structures, and web scraping techniques to build efficient search functionality.",
    linkText: "View Certificate",
    linkUrl:
      "https://drive.google.com/file/d/1lZt-GOD5xFbRiaCwdiQqshVl_Z2XpiWT/view?usp=drive_link",
  },
];

export const skills = [
  { icon: html, tooltip: "HTML" },
  { icon: css, tooltip: "CSS" },
  { icon: js, tooltip: "JavaScript" },
  { icon: ts, tooltip: "TypeScript" },
  { icon: tailwind, tooltip: "Tailwind CSS" },
  { icon: bootstrap, tooltip: "Bootstrap" },
  { icon: chartjs, tooltip: "Chart JS" },
  { icon: ngx, tooltip: "ngx-Translate" },
  { icon: react, tooltip: "React Js" },
  { icon: emailjs, tooltip: "EmailJS" },
  { icon: angular, tooltip: "Angular" },
  { icon: csharp, tooltip: "C#" },
  { icon: dotnet, tooltip: ".NET" },
  { icon: ef, tooltip: "Entity Framework" },
  { icon: python, tooltip: "Python" },
  { icon: django, tooltip: "Django" },
  { icon: java, tooltip: "Java" },
  { icon: jee, tooltip: "JEE" },
  { icon: springboot, tooltip: "Spring Boot" },
  { icon: php, tooltip: "PHP" },
  { icon: mysql, tooltip: "MySQL" },
  { icon: sqlserver, tooltip: "SQL Server" },
  { icon: sqlite, tooltip: "SQLite" },
  { icon: wordpress, tooltip: "Wordpress" },
  { icon: elementor, tooltip: "Elementor" },
  { icon: google, tooltip: "Google Search Console" },
  { icon: yoast, tooltip: "Yoast SEO" }
];

export const tools = [
  { icon: intellij, tooltip: "IntelliJ" },
  { icon: vscode, tooltip: "Vs Code" },
  { icon: visualstudio, tooltip: "Visual Studio" },
  { icon: postman, tooltip: "Postman" },
  { icon: eclipse, tooltip: "Eclipse IDE" },
  { icon: talend, tooltip: "Talend" },
  { icon: github, tooltip: "GitHub" },
  { icon: git, tooltip: "Git" },
  { icon: slack, tooltip: "Slack" },
  { icon: trello, tooltip: "Trello" }
];

export const projects = [
  {
    name: "Sabatier Électricien d’Urgence",
    duration: "1 month",
    content:
      "This project is a 24/7 emergency electrical services website for a certified team in Toulouse. Built with WordPress and Elementor, it highlights rapid response services, installation modernization, and professional electrical solutions for residential and commercial clients. The project involved close collaboration with the client to define services, content, and design, ensuring a high-quality user experience. Domain registration, hosting configuration, Yoast SEO optimization, and Google indexing were implemented to ensure strong online visibility. The site is responsive, accessible, and designed for fast, easy communication with clients in need of urgent electrical services",
    img: "sabatier.png",
    technologies: [23, 24, 25, 26],
    href: "https://electricien-urgence-toulouse.fr/",
  },
  {
    name: "Plombiers Toulouse",
    duration: "1 month",
    content:
      "This website showcases professional plumbing and heating services in the Toulouse region. Using WordPress and Elementor, the platform provides clear information on installations, repairs, and emergency services. The project included defining project requirements with the client, creating service content, and designing a responsive, visually appealing layout. Full domain registration, hosting setup, SEO implementation via Yoast, and Google indexing were carried out to maximize search engine visibility. The final product is a functional, user-friendly site that enhances the company’s online presence.",
    img: "plombiers.png",
    technologies: [23, 24, 25, 26],
    href: "https://plombierstoulouse.com/",
  },
  {
    name: "Occiplomb",
    duration: "1 month",
    content:
      "This project is a plumbing and heating services website designed for a Toulouse-based company with 15 years of experience. Developed using WordPress and Elementor, the site presents detailed services including installations, repairs, maintenance, unclogging, and emergency interventions. The project involved continuous collaboration with the client to refine content and design for optimal user experience. Domain acquisition, hosting configuration, SEO optimization with Yoast, and Google indexing were performed to ensure high visibility in search engines. The result is a fast, mobile-friendly platform that efficiently connects clients with the company’s services.",
    img: "occiplomb.png",
    technologies: [23, 24, 25, 26],
    href: "https://occiplomb.fr/",
  },
  {
    name: "Serrurier Chrono 31",
    duration: "1 month",
    content:
      "This project involved refactoring an existing locksmith service website for a local Toulouse-based company. Built with WordPress and Elementor, the platform highlights services such as lock changes, installations, armored doors, and custom security solutions. The project included full collaboration with the client to redefine content, improve design, and enhance usability for maximum satisfaction. Additionally, domain management, hosting configuration, SEO optimization using Yoast, Google indexing, and search engine visibility were handled. The resulting website is fully responsive, user-friendly, and optimized for quick access to emergency contact options.",
    img: "serrurier.png",
    technologies: [23, 24, 25, 26],
    href: "https://www.serrurierchrono31.fr/",
  },
  {
    name: "SRMP - Système de Recommandation des Médecins Personnalisés",
    duration: "2 months",
    content:
      "SRMP is a medical recommendation web application designed to help users find and recommend doctors based on specific symptoms and locations. Developed using Python and Django, the platform features a user-centered search functionality that generates relevant doctor recommendations based on user input. Additionally, a doctor registration system allows healthcare professionals to register on the platform by submitting their contact details, ensuring they can be easily found in search results. This comprehensive solution emphasizes both front-end usability and back-end efficiency to deliver an effective healthcare resource.",
    img: "srmp.png",
    technologies: [14, 15, 0, 1, 2, 22],
    href: "https://github.com/mohammedlrj/SRMP",
  },
  {
    name: "CFAI - Code Fast with Artificial Intelligence",
    duration: "4 months",
    content:
      "This project is a comprehensive programming Q&A web application designed to assist users with their programming tasks. Built using Python and Django, the platform enables users to ask programming-related questions while offering automatic code generation and correction for enhanced functionality. A personal database is implemented to track user activity, ensuring that users have easy access to their interaction history. Additionally, the application supports multiple programming languages, providing a diverse range of solutions tailored to meet users' coding needs.",
    img: "cfai.jpg",
    technologies: [14, 15, 0, 1, 2, 22],
    href: "https://github.com/mohammedlrj/CFAI",
  },
  {
    name: "Portfolio - My Digital Showcase",
    duration: "1 month",
    content:
      "This project is a personal portfolio website built to showcase my full-stack development skills, education, projects and more. Developed using React.js for a dynamic user interface, Tailwind CSS for responsive and modern design, and EmailJS for seamless contact form integration, this portfolio highlights my expertise across various domains. The site includes sections for about me, experiences, skills, projects and a contact form, making it easy for potential employers and collaborators to explore my work and get in touch.",
    img: "portfolio.png",
    technologies: [8, 4, 9, 0, 1, 2],
    href: "https://github.com/mohammedlrj/portfolio",
  },
  {
    name: "Simple Web CRUD Application",
    duration: "1 month",
    content:
      "This project is a CRUD application designed to enable administrators to perform essential operations create, read, update, and delete on data. Developed using Spring Boot for the back end and React.js for the front end, the application provides a simple interface for managing data efficiently. This project allowed me to apply my foundational knowledge of Spring Boot while gaining hands-on experience with React.js, enhancing my understanding of web application architecture and the integration between front-end and back-end technologies.",
    img: "crud.png",
    technologies: [18, 16, 8, 0, 1, 2, 20],
    href: "https://github.com/mohammedlrj/CRUD-Spring-ReactJS",
  },
  {
    name: "WorldCoast - Travel Agency That Generates Available Flights",
    duration: "4 months",
    content:
      "WorldCoast is a comprehensive travel agency website designed to enhance the user experience in flight searching and booking. Featuring a dynamic flight availability tool, the site allows users to easily search for and view available flights based on their selected travel dates. With a focus on responsive design, WorldCoast ensures seamless access across all devices, providing travelers with an intuitive and efficient platform for their travel needs.",
    img: "worldcoast.png",
    technologies: [0, 1, 2, 19, 20],
    href: "https://github.com/mohammedlrj/TravelAgency",
  },
];

export const socialMedia = [
  {
    id: "github",
    icon: React.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        fill: "currentColor",
        className: "bi bi-github",
        viewBox: "0 0 16 16",
      },
      React.createElement("path", {
        d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8",
      })
    ),
    link: "https://github.com/mohammedlrj",
  },

  {
    id: "instagram",
    icon: React.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        fill: "currentColor",
        className: "bi bi-instagram",
        viewBox: "0 0 16 16",
      },
      React.createElement("path", {
        d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334",
      })
    ),
    link: "https://www.instagram.com/mohammed.larj",
  },
  {
    id: "linkedin",
    icon: React.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        fill: "currentColor",
        className: "bi bi-linkedin",
        viewBox: "0 0 16 16",
      },
      React.createElement("path", {
        d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z",
      })
    ),
    link: "https://www.linkedin.com/in/mohammed-laarej",
  },
];
