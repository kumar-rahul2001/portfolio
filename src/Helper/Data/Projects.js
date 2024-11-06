import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
// repo
import repo1 from "../../Assets/Projects/repo1.jpeg";
import repo2 from "../../Assets/Projects/repo2.jpeg";
import repo3 from "../../Assets/Projects/repo3.jpeg";
import repo4 from "../../Assets/Projects/repo4.jpeg";
import repo5 from "../../Assets/Projects/repo5.jpeg";
import repo6 from "../../Assets/Projects/repo6.jpeg";
import repo7 from "../../Assets/Projects/repo7.jpeg";
import repo8 from "../../Assets/Projects/repo8.jpeg";
import repo9 from "../../Assets/Projects/repo9.jpeg";
import repo10 from "../../Assets/Projects/repo10.jpeg";
import repo11 from "../../Assets/Projects/repo11.jpeg";
import repo12 from "../../Assets/Projects/repo12.jpeg";
import repo13 from "../../Assets/Projects/repo13.jpeg";
import repo14 from "../../Assets/Projects/repo14.jpeg";
// emag
import emag1 from "../../Assets/Projects/emag1.png";
import emag2 from "../../Assets/Projects/emag2.png";
import emag3 from "../../Assets/Projects/emag3.png";
import emag4 from "../../Assets/Projects/emag4.png";
import emag5 from "../../Assets/Projects/emag5.png";
import emag6 from "../../Assets/Projects/emag6.png";
import emag7 from "../../Assets/Projects/emag7.png";
import emag8 from "../../Assets/Projects/emag8.png";
// natours
import Natours1 from "../../Assets/Projects/Natours1.png";
import Natours2 from "../../Assets/Projects/Natours2.png";
import Natours3 from "../../Assets/Projects/Natours3.png";
import Natours4 from "../../Assets/Projects/Natours4.png";
import Natours5 from "../../Assets/Projects/Natours5.png";
import Natours6 from "../../Assets/Projects/Natours6.png";
import Natours7 from "../../Assets/Projects/Natours7.png";
// promptopia
import promptopia1 from "../../Assets/Projects/promptopia1.png";
import promptopia2 from "../../Assets/Projects/promptopia2.png";
import promptopia3 from "../../Assets/Projects/promptopia3.png";
// acme
import acme1 from "../../Assets/Projects/acme1.png";
import acme2 from "../../Assets/Projects/acme2.png";
import acme3 from "../../Assets/Projects/acme3.png";
import acme4 from "../../Assets/Projects/acme4.png";
import acme5 from "../../Assets/Projects/acme5.png";
import acme6 from "../../Assets/Projects/acme6.png";
// textutils
import textutils1 from "../../Assets/Projects/textutils1.png";
import textutils2 from "../../Assets/Projects/textutils2.png";
import textutils3 from "../../Assets/Projects/textutils3.png";
// expensetracker
import expensetracker1 from "../../Assets/Projects/expensetracker1.png";
import expensetracker2 from "../../Assets/Projects/expensetracker2.png";

