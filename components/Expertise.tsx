"use client";

import { motion } from "framer-motion";

const skills = [
  {
    title: "Software Development",
    items: [
      "Java",
      "Python",
      "PHP",
      "JavaScript",
      "React",
      "FastAPI",
    ],
  },
  {
    title: "QA Automation",
    items: [
      "Selenium",
      "TestNG",
      "PyTest",
      "POM",
      "Automation Frameworks",
    ],
  },
  {
    title: "API Testing",
    items: [
      "Postman",
      "REST APIs",
      "JSON Validation",
      "SQL Validation",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "Azure",
      "OCI",
      "Docker",
      "Git",
      "GitHub Actions",
    ],
  },
];

export default function Expertise() {
  return (
    <section className="py-32 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          Technical Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold mb-4">
                {skill.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}