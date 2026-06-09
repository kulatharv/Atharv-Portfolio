
// "use client";

// import { motion } from "framer-motion";
// import {
//   ExternalLink,
// } from "lucide-react";

// import { FaGithub } from "react-icons/fa";
// const projects = [
//   {
//     title: "AstroLogic Vedic",
//     category: "AI + Full Stack",
//     description:
//       "Full-stack astrology platform built with FastAPI, React, Swiss Ephemeris and AI-powered prediction workflows.",
//     tech: [
//       "FastAPI",
//       "React",
//       "Python",
//       "AI",
//       "PostgreSQL",
//     ],
//     featured: true,
//     github: "#",
//     demo: "#",
//   },
//   {
//     title: "API Automation Framework",
//     category: "QA Automation",
//     description:
//       "Automated API testing framework using PyTest, Postman and GitHub Actions CI/CD.",
//     tech: [
//       "PyTest",
//       "Postman",
//       "FastAPI",
//       "GitHub Actions",
//     ],
//     github: "#",
//     demo: "#",
//   },
//   {
//     title: "E-Commerce Automation",
//     category: "UI Automation",
//     description:
//       "Selenium WebDriver automation framework implementing POM, TestNG and regression testing.",
//     tech: [
//       "Java",
//       "Selenium",
//       "TestNG",
//       "POM",
//     ],
//     github: "#",
//     demo: "#",
//   },
//   {
//     title: "Inquiry Management System",
//     category: "Software Development",
//     description:
//       "Business workflow system developed using PHP and MySQL for customer inquiry tracking.",
//     tech: [
//       "PHP",
//       "MySQL",
//       "Bootstrap",
//     ],
//     github: "#",
//     demo: "#",
//   },
// ];

// export default function Projects() {
//   return (
//     <section
//       id="projects"
//       className="min-h-screen bg-[#0A0A0A] py-24"
//     >
//       <div className="max-w-7xl mx-auto px-8">

//         <div className="mb-16">
//           <p className="uppercase tracking-[0.3em] text-blue-500 text-sm mb-4">
//             03 · FEATURED PROJECTS
//           </p>

//           <h2 className="text-6xl font-bold">
//             Featured Projects
//           </h2>
//         </div>

//         <div className="grid gap-6">

//           {/* Featured Project */}

//           {projects
//             .filter((p) => p.featured)
//             .map((project) => (
//               <motion.div
//                 key={project.title}
//                 whileHover={{ y: -5 }}
//                 className="rounded-[32px] border border-white/10 bg-white/5 overflow-hidden"
//               >
//                 <div className="grid lg:grid-cols-[1.2fr_1fr]">

//                   <div className="h-[350px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
//                     <h3 className="text-4xl font-bold">
//                       {project.title}
//                     </h3>
//                   </div>

//                   <div className="p-10">

//                     <span className="text-blue-400">
//                       {project.category}
//                     </span>

//                     <h3 className="text-3xl font-bold mt-4">
//                       {project.title}
//                     </h3>

//                     <p className="text-zinc-400 mt-4 leading-7">
//                       {project.description}
//                     </p>

//                     <div className="flex flex-wrap gap-2 mt-6">
//                       {project.tech.map((tech) => (
//                         <span
//                           key={tech}
//                           className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>

//                     <div className="flex gap-4 mt-8">

//                       <a href={project.github}>
//                         <FaGithub size={20} />
//                       </a>

//                       <a href={project.demo}>
//                         <ExternalLink />
//                       </a>

//                     </div>

//                   </div>

//                 </div>
//               </motion.div>
//             ))}

//           {/* Remaining Projects */}

//           <div className="grid md:grid-cols-2 gap-6">

//             {projects
//               .filter((p) => !p.featured)
//               .map((project) => (
//                 <motion.div
//                   key={project.title}
//                   whileHover={{
//                     y: -5,
//                   }}
//                   className="rounded-[28px] border border-white/10 bg-white/5 p-8"
//                 >

