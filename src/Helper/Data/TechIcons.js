// src/components/techIcons.js
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiDjango,
} from "react-icons/di";
import { SiFirebase, SiNextdotjs, SiExpress, SiSqlite } from "react-icons/si";

const techIcons = [
  { icon: <CgCPlusPlus />, name: "C++" },
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <DiNodejs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <DiReact />, name: "React" },
  { icon: <DiMongodb />, name: "MongoDB" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <DiGit />, name: "Git" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <SiSqlite />, name: "SQLite" },
  { icon: <DiPython />, name: "Python" },
  { icon: <DiDjango />, name: "Django" },
  { icon: <DiJava />, name: "Java" },
];

export default techIcons;
