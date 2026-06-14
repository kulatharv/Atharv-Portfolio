"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Database,
  Palette,
  BarChart3,
} from "lucide-react";

const experiences = [
  {
    role: "Technical Intern",
    company: "Infinova Technologies",
    duration: "Sep 2025 – Feb 2026",
    icon: Palette,
    description: [
      "Designed social media creatives, web layouts, and UI components using Figma.",
      "Collaborated with developers and clients to translate design requirements into production-ready interfaces.",
      "Improved consistency across web and application user experiences.",
    ],
    technologies: ["Figma", "UI/UX", "Web Design"],
  },

  {
    role: "Software Development Intern",
    company: "Gensys Lasers Pvt. Ltd.",
    duration: "Feb 2025 – Apr 2025",
    icon: Building2,
    description: [
      "Developed and deployed an Inquiry Management System using PHP and MySQL.",
      "Built responsive web applications using HTML, CSS, JavaScript, PHP, and MySQL.",
      "Implemented backend integrations and sales pipeline tracking workflows.",
    ],
    technologies: [
      "PHP",
      "MySQL",
      "JavaScript",
      "Bootstrap",
    ],
  },

  {
    role: "Analyst Intern",
    company: "Rising Education",
    duration: "May 2024 – Jul 2024",
    icon: BarChart3,
    description: [
      "Processed and structured 10,000+ MHT-CET student records using Python and Excel.",
      "Improved data quality through cleaning, normalization, and validation.",
      "Prepared datasets for a UG college recommendation system.",
    ],
    technologies: [
      "Python",
      "Excel",
      "Data Analysis",
    ],
  },

  {
    role: "Freelance Graphic Designer",
    company: "Self Employed",
    duration: "2023 – Present",
    icon: Database,
    description: [
      "Worked with 5+ clients on branding and digital design projects.",
      "Designed posters, social media creatives, marketing assets, and promotional campaigns.",
      "Delivered visual identities for educational and business organizations.",
    ],
    technologies: [
      "Canva",
      "Photoshop",
      "Branding",
      "Marketing Design",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-[#0A0A0A] py-12 sm:py-16 md:py-24 relative overflow-hidden"
    >
      {/* Background Effects */}

      <div className="absolute left-0 top-1/3 w-96 h-96 bg-blue-500/10 blur-[140px] rounded-full" />

      <div className="absolute right-0 bottom-1/3 w-96 h-96 bg-purple-500/10 blur-[140px] rounded-full" />

      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}

        <div className="mb-8 sm:mb-12 md:mb-16">
          <p className="uppercase tracking-[0.2em] sm:tracking-[0.35em] text-blue-500 text-xs sm:text-sm mb-4">
            07 · EXPERIENCE
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Professional{" "}
            <span className="text-blue-500">
              Experience
            </span>
          </h2>

          <p className="text-zinc-400 mt-4 sm:mt-6 max-w-3xl text-sm sm:text-base lg:text-lg">
            Hands-on experience through internships,
            software development projects, analytics,
            and freelance work.
          </p>
        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 lg:gap-6 mb-10 md:mb-14">

          <StatCard value="3+" label="Internships" />

          <StatCard value="5+" label="Clients Served" />

          <StatCard value="10,000+" label="Records Processed" />

          <StatCard value="1+" label="Years Experience" />

        </div>

        {/* Timeline */}

        <div className="relative">

          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-[2px] bg-white/10" />

          <div className="space-y-5 sm:space-y-8">

            {experiences.map((exp, index) => {
              const Icon = exp.icon;

              return (
                <motion.div
                  key={exp.company}
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="relative pl-12 sm:pl-20"
                >
                  {/* Timeline Dot */}

                  <div
                    className="
                    absolute
                    left-0
                    top-5
                    w-8
                    h-8
                    sm:w-12
                    sm:h-12
                    rounded-full
                    bg-blue-500/10
                    border
                    border-blue-500/30
                    flex
                    items-center
                    justify-center
                  "
                  >
                    <Icon
                      size={22}
                      className="text-blue-500"
                    />
                  </div>

                  {/* Card */}

                  <div
                    className="
                    bg-white/5
                    border
                    border-white/10
                    rounded-[30px]
                    p-4 sm:p-6 lg:p-8
                    backdrop-blur-xl
                    hover:border-blue-500/40
                    transition-all
                    duration-300
                  "
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 mb-5">

                      <div>
                        <h3 className="text-lg sm:text-2xl font-bold">
                          {exp.role}
                        </h3>

                        <p className="text-blue-400 text-sm sm:text-base mt-1">
                          {exp.company}
                        </p>
                      </div>

                      <span
                        className="
                        px-4
                        py-2
                        rounded-full
                        bg-blue-500/10
                        border
                        border-blue-500/20
                        text-blue-400
                        text-xs sm:text-sm
                      "
                      >
                        {exp.duration}
                      </span>

                    </div>

                    <ul className="space-y-3 mb-5 sm:mb-6">
                      {exp.description.map((point) => (
                        <li
                          key={point}
                          className="text-zinc-400 text-sm sm:text-base leading-7 flex gap-3"
                        >
                          <span className="text-blue-500 mt-1">
                            •
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="
                          px-3
                          py-1
                          rounded-full
                          bg-white/5
                          border
                          border-white/10
                          text-xs sm:text-sm
                          text-zinc-300
                        "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div
      className="
      bg-white/5
      border
      border-white/10
      rounded-2xl
      p-4 sm:p-5
      text-center
    "
    >
      <h3 className="text-2xl sm:text-3xl font-bold text-blue-500">
        {value}
      </h3>

      <p className="text-zinc-400 text-sm mt-2">
        {label}
      </p>
    </div>
  );
}
