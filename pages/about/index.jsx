import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import {
  FaAngular,
  FaAws,
  FaCss3,
  FaDocker,
  FaEthereum,
  FaFigma,
  FaFlask,
  FaGit,
  FaGitlab,
  FaHardHat,
  FaHtml5,
  FaJava,
  FaJenkins,
  FaJira,
  FaJs,
  FaLaravel,
  FaNode,
  FaPhp,
  FaPython,
  FaReact,
  FaTrello,
  FaVuejs,
  FaWater,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiAzuredevops,
  SiCypress,
  SiDjango,
  SiExpress,
  SiFigma,
  SiFramer,
  SiGooglecloud,
  SiIpfs,
  SiJasmine,
  SiJest,
  SiJunit5,
  SiKubernetes,
  SiLaravel,
  SiMicrosoftsqlserver,
  SiMocha,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNetapp,
  SiNextdotjs,
  SiOracle,
  SiPostgresql,
  SiRedis,
  SiSelenium,
  SiSolid,
  SiSolidity,
  SiSpringboot,
  SiTestinglibrary,
  SiTypescript,
  SiWeb3Dotjs,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";
import { BsDownload } from "react-icons/bs";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Frontend",
        icons: [
          { icon: FaHtml5, title: "HTML5" },
          { icon: FaCss3, title: "CSS3" },
          { icon: FaJs, title: "JavaScript" },
          { icon: SiTypescript, title: "TypeScript" },
          { icon: FaReact, title: " React.js" },
          { icon: FaAngular, title: "Angular" },
          { icon: FaVuejs, title: "Vue.js" },
          { icon: SiNextdotjs, title: "Next.js" },
          { icon: SiFigma, title: "Figma" },
        ],
      },
      {
        title: "Backend",
        icons: [
          { icon: FaNode, title: "Node.js" },
          { icon: SiExpress, title: "Express.js" },
          { icon: SiNestjs, title: "Nest.js" },
          { icon: FaPhp, title: "PHP" },
          { icon: FaLaravel, title: "Laravel" },
          { icon: FaPython, title: "Python" },
          { icon: SiDjango, title: "Django" },
          { icon: FaFlask, title: "Flask" },
          { icon: FaJava, title: "Java" },
          { icon: SiSpringboot, title: "Spring Boot" },
        ],
      },
      {
        title: "Database",
        icons: [
          { icon: SiMysql, title: "MySQL" },
          { icon: SiPostgresql, title: "PostgreSQL" },
          { icon: SiMongodb, title: "MongDB" },
          { icon: SiMicrosoftsqlserver, title: "Microsoft SQL Server" },
          { icon: SiOracle, title: "Oracle DB" },
          { icon: SiRedis, title: "Redis" },
        ],
      },
      {
        title: "Testing",
        icons: [
          { icon: SiTestinglibrary, title: "Unit Testing" },
          { icon: SiJest, title: "Jest" },
          { icon: SiMocha, title: "Mocha" },
          { icon: SiCypress, title: "Cypress" },
          { icon: SiSelenium, title: "Selenium" },
          { icon: SiJasmine, title: "Jasmine" },
          { icon: SiJunit5, title: "Junit" },
        ],
      },
      {
        title: "DevOps",
        icons: [
          { icon: FaJenkins, title: "Jenkins" },
          { icon: FaGit, title: "Git" },
          { icon: FaGitlab, title: "Gitlab" },
          { icon: FaDocker, title: "Docker" },
          { icon: SiKubernetes, title: "Kubernetes" },
          { icon: FaAws, title: "AWS(EC2, S3, RDS, Lambda)" },
          { icon: SiAzuredevops, title: "Azure DevOps" },
          { icon: SiGooglecloud, title: "GCP (Google Cloud Platform)" },
        ],
      },
      {
        title: "SDLC",
        icons: [
          { icon: FaJira, title: "JIRA" },
          { icon: SiSolid, title: "SOLID" },
          { icon: FaTrello, title: "TRELLO" },
          { icon: FaWater, title: "WATERFALL" },
        ],
      },
      {
        title: "Blockchain",
        icons: [
          { icon: SiSolidity, title: "Solidity" },
          { icon: FaHardHat, title: "Hardhat" },
          { icon: SiWeb3Dotjs, title: "Web3.js" },
          { icon: FaEthereum, title: "Ethereum" },
          { icon: SiIpfs, title: "IPFS" },
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Senior Software Engineer - Expel",
        stage: "2023 - 2025",
      },
      {
        title: "Senior Full Stack Developer - Eccalon",
        stage: "2019 - 2023",
      },
      {
        title: "Frontend Developer - Sunnova",
        stage: "2018 - 2019",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "Bachelor of Computer Science - Strayer University",
        stage: "2015 - 2018",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  const confirmDownloadCV = () => {
    if (window.confirm("Are you sure you want to download the CV?")) {
      const link = document.createElement("a");
      link.href = "/MuhammadAli.pdf";
      link.download = "/MuhammadAli.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      {/* <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div> */}

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Senior Software Engineer
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            <span className="text-blue-700 font-semibold">
              Full Stack Developer
            </span>{" "}
            with
            <span className="text-indigo-600 font-semibold">
              {" "}
              9 years of experience
            </span>{" "}
            building scalable, high-performance web apps. Skilled in{" "}
            <span className="text-pink-600 font-semibold">
              JavaScript
            </span>,{" "}
            <span className="text-yellow-600 font-semibold">TypeScript</span>,
            and frameworks like
            <span className="text-purple-600 font-semibold"> React</span>,{" "}
            <span className="text-orange-600 font-semibold">Angular</span>, and
            <span className="text-teal-600 font-semibold"> Vue</span>. Expert in
            backend tools such as
            <span className="text-rose-600 font-semibold"> Node.js</span>,{" "}
            <span className="text-green-600 font-semibold">Laravel</span>, and
            <span className="text-amber-600 font-semibold"> PostgreSQL</span>.
            Proficient in{" "}
            <span className="text-cyan-600 font-semibold">AWS</span>,{" "}
            <span className="text-blue-500 font-semibold">Azure</span>,
            <span className="text-emerald-600 font-semibold"> Docker</span>, and
            <span className="text-fuchsia-600 font-semibold"> Kubernetes</span>.
            Passionate about
            <span className="text-lime-600 font-semibold"> clean code</span>,
            <span className="text-red-600 font-semibold"> microservices</span>,
            and building systems that scale.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={9} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience.
                </div>
              </div>

              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={60} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients.
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={78} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects.
                </div>
              </div>

              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>

                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((Icon, iconI) => (
                    <div
                      key={iconI}
                      className="text-2xl text-white cursor-pointer"
                      data-tooltip-id="devicon-tooltip"
                      data-tooltip-content={Icon.title}
                      data-tooltip-place="top"
                    >
                      <Icon.icon color="white" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <Tooltip id="devicon-tooltip" />
          </div>
          <button
            className="btn rounded-full border border-white/50 px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group mt-2 mb-28 lg:mb-0"
            onClick={confirmDownloadCV}
          >
            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
              Download CV
            </span>

            <BsDownload
              className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
              aria-hidden
            />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
