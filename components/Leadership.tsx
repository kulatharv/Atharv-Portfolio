
"use client";

import { motion } from "framer-motion";
import {
  Users,
  HeartHandshake,
  Mountain,
  GraduationCap,
  Megaphone,
  BookOpen,
} from "lucide-react";

const leadership = [
  {
    title: "NSS Student Main Coordinator",
    organization: "Sinhgad Institute of Technology",
    description:
      "Led and coordinated 50+ social, environmental, and community service initiatives involving student volunteers and local communities.",
    icon: Users,
  },

  {
    title: "State Level RMW Coordinator",
    organization: "Research Methodology Workshop",
    description:
      "Managed planning, coordination, and execution of state-level academic and research-focused workshops during 2025 and 2026.",
    icon: GraduationCap,
  },

  {
    title: "NSS Special Winter Camp Coordinator",
    organization: "NSS Unit",
    description:
      "Led volunteer teams during special residential camps focused on rural development, awareness programs, and social service activities.",
    icon: HeartHandshake,
  },

  {
    title: "University Fort Conservation Camp",
    organization: "Rajgad Fort",
    description:
      "Coordinated conservation and cleanliness initiatives while leading student participation in heritage preservation activities.",
    icon: Mountain,
  },

  {
    title: "Sinhgad Techtonic Event Coordinator",
    organization: "Technical Event Management",
    description:
      "Managed planning, publicity, and execution of student technical events and engagement activities.",
    icon: Megaphone,
  },

  {
    title: "IEEE & Library Committee Representative",
    organization: "SIT Student Bodies",
    description:
      "Contributed to student engagement, technical awareness programs, publicity campaigns, and academic development initiatives.",
    icon: BookOpen,
  },
];

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="min-h-screen bg-[#0A0A0A] py-12 sm:py-16 md:py-24 relative overflow-hidden"
    >
      {/* Background Effects */}

      <div className="absolute left-0 top-1/3 w-96 h-96 bg-blue-500/10 blur-[140px] rounded-full" />

      <div className="absolute right-0 bottom-1/3 w-96 h-96 bg-purple-500/10 blur-[140px] rounded-full" />

      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}

        <div className="mb-8 sm:mb-12 md:mb-16">
          <p className="uppercase tracking-[0.2em] sm:tracking-[0.35em] text-blue-500 text-xs sm:text-sm mb-4">
            11 · LEADERSHIP
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Leadership &{" "}
            <span className="text-blue-500">
              Community Impact
            </span>
          </h2>

          <p className="text-zinc-400 mt-4 sm:mt-6 max-w-3xl text-sm sm:text-base lg:text-lg">
            Leadership experiences across student organizations,
            community development programs, research initiatives,
            technical events, and volunteer activities.
          </p>
        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 lg:gap-6 mb-10 md:mb-14">

          <StatCard value="50+" label="Events Led" />

          <StatCard value="4" label="Blood Donation Drives" />

          <StatCard value="2" label="State Level Roles" />

          <StatCard value="1000+" label="Community Impact" />

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-5 lg:gap-6">

          {leadership.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 30,
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

                <p className="text-blue-400 text-sm">
                  {item.organization}
                </p>

                <h3 className="text-lg sm:text-xl font-semibold mt-3">
                  {item.title}
                </h3>

                <p className="text-zinc-400 text-sm sm:text-base mt-4 leading-7">
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

