// import Apartment from "./images/real-estate-3297625_640.jpg";
import exam from "../../assets/exam.png" 
import store from "../../assets/store.png" 
import easeRead from "../../assets/easereads poster design.jpg";
import liight from "../../assets/new-liight.png";
import wonderkid from "../../assets/wonder-kid.png";

const projects = [
  {
    id: 1,
    title: "Lagos State Examboard",
    category: "React.js Project",
    link: "https://pay.examboard.com.ng/",
    Demo: "http://saccom.xyz",
    img: exam,
    desc: `Developed and launched a high-traffic payment application for exam fees in Lagos State, serving students, teachers,
and agents, Scaled the platform to support millions of users, contributing significantly to revenue generation for Lagos State.`,
  },
  {
    id: 2,
    title: "EaseReads",
    category: "Full-stack Project",
    link: "https://github.com/Samuel-Makinde/JUPEP-SITE",
    Demo: "https://easereads.com/",
    img: easeRead,
    desc: `The application provides JUPEB students with access to a vast library of academic resources, including textbooks, study materials, past questions, and guides to help them prepare for their examinations. In addition to reading books online.`,
  },
  {
    id: 3,
    title: "Store E-commerce",
    category: "React.js Project",
    link: "https://peoplesstore.ng/",
    img: store,
    desc: `Developed and launched an e-commerce Application featuring user-friendly product listings, secure payment integration,
and a responsive design. Implemented key functionalities like order-tracking to enhance user Experience.`,
  },
   {
    id: 4,
    title: "Liight",
    category: "React.js Project",
    link: "https://github.com/Samuel-Makinde/e-commerce-site",
    Demo: "https://liight.com.ng/",
    img: liight,
    desc: `This project allow user to setup meter, pay for electricity and apply for liight loan`,
  },
  {
    id: 5,
    title: "Wonder-Kid",
    category: "Full-Stack Project",
    link: "https://github.com/Samuel-Makinde/SACCOM-FRONTEND-REACT",
    Demo: "https://wonderkid.live/",
    img: wonderkid,
    desc: `This project teach programming language to kid.`,
  },
];

export default projects;
