// src/components/toolIcons.js
import { DiLinux } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiWindows11,
  SiFigma,
  SiCanva,
  SiAmazonaws,
  SiAzuredevops,
} from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { BsUbuntu } from "react-icons/bs";

const ToolsIcons = [
  { icon: <SiMacos />, name: "macOS" },
  { icon: <DiLinux />, name: "Linux" },
  { icon: <SiVisualstudiocode />, name: "VS Code" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiWindows11 />, name: "Windows 11" },
  { icon: <SiFigma />, name: "Figma" },
  { icon: <SiCanva />, name: "Canva" },
  { icon: <SiVercel />, name: "Vercel" },
  { icon: <SiAmazonaws />, name: "AWS" },
  { icon: <SiAzuredevops />, name: "Azure DevOps" },
  { icon: <SiSlack />, name: "Slack" },
  { icon: <FaLinux />, name: "Linux" },
  { icon: <BsUbuntu />, name: "Ubuntu" },
];

export default ToolsIcons;