const Projects = [
  {
    imgPaths: [
      repo1,
      repo2,
      repo3,
      repo4,
      repo5,
      repo6,
      repo7,
      repo8,
      repo9,
      repo10,
      repo11,
      repo12,
      repo13,
      repo14,
    ],
    isBlog: false,
    title: "Repo App",
    description:
      "In this website you can upload the vehicle data and can track the status of it.You can also add agents, staffs and manage their roles and track location. This website is fully responsive and have Light Mode & Dark Mode functionality.",
    frontend: "ReactJS, Tailwind CSS, Reactstrap, ChartJS",
    backend: "NodeJS, ExpressJS",
    database: "MongoDB",
    otherTools: "Redux, React Calendar, Axios, Vercel",
    ghLink: "https://github.com/kumar-rahul2001/Repo-Agency",
    demoLink: "https://repo-agency-client.vercel.app/login",
  },
  {
    imgPaths: [emag1, emag2, emag3, emag4, emag5, emag6, emag7, emag8],
    isBlog: false,
    title: "E-Mag",
    description:
      "E-Mag is a website where you can read and download all the magazine. It consist of admin panel from where you can add, edit and delete the magazine, donors name and user with different roles. This website is fully responsive and have Light Mode & Dark Mode functionality.",
    frontend: "ReactJS, Bootstrap, CSS3",
    backend: "NodeJS, ExpressJS",
    database: "MongoDB",
    otherTools: "React pdf, Vercel",
    ghLink: "https://github.com/kumar-rahul2001/e-mag",
    demoLink: "https://magazine-frontend-omega.vercel.app/",
  },
  {
    imgPaths: [
      Natours1,
      Natours2,
      Natours3,
      Natours4,
      Natours5,
      Natours6,
      Natours7,
    ],
    isBlog: false,
    title: "Natours",
    description:
      "Natours is a tour booking app where user can signup and login to add a tour having different features to the cart. App is integrated with stripe payment system. Routes and pages are protected using different usrs roles like admin, tour-guide, instructor and user. Users can also add review and give ratings to the tours",
    frontend: "Pug, CSS3, JavaScript",
    backend: "NodeJS, ExpressJS",
    database: "MongoDB",
    otherTools: "axios, bcryptjs, jsonwebtoken, multer, nodemailer, morgan",
    ghLink: "https://github.com/kumar-rahul2001/natours",
    demoLink: "https://natourstour.vercel.app/",
  },
  {
    imgPaths: [promptopia1, promptopia2, promptopia3],
    isBlog: false,
    title: "Promptopia",
    description:
      "Promptopia is an open-source AI prompting tool for modern world to discover, create, edit and share creative prompts. You can Login using your email and share your prompts as well which will be saved into database and anyone can see it. Also app is fully responsive.",
    frontend: "NextJS, React, Tailwind CSS",
    backend: "NodeJS, ExpressJS",
    database: "MongoDB",
    ghLink: "https://github.com/kumar-rahul2001/Promptopia",
    demoLink: "https://promptopia-lilac-tau.vercel.app/",
  },
  {
    imgPaths: [acme1, acme2, acme3, acme4, acme5, acme6],
    isBlog: false,
    title: "Acme",
    description:
      "Acme is an open-source website for learning the core concept of the nextjs app router. I have implemented API in it, authentication and  CRUD features. Apart from it is also have a beautiful loading UI and also it's fully responsive across different viewports.",
    frontend: "NextJS, React, Tailwind CSS",
    backend: "NextJS, NodeJS, ExpressJS",
    database: "Postgres SQL",
    ghLink: "https://github.com/kumar-rahul2001/acme",
    demoLink: "https://acme-by-rahul.vercel.app/",
  },
  {
    imgPaths: [textutils1, textutils2, textutils3],
    isBlog: false,
    title: "TextUtils",
    description:
      "Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or paragraph.Textutils is an online word and character counter, it can also change a text from Uppercase to Lowercase and Lowercase to Uppercase. It can also copy, clear and remove the extra spaces from the Text. TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text.",
    frontend: "React, JavaScript, Bootstrap",
    backend: "N/A",
    database: "N/A",
    ghLink: "https://github.com/kumar-rahul2001/Textutils",
    demoLink: "https://wordtextutils.netlify.app/",
  },
  {
    imgPaths: [expensetracker1, expensetracker2],
    isBlog: false,
    title: "Expense Tracker",
    description:
      "Expense tracker is very basic app through which you can add new expenses and track your daily and monthly expenses. You can also filter the expenses according to year.",
    frontend: "React, JavaScript",
    backend: "N/A",
    database: "N/A",
    otherTools: "Bootstrap, Netlify",
    ghLink: "https://github.com/kumar-rahul2001/expensetracker",
    demoLink: "https://d2dexpensetracker.netlify.app/",
  },
];

export default Projects;
