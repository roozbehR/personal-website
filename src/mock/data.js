import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Roozbeh Yadollahi', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Roozbeh',
  subtitle: 'and I am a Software Engineer!',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `As a fourth-year computer science student at the University of Toronto, I'm a software fanatic. From complex algorithms to designing high-quality software applications, I'm constantly exploring the power of technology to solve complex problems efficiently and effectively.`,
  paragraphTwo: `I've been known to spend my free time problem-solving, coding, and attempting to convince my friends that my passion for software engineering is not nerdy, but simply a deep appreciation for the beauty of logic and structure.`,
  paragraphThree: `As an experienced computer science professional, I relish a challenge and am deeply committed to ongoing learning and growth. I am motivated by the opportunity to take on complex problems and to continuously improve my skills and expertise. Whether I'm developing algorithms or refining my mastery of design patterns, I approach each task with a determination to deliver exceptional results. My dedication to excellence is a hallmark of my career in software engineering, and I am constantly striving to raise the bar and push the limits of what is possible.`,
  resume: 'https://drive.google.com/file/d/16dOgsI8s54uF4Z3Of07CwuZGvD1i3tjZ/view?usp=share_link', // if no resume, the button will not show up
};

// EXPERINCES DATA
export const experienceData = [
  {
    id: nanoid(),
    img: 'cod-mw2-activision.jpg',
    title: 'Activision',
    info: `As a Software Engineering Intern at Activision, I significantly contributed to the development of Call of Duty: Warzone Mobile's lucky draw service by crafting loot box algorithms and implementing service and data layer components. I led the creation of efficient REST APIs, including a high-capacity API, while adhering to best practices like pagination. To ensure system robustness, I used the pytest framework for functional, integration, and unit testing across service and data layers. On a lighter note, after my internship at Activision, I can't guarantee that my Call of Duty skills have improved, but my software engineering prowess has undoubtedly leveled up!`,
    info2:
      'Python | pytest | Docker | Kubernetes | SQL | Git | SQLAlchemy | Junkie | Vitess | Distributed Systems',
    url: 'https://www.activision.com/company/aboutus',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bankofmontreal.jpg',
    title: 'Bank of Montreal',
    info:
      "During my second co-op term, I had the opportunity to join Bank of Montreal as a Software Engineer. As a key member of the ELT development team, I honed my skills in data normalization and transformation, creating reusable files for cross-functional teams. My most notable contribution was the successful release of a new version of our team's large-scale application, where I played a crucial role in enhancing, expanding, and rigorously testing the backend codebase. The invaluable experience gained at BMO has enriched my professional journey and will continue to inform my future endeavors.",
    info2: 'Java | SQL | Git | Putty | WinSCP | Gitbash | DBeaver | Jira',
    url: 'https://www.bmo.com/main/about-bmo/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'thebridge.jpg',
    title: 'The BRIDGE @ University of Toronto',
    info: `During my inaugural co-op term, I volunteered as a Software Engineer at the Bridge, a University of Toronto hub for business, research, and innovation. I contributed to "Find Dining," a large-scale web application aimed at assisting Scarborough restaurant owners in promoting their establishments amid the pandemic. My skill set rapidly expanded as I developed over ten Angular components, collaborated on database design, and skillfully crafted UI/UX for an entire feature based on feedback from product managers and stakeholders.`,
    info2: 'TypeScript | Git | Angular | CSS | HTML | MongoDB | Agile | Jira',
    url: 'https://www.utsc.utoronto.ca/thebridge/welcome-bridge',
    repo: '', // if no repo, the button will not show up
  },
];

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'moviebook.jpg',
    title: 'MovieBook',
    info:
      'A social platform for movie lovers and critics to review movies, dive into discussions, find favourite movies, follow and interact with other users, get specific movies descriptions, and much more. Use Google Chrome To View The Website!',
    info2:
      'ReactJS | Express | MongoDB | NodeJS | Ant Design | Git | Herokou | JavaScript | CSS | HTML',
    url: '',
    repo: 'https://github.com/roozbehR/MovieBook', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sportcred.jpg',
    title: 'SportCred',
    info:
      'An MVP for SportCred, a platform for sport fans and analysts to share analysis and predictions.',
    info2: 'ReactJS | JavaScript | Express | Node | MongoDB | HTML | CSS | Git | Jira | Agile',
    url: '',
    repo: 'https://github.com/roozbehR/project-todo', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'JShell.jpg',
    title: 'JShell',
    info:
      'A Java file system management Unix shell interface which simulates functionalities of Bash Terminal and supports many commands such as making a directory, deleting a directory, tracing the file system, and much more.',
    info2:
      'Java | JUnit | OOP | SDLC | SOLID Design | Teamwork | Agile | Design Patterns | Algorithms | Data Structures',
    url: '',
    repo: 'https://github.com/roozbehR/JShell', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'roozbeh.yadollahi@mail.utoronto.ca',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/roozbeh-yadollahi/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/roozbehR',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
