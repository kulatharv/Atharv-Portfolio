
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaJava,
  FaPython,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaMicrosoft,
  FaBug,
  FaCode,
  FaServer,
  FaCloud,
  FaLaptopCode,
} from "react-icons/fa";

const categories = {
  Programming: [
    {
      name: "Java",
      description: "Object-Oriented Programming & DSA",
      icon: <FaJava />,
    },
    {
      name: "Python",
      description: "Automation & Backend Development",
      icon: <FaPython />,
    },
    {
      name: "JavaScript",
      description: "Modern Web Development",
      icon: <FaCode />,
    },
    {
      name: "PHP",
      description: "Server-Side Applications",
      icon: <FaCode />,
    },
    {
      name: "SQL",
      description: "Database Querying",
      icon: <FaDatabase />,
    },
  ],

  Backend: [
    {
      name: "FastAPI",
      description: "REST API Development",
      icon: <FaServer />,
    },
    {
      name: "Node.js",
      description: "Scalable Backend Services",
      icon: <FaServer />,
    },
    {
      name: "REST APIs",
      description: "API Design & Integration",
      icon: <FaServer />,
    },
    {
      name: "JWT",
      description: "Authentication & Security",
      icon: <FaServer />,
    },
    {
      name: "System Design",
      description: "Scalable Architecture",
      icon: <FaServer />,
    },
  ],

  Frontend: [
    {
      name: "React",
      description: "Interactive User Interfaces",
      icon: <FaReact />,
    },
    {
      name: "Next.js",
      description: "Full-Stack React Framework",
      icon: <FaReact />,
    },
    {
      name: "Tailwind CSS",
      description: "Utility First Styling",
      icon: <FaLaptopCode />,
    },
    {
      name: "Bootstrap",
      description: "Responsive Components",
      icon: <FaLaptopCode />,
    },
    {
      name: "HTML & CSS",
      description: "Web Foundations",
      icon: <FaLaptopCode />,
    },
  ],

  Database: [
    {
      name: "MySQL",
      description: "Relational Databases",
      icon: <FaDatabase />,
    },
    {
      name: "MongoDB",
      description: "NoSQL Database",
      icon: <FaDatabase />,
    },
    {
      name: "DBMS",
      description: "Database Fundamentals",
      icon: <FaDatabase />,
    },
    {
      name: "Query Optimization",
      description: "Performance Tuning",
      icon: <FaDatabase />,
    },
  ],

  "Cloud & DevOps": [
    {
      name: "Azure",
      description: "Cloud Infrastructure",
      icon: <FaMicrosoft />,
    },
    {
      name: "Oracle Cloud",
      description: "OCI Services",
      icon: <FaCloud />,
    },
    {
      name: "Docker",
      description: "Containerization",
      icon: <FaDocker />,
    },
    {
      name: "Git",
      description: "Version Control",
      icon: <FaGitAlt />,
    },
    {
      name: "GitHub",
      description: "Code Collaboration",
      icon: <FaGithub />,
    },
    {
      name: "GitHub Actions",
      description: "CI/CD Pipelines",
      icon: <FaGithub />,
    },
  ],

  "QA Automation": [
    {
      name: "Selenium",
      description: "UI Automation Testing",
      icon: <FaBug />,
    },
    {
      name: "TestNG",
      description: "Test Framework",
      icon: <FaBug />,
    },
    {
      name: "PyTest",
      description: "Automation Testing",
      icon: <FaBug />,
    },
    {
      name: "Postman",
      description: "API Testing",
      icon: <FaBug />,
    },
    {
      name: "POM",
      description: "Page Object Model",
      icon: <FaBug />,
    },
    {
      name: "JIRA",
      description: "Bug Tracking",
      icon: <FaBug />,
    },
  ],

  "CS Fundamentals": [
    {
      name: "DSA",
      description: "Problem Solving",
      icon: <FaCode />,
    },
    {
      name: "OOP",
      description: "Object-Oriented Design",
      icon: <FaCode />,
    },
    {
      name: "Operating Systems",
      description: "System Fundamentals",
      icon: <FaCode />,
    },
    {
      name: "Computer Networks",
      description: "Networking Concepts",
      icon: <FaCode />,
    },
  ],

  Tools: [
    {
      name: "VS Code",
      description: "Development Environment",
      icon: <FaLaptopCode />,
    },
    {
      name: "XAMPP",
      description: "Local Development",
      icon: <FaLaptopCode />,
    },
    {
      name: "Power BI",
      description: "Data Visualization",
      icon: <FaLaptopCode />,
    },
    {
      name: "Figma",
      description: "UI/UX Design",
      icon: <FaLaptopCode />,
    },
  ],
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    "All",
    "Programming",
    "Backend",
    "Frontend",
    "Database",
    "Cloud & DevOps",
    "QA Automation",
    "CS Fundamentals",
    "Tools",
  ];

  const allSkills = Object.values(categories).flat();

  const displayedSkills =
    activeTab === "All"
      ? allSkills
      : categories[activeTab as keyof typeof categories];

  return (
    <section
      id="skills"
      className="py-24 bg-[#0A0A0A] relative overflow-hidden"
    >
      <div className="absolute left-0 top-1/3 w-96 h-96 bg-indigo-500/10 blur-[150px] rounded-full" />
      <div className="absolute right-0 bottom-1/3 w-96 h-96 bg-purple-500/10 blur-[150px] rounded-full" />

      <div className="max-w-[1350px] mx-auto px-10 lg:px-14 relative z-10">

        <div className="mb-12">
          <p className="uppercase tracking-[0.35em] text-indigo-400 text-sm mb-4">
            03 · SKILLS
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            Technical <span className="text-indigo-400">Expertise</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Stat value="40+" label="Technologies" />
          <Stat value="10+" label="Projects" />
          <Stat value="3+" label="Internships" />
          <Stat value="3+" label="Research Paper" />
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                activeTab === tab
                  ? "bg-indigo-500 text-white"
                  : "bg-white/5 border border-white/10 text-zinc-400 hover:border-indigo-500/40"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4"
          >
            {displayedSkills.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ y: -8 }}
                className="bg-white/5 border border-white/10 rounded-[24px] p-4 backdrop-blur-xl hover:border-indigo-500/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-xl mb-4">
                  {skill.icon}
                </div>

                <h3 className="text-base font-semibold mb-1">
                  {skill.name}
                </h3>

                <p className="text-zinc-400 text-xs leading-5">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
      <h3 className="text-3xl font-bold text-indigo-400">
        {value}
      </h3>

      <p className="text-zinc-400 text-sm mt-1">
        {label}
      </p>
    </div>
  );
}

