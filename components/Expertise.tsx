"use client";

import { motion } from "framer-motion";

const skills = [
{
title: "Software Development",
items: ["Java", "Python", "PHP", "JavaScript", "React", "FastAPI"],
},
{
title: "QA Automation",
items: ["Selenium", "TestNG", "PyTest", "POM", "Automation Frameworks"],
},
{
title: "API Testing",
items: ["Postman", "REST APIs", "JSON Validation", "SQL Validation"],
},
{
title: "Cloud & DevOps",
items: ["Azure", "OCI", "Docker", "Git", "GitHub Actions"],
},
];

export default function Expertise() {
return ( 
<section
  id="expertise"
  className="py-12 sm:py-16 md:py-24 bg-[#0D0D0D]"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12">
      Technical Expertise
    </h2>

{/* Changed grid layout for mobile: 2-3 cards per row */}
<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.title}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.08 }}
          viewport={{ once: true }}
          whileHover={{ y: -3 }}
          className="
          bg-white/5
          border
          border-white/10
          rounded-2xl
          p-3
          sm:p-5
          backdrop-blur-md
          hover:border-blue-500/40
          transition-all
          duration-300
          "
        >

          <h3 className="text-sm sm:text-lg font-semibold mb-2 sm:mb-3">
            {skill.title}
          </h3>

          <div className="flex flex-wrap gap-1">

            {skill.items.map((item) => (
              <span
                key={item}
                className="
                px-2
                py-0.5
                rounded-full
                bg-blue-500/10
                text-blue-400
                text-[10px]
                sm:text-xs
                whitespace-nowrap
                "
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