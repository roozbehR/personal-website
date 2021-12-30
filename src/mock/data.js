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
  paragraphOne:
    'I am a passionate fourth year student studying computer science at the University of Toronto.',
  paragraphTwo:
    'I am fascinated by the power of software technology and how this power can be harnessed to solve complex problems efficiently and effectively. When I read about “Deep Blue”, the super computer developed by IBM that has beaten the world’s greatest chess grand masters, I was amazed and noticed the countless applications that could use the power of software technology. Many years after, I had the chance to work with a team of developers on a project. In this amamzing experince I applied differnt parts of computer science and software engineering such as design patterns and SOLID principles, all the way to data structures and alogrithms. It was at this time that I understood this is what I am passionate about and what I truly enjoy to do.',
  paragraphThree:
    'I am highly motivated to constantly learn and grow, as well as always doing my best work to build high quality software applications and spend most of my free time learning, problem-solving, and of course coding!',
  resume: 'https://drive.google.com/file/d/1DkpIAiui18mY4dDau-unycWXeIrSti_y/view?usp=sharing', // if no resume, the button will not show up
};

// EXPERINCES DATA
export const experienceData = [
  {
    id: nanoid(),
    img: 'bankofmontreal.jpg',
    title: 'Bank of Montreal',
    info:
      "For my second co-op workterm/internship I joined the Bank of Montreal as a software engineer. As part of the ELT development team, I supported variety of other teams by providing them with vital and meaningful data after normalizing them and converting them to reusable files. More importantly, I contributed to release of new version of the team' large-scale application by enhancing, expanding, and performing tests to the backend codebase. Working at BMO was a truly amazing experience and a remarkable journey that I will remember as I am moving forward in my career.",
    info2: 'Java | SQL | Git | Putty | WinSCP | Gitbash | DBeaver | Jira',
    url: 'https://www.bmo.com/main/about-bmo/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'thebridge.jpg',
    title: 'The BRIDGE at University of Toronto',
    info:
      "For my first co-op workterm/internship I was a volunteer software engineer at the Bridge located at the University of Toronto. The BRIDGE is part of the University of Toronto where business, research, and inovation converge. I worked on a large-scale web application, called Find Dining, for the city of Scarborough. Find Dining helps restuarant owners, at Scarborough, to promote  their restuarants during the pandemic. I quickly learnt and developed 10+ angular components, participated in database design, and desinged and implemented an entire feature's UI\\UX based on the product manager and stakeholders' feebacks.",
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
    url: 'https://moviebook309.herokuapp.com/',
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
  {
    id: nanoid(),
    img: 'PopQuiz.jpg',
    title: 'PopQuiz',
    info:
      'An open-source JavaScript library which can be used to build cognitive games and online quizzes efficiently and effectively. Use Google Chrome To View The Project!',
    info2: 'JavaScipt | CSS | HTML',
    url: 'https://pop-quiz-js.herokuapp.com/',
    repo: 'https://github.com/roozbehR/js-library-yadolla6', // if no repo, the button will not show up
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
