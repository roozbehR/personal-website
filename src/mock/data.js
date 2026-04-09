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
  subtitle: 'I am a Software Engineer and aspiring AI/ML Researcher!',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `Roozbeh is a University of Toronto computer science graduate, motivated to build technology that bridges logic and magic to solve complex problems. He is a lifelong learner, driven by excellence. He received his bachelor's degree with High Distinction in computer science. Shortly after his graduation, Roozbeh joined Amazon Web Services as a Software Engineer, working on cutting-edge, distributed, and durable in-memory databases.`,
  paragraphTwo: `As a naturally curious, innovative, and lifelong learner, Roozbeh conducted research for Professor Anya Tafliovich at the University of Toronto. He also joined Professor Brian Harrington’s research group. This complements the engineering skills that he has built over time through internships at the Bank of Montreal, Microsoft, and most recently Amazon Web Services.`,
  paragraphThree: `A few months after Roozbeh joined Amazon, he read the paper "Attention Is All You Need," which revolutionized AI and large language models. This inspired Roozbeh to connect his engineering skills with research in the realm of AI and ML. Motivated by this vision, he made the deliberate decision to leave his role at Amazon Web Services to pursue this path and focus on contributing to the frontier of AI and machine learning.`,
  paragraphFour: `Roozbeh enjoys wrestling with open-ended, ambiguous, or difficult problems in the realm of computer science and finds solving them very rewarding. Motivated by a discussion he had with Professor Vassos Hadzilacos of the University of Toronto, he firmly believes that research should be pursued for the love of it. He often cites the quote and deeply believes in:`,
  paragraphFive: `"Any sufficiently advanced technology is indistinguishable from magic." — Arthur C. Clark`,
  resume: 'https://drive.google.com/file/d/1Mf980Zk5wmRONdZxRsyY1Evb6-zK_q02/view?usp=sharing', // if no resume, the button will not show up
};

// EXPERINCES DATA
export const experienceData = [
    {
    id: nanoid(),
    img: 'AWS.jpg',
    title: 'Amazon Web Services',
    info: `I was a Software Engineer on the AWS Memory Databases team, responsible for designing, implementing, and maintaining cutting edge distributed in-memory database systems (Redis/Valkey) that power highly available, enterprise-scale production workloads.`,
    info2:
      'Java | Python | Microservices | Distributed Systems | Durable In-Memory Databases | Cloud Platforms | Building Tools | Git',
    url: 'https://aws.amazon.com/about-aws/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Microsoft.jpg',
    title: 'Microsoft',
    info: `As a Software Engineer on the game services team at Microsoft, I was responsible for building distributed systems, more specifically Lucky Draw Service, powering the highly popular Activision titles such as Call of Duty: Warzone Mobile, including loot box algorithms, service/data layer components, and high-performance REST APIs.`,
    info2:
      'Python | REST APIs | Microservices | Distributed Systems | Data Structures and Algorithms | SQL | Git | Linting',
    url: 'https://www.microsoft.com/en-us/about',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'university-of-toronto-logo.jpg',
    title: 'Research Assistant ',
    info: `I was a Research Assistant at the University of Toronto, where I conducted research in computer science education under Professor Anya Tafliovich and as a member of Professor Brian Harrington’s research group, including investigating programming misconceptions and researching, designing, and prototyping learning platforms to support introductory programming education.`,
    info2:
      'Research Design | Literature Review | Experimental Design | Technical Writing | Academic Collaboration',
    url: 'https://www.utoronto.ca/about-u-of-t',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'BMO_Logo_1200x627.jpg',
    title: 'Bank of Montreal',
    info:
      "As a Software Engineer Intern at Bank of Montreal, I was responsible for contributing to the design and development of internal tools and automation solutions to improve operational efficiency and support enterprise-scale banking systems.",
    info2: 'Java | SQL | Git | Putty | WinSCP | Gitbash | DBeaver | Jira',
    url: 'https://www.bmo.com/main/about-bmo/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'university-of-toronto-logo.jpg',
    title: 'The BRIDGE at University of Toronto',
    info: `I was a Software Engineer at the BRIDGE (University of Toronto), where I contributed to the development of a large-scale web application ("Find Dining") by building Angular components, collaborating on database schema design, and implementing UI/UX features to support local restaurants during the COVID-19 pandemic.`,
    info2: 'TypeScript | Git | Angular | CSS | HTML | MongoDB | Agile | Jira',
    url: 'https://www.utsc.utoronto.ca/thebridge/welcome-bridge',
    repo: '', // if no repo, the button will not show up
  },
];

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'GPT.jpg',
    title: 'GPT-2 Engine',
    info:
      'Developing an ongoing project on transformer-based language models from first principles through the Alignment Research Engineer Accelerator (ARENA) program, including implementing GPT-2–style architectures, training models in PyTorch, and exploring techniques in interpretability and AI alignment.',
    info2:
      'PyTorch | Transformers | Neural Networks | Deep Learning | Backpropagation | Model Training | Tokenization | Attention Mechanisms | AI Alignment | Mechanistic Interpretability',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Neural_network.jpg',
    title: 'Deep Neural Network for Binary Classification',
    info:
      'Built and trained a deep neural network from scratch for binary classification tasks, including image-based classification problems such as determining whether an input image contains a cat or not.',
    info2:
      'Python | Neural Networks | Deep Learning | Backpropagation | Gradient Descent | Binary Classification | Model Training | NumPy',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
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
  email: 'roozbeh.yadollahi@alumni.utoronto.ca',
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
