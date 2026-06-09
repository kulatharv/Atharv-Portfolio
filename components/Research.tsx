
"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  FileText,
  Globe,
  FlaskConical,
} from "lucide-react";

const publications = [
  {
    title:
      "An Intelligent Multi-Modal Interview Simulation System Using Large Language Models, Automatic Speech Recognition, And Neural Text-To-Speech Synthesis",
    journal: "IJSART Volume 12 Issue 6",
    date: "June 2026",
    category: "AI Research",
  },
  {
    title:
      "Digital Addiction: A Multi-Dataset Analysis of Health Impacts, Usage Patterns, And Intervention Strategies",
    journal: "IJSART Volume 12 Issue 6",
    date: "June 2026",
    category: "Data Analytics",
  },
  {
    title:
      "Innovative Strategies For Enhancing Agricultural Productivity: Integrating Modern Techniques For Sustainable Yield Improvement",
    journal: "IJSART Volume 11 Issue 4",
    date: "April 2025",
    category: "Research Study",
  },
];

export default function Research() {
  return (
    <section
      id="research"
      className="min-h-screen bg-[#0A0A0A] py-24 relative overflow-hidden"
    >
      {/* Background Effects */}

      <div className="absolute left-0 top-1/3 w-96 h-96 bg-blue-500/10 blur-[140px] rounded-full" />

      <div className="absolute right-0 bottom-1/3 w-96 h-96 bg-purple-500/10 blur-[140px] rounded-full" />

      <div className="max-w-[1350px] mx-auto px-10 lg:px-14 relative z-10">

        {/* Heading */}

        <div className="mb-16">
          <p className="uppercase tracking-[0.35em] text-blue-500 text-sm mb-4">
            09 · RESEARCH
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            Research &{" "}
            <span className="text-blue-500">
              Publications
            </span>
          </h2>

          <p className="text-zinc-400 mt-6 max-w-3xl text-lg">
            Research contributions, publications, and innovation
            initiatives focused on Artificial Intelligence,
            Data Analytics, and Emerging Technologies.
          </p>
        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">

          <StatCard value="3" label="Published Papers" />

          <StatCard value="1" label="Design Registration" />

          <StatCard value="2" label="AI Publications" />

          <StatCard value="2025-26" label="Research Period" />

        </div>

        {/* Publications */}

        <div className="space-y-6 mb-12">

          {publications.map((paper, index) => (
            <motion.div
              key={paper.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              className="
                bg-white/5
                border
                border-white/10
                rounded-[30px]
                p-8
                backdrop-blur-xl
                hover:border-blue-500/40
                transition
              "
            >
              <div className="flex flex-wrap justify-between gap-4">

                <div className="flex gap-5">

                  <div
                    className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-blue-500/10
                    border
                    border-blue-500/20
                    flex
                    items-center
                    justify-center
                  "
                  >
                    <BookOpen
                      size={26}
                      className="text-blue-500"
                    />
                  </div>

                  <div>

                    <span className="text-blue-400 text-sm">
                      {paper.category}
                    </span>

                    <h3 className="text-xl font-semibold mt-2">
                      {paper.title}
                    </h3>

                    <p className="text-zinc-400 mt-3">
                      {paper.journal}
                    </p>

                  </div>

                </div>

                <span
                  className="
                  px-4
                  py-2
                  rounded-full
                  bg-blue-500/10
                  text-blue-400
                  text-sm
                  h-fit
                "
                >
                  {paper.date}
                </span>

              </div>
            </motion.div>
          ))}

        </div>

        {/* Design Registration */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="
            bg-gradient-to-r
            from-blue-500/10
            to-purple-500/10
            border
            border-blue-500/20
            rounded-[32px]
            p-10
          "
        >
          <div className="flex gap-6">

            <div
              className="
              w-16
              h-16
              rounded-2xl
              bg-blue-500/10
              flex
              items-center
              justify-center
            "
            >
              <Globe
                size={30}
                className="text-blue-500"
              />
            </div>

            <div>

              <p className="uppercase tracking-[0.25em] text-blue-400 text-sm">
                International Design Registration
              </p>

              <h3 className="text-3xl font-bold mt-3">
                Portable Pottery-Based Desiccant Evaporative Cooler
              </h3>

              <p className="text-zinc-400 mt-5 leading-7">
                Design contributor for an innovation officially
                registered with the United Kingdom Intellectual
                Property Office (UK IPO).
              </p>

              <div className="flex flex-wrap gap-3 mt-6">

                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  Design No. 6455672
                </span>

                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  July 2025
                </span>

                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  UK IPO
                </span>

              </div>

            </div>

          </div>
        </motion.div>

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
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
      <h3 className="text-3xl font-bold text-blue-500">
        {value}
      </h3>

      <p className="text-zinc-400 text-sm mt-2">
        {label}
      </p>
    </div>
  );
}

