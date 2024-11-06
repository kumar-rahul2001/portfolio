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
import {
  SiFirebase,
  SiNextdotjs,
  SiExpress,
  SiMysql,
  SiSqlite,
} from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { TbBrandLaravel } from "react-icons/tb";
import { SiPostgresql } from "react-icons/si";

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
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <SiSqlite />, name: "SQLite" },
  { icon: <DiPython />, name: "Python" },
  { icon: <DiDjango />, name: "Django" },
  { icon: <DiJava />, name: "Java" },
  { icon: <FaPhp />, name: "Php" },
  { icon: <TbBrandLaravel />, name: "Laravel" },
  { icon: <SiPostgresql />, name: "Postgtes SQL" },
];

export default techIcons;
