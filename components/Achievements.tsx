"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Medal,
  BookOpen,
  Globe,
  Users,
  Award,
} from "lucide-react";

const achievements = [
  {
    title: "Best Outgoing Student",
    description:
      "Awarded Best Outgoing Student of Sinhgad Institute of Technology for academic excellence, leadership, research contributions, and campus impact.",
    icon: Trophy,
  },
  {
    title: "UK IPO Design Registration",
    description:
      "Design contributor for an innovation officially registered with the UK Intellectual Property Office (Design No. 6455672, July 2025).",
    icon: Globe,
  },
  {
    title: "Research Paper Reviewer",
    description:
      "Recognized as a reviewer during the IJSART Research Methodology Workshop, contributing to academic research evaluation.",
    icon: BookOpen,
  },
  {
    title: "State Level RMW Coordinator",
    description:
      "Successfully coordinated Research Methodology Workshops at the state level during 2025 and 2026.",
    icon: Medal,
  },
  {
    title: "Best Library User 2025",
    description:
      "Recognized by Sinhgad Institute of Technology for exceptional academic engagement and continuous learning.",
    icon: Award,
  },
  {
    title: "NSS Best Volunteer",
    description:
      "Honored for outstanding contribution to social service, environmental initiatives, and community development programs.",
    icon: Users,
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="min-h-screen bg-[#0A0A0A] py-24 relative overflow-hidden"
    >
      {/* Background Effects */}

      <div className="absolute left-0 top-1/3 w-96 h-96 bg-blue-500/10 blur-[140px] rounded-full" />

      <div className="absolute right-0 bottom-1/3 w-96 h-96 bg-purple-500/10 blur-[140px] rounded-full" />

      <div className="max-w-[1350px] mx-auto px-10 lg:px-14 relative z-10">

        {/* Heading */}

        <div className="mb-16">
          <p className="uppercase tracking-[0.35em] text-blue-500 text-sm mb-4">
            06 · ACHIEVEMENTS
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            Achievements &{" "}
            <span className="text-blue-500">
              Recognition
            </span>
          </h2>

          <p className="text-zinc-400 mt-6 max-w-3xl text-lg">
            Awards, recognitions, academic milestones, and
            contributions that reflect leadership, innovation,
            research excellence, and community impact.
          </p>
        </div>

        {/* Achievement Stats */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">

          <StatCard value="6+" label="Major Achievements" />

          <StatCard value="3" label="Research Papers" />

          <StatCard value="2" label="State Level Roles" />

          <StatCard value="1" label="International Registration" />

        </div>

        {/* Achievement Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {achievements.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
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
                  p-8
                  backdrop-blur-xl
                  hover:border-blue-500/40
                  transition-all
                  duration-300
                "
              >
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
                    mb-6
                  "
                >
                  <Icon
                    size={28}
                    className="text-blue-500"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-zinc-400 leading-7">
                  {item.description}
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
    <div
      className="
        bg-white/5
        border
        border-white/10
        rounded-2xl
        p-5
        text-center
      "
    >
      <h3 className="text-3xl font-bold text-blue-500">
        {value}
      </h3>

      <p className="text-zinc-400 text-sm mt-2">
        {label}
      </p>
    </div>
  );
}