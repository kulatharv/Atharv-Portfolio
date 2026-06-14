
"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Brain,
  Award,
  BadgeCheck,
  Database,
  BarChart3,
} from "lucide-react";

const certifications = [
  {
    title: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    icon: Cloud,
    category: "Cloud Computing",
  },
  {
    title: "OCI Foundations Associate",
    issuer: "Oracle",
    icon: Cloud,
    category: "Cloud Computing",
  },
  {
    title: "OCI Generative AI Professional",
    issuer: "Oracle",
    icon: Brain,
    category: "Artificial Intelligence",
  },
  {
    title: "Google Project Management Professional",
    issuer: "Google",
    icon: Award,
    category: "Project Management",
  },
  {
    title: "Getting Started with Data Science",
    issuer: "IBM",
    icon: Database,
    category: "Data Science",
  },
  {
    title: "Data Analytics Program",
    issuer: "Godrej Infotech",
    icon: BarChart3,
    category: "Data Analytics",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="min-h-screen bg-[#0A0A0A] py-12 sm:py-16 md:py-24 relative overflow-hidden"
    >
      {/* Background Effects */}

      <div className="absolute left-0 top-1/3 w-96 h-96 bg-blue-500/10 blur-[140px] rounded-full" />

      <div className="absolute right-0 bottom-1/3 w-96 h-96 bg-purple-500/10 blur-[140px] rounded-full" />

      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}

        <div className="mb-8 sm:mb-12 md:mb-16">
          <p className="uppercase tracking-[0.2em] sm:tracking-[0.35em] text-blue-500 text-xs sm:text-sm mb-4">
            10 · CERTIFICATIONS
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Certifications &{" "}
            <span className="text-blue-500">
              Credentials
            </span>
          </h2>

          <p className="text-zinc-400 mt-4 sm:mt-6 max-w-3xl text-sm sm:text-base lg:text-lg">
            Industry-recognized certifications across cloud
            computing, artificial intelligence, project management,
            and data analytics.
          </p>
        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 lg:gap-6 mb-10 md:mb-14">

          <StatCard value="20+" label="Certifications" />

          <StatCard value="3" label="Cloud Credentials" />

          <StatCard value="2" label="AI & Data Programs" />

          <StatCard value="4+" label="Technology Domains" />

        </div>

        {/* Certification Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-5 lg:gap-6">

          {certifications.map((cert, index) => {
            const Icon = cert.icon;

            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  bg-white/5
                  border
                  border-white/10
                  rounded-[30px]
                  p-4 sm:p-6 lg:p-8
                  backdrop-blur-xl
                  hover:border-blue-500/40
                  transition-all
                "
              >
                <div
                  className="
                    w-12
                    h-12
                    sm:w-14
                    sm:h-14
                    rounded-2xl
                    bg-blue-500/10
                    border
                    border-blue-500/20
                    flex
                    items-center
                    justify-center
                    mb-4
                    sm:mb-6
                  "
                >
                  <Icon
                    size={28}
                    className="text-blue-500"
                  />
                </div>

                <span className="text-blue-400 text-sm">
                  {cert.category}
                </span>

                <h3 className="text-lg sm:text-xl font-semibold mt-3">
                  {cert.title}
                </h3>

                <p className="text-zinc-400 mt-3">
                  {cert.issuer}
                </p>
              </motion.div>
            );
          })}

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
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 text-center">
      <h3 className="text-2xl sm:text-3xl font-bold text-blue-500">
        {value}
      </h3>

      <p className="text-zinc-400 text-sm mt-2">
        {label}
      </p>
    </div>
  );
}