//                   <span className="text-blue-400 text-sm">
//                     {project.category}
//                   </span>

//                   <h3 className="text-2xl font-bold mt-3">
//                     {project.title}
//                   </h3>

//                   <p className="text-zinc-400 mt-4 leading-7">
//                     {project.description}
//                   </p>

//                   <div className="flex flex-wrap gap-2 mt-6">
//                     {project.tech.map((tech) => (
//                       <span
//                         key={tech}
//                         className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>

//                 </motion.div>
//               ))}

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "AstroLogic Vedic",
    category: "AI + Full Stack",
    description:
      "Full-stack astrology platform built with FastAPI, React, Swiss Ephemeris and AI-powered prediction workflows.",
    tech: ["FastAPI", "React", "Python", "AI", "PostgreSQL"],
    featured: true,
    github: "https://github.com/kulatharv/AstroLogic-Vedic",
    demo: "https://astro-logic-vedic.vercel.app",
  },

  {
    title: "InquiryX",
    category: "Software Development",
    description:
      "Web-based inquiry and client management system for tracking leads, follow-ups, and analytics.",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    github: "https://github.com/kulatharv/InquiryX",
    demo: "#",
  },

  {
    title: "School Database Management",
    category: "Database Application",
    description:
      "School database system developed using C++ and MySQL for managing student records and attendance.",
    tech: ["C++", "MySQL"],
    github: "https://github.com/kulatharv/School-management",
    demo: "#",
  },

  {
    title: "Weather Tracker",
    category: "Web Application",
    description:
      "Real-time weather tracking application using external weather APIs.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/kulatharv/current_weather",
    demo: "#",
  },

  {
    title: "Netflix Clone",
    category: "Frontend Development",
    description:
      "Responsive Netflix homepage clone built using HTML, CSS and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/kulatharv/Netflix_Clone_Atharv",
    demo: "#",
  },

  {
    title: "Business Management System",
    category: "Enterprise Software",
    description:
      "Integrated Sales, Inventory, Accounts and Staff Management system.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/kulatharv/Business-Management",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#0A0A0A] py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="mb-16">
          <p className="uppercase tracking-[0.3em] text-blue-500 text-sm mb-4">
            03 · FEATURED PROJECTS
          </p>

          <h2 className="text-6xl font-bold">
            Featured Projects
          </h2>
        </div>

        <div className="grid gap-6">

          {/* Featured Project */}
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -5 }}
                className="rounded-[32px] border border-white/10 bg-white/5 overflow-hidden"
              >
                <div className="grid lg:grid-cols-[1.2fr_1fr]">

                  <div className="h-[350px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <h3 className="text-4xl font-bold">
                      {project.title}
                    </h3>
                  </div>

                  <div className="p-10">

                    <span className="text-blue-400">
                      {project.category}
                    </span>

                    <h3 className="text-3xl font-bold mt-4">
                      {project.title}
                    </h3>

                    <p className="text-zinc-400 mt-4 leading-7">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-5 mt-8">

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition"
                      >
                        <FaGithub size={22} />
                      </a>

                      {project.demo !== "#" && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-green-400 transition"
                        >
                          <ExternalLink size={22} />
                        </a>
                      )}

                    </div>

                  </div>

                </div>
              </motion.div>
            ))}

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 gap-6">

            {projects
              .filter((p) => !p.featured)
              .map((project) => (
                <motion.div
                  key={project.title}
                  whileHover={{ y: -5 }}
                  className="rounded-[28px] border border-white/10 bg-white/5 p-8"
                >

                  <span className="text-blue-400 text-sm">
                    {project.category}
                  </span>

                  <h3 className="text-2xl font-bold mt-3">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 mt-4 leading-7">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-5 mt-6">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition"
                    >
                      <FaGithub size={20} />
                    </a>

                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-400 transition"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}

                  </div>

                </motion.div>
              ))}

          </div>

        </div>
      </div>
    </section>
  );
}