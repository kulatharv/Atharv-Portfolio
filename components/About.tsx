
// "use client";

// import { motion } from "framer-motion";
// import {
//   MapPin,
//   GraduationCap,
//   Briefcase,
//   Code2,
// } from "lucide-react";

// export default function About() {
//   return (
//     <section
//       id="about"
//       className="h-screen bg-[#0A0A0A] flex items-center overflow-hidden"
//     >
//         <div className="absolute left-0 top-1/3 w-96 h-96 bg-indigo-500/10 blur-[150px] rounded-full" />

//         <div className="absolute right-0 bottom-1/3 w-96 h-96 bg-purple-500/10 blur-[150px] rounded-full" />
//       <div className="max-w-[1400px] mx-auto px-8 w-full">

//         {/* Heading */}

//         <div className="mb-10">
//           <p className="uppercase tracking-[0.35em] text-blue-500 text-sm mb-4">
//             01 · ABOUT ME
//           </p>

//           <h2 className="text-6xl md:text-7xl font-bold leading-none">
//             Who I <span className="text-blue-500">Am</span>
//           </h2>
//         </div>

//         {/* Main Grid */}

//         <div className="grid lg:grid-cols-[380px_1fr] gap-8">

//           {/* LEFT COLUMN */}

//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="space-y-4"
//           >

//             {/* Profile Card */}

//             <div className="h-[430px] rounded-[32px] overflow-hidden relative border border-white/10 bg-gradient-to-br
// from-white/10
// to-white/5">

//               <img
//                 src="/profile.jpg"
//                 alt="Atharv Kulkarni"
//                 className="w-full h-full object-cover"
//               />

//               <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-xl rounded-2xl p-5 border border-white/10">

//                 <h3 className="text-2xl font-bold text-white">
//                   Atharv Kulkarni
//                 </h3>

//                 <p className="text-blue-400 text-xs uppercase tracking-[0.2em] mt-2">
//                   Software Engineer • QA Automation
//                 </p>

//               </div>
//             </div>

//             {/* Stats */}

//             <div className="grid grid-cols-2 gap-4">

//               <StatCard
//                 icon={<MapPin size={16} />}
//                 title="Location"
//                 value="Pune"
//               />

//               <StatCard
//                 icon={<GraduationCap size={16} />}
//                 title="CGPA"
//                 value="8.71"
//               />

//               <StatCard
//                 icon={<Briefcase size={16} />}
//                 title="Internships"
//                 value="3+"
//               />

//               <StatCard
//                 icon={<Code2 size={16} />}
//                 title="Projects"
//                 value="10+"
//               />

//             </div>

//           </motion.div>

//           {/* RIGHT COLUMN */}

//           <div className="space-y-4">

//             {/* Professional Summary */}

//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="h-[195px] rounded-[32px] border border-white/10 bg-gradient-to-br
// from-white/10
// to-white/5 p-8 backdrop-blur-xl"
//             >
//               <h3 className="text-3xl font-bold mb-4">
//                 Professional Summary
//               </h3>

//               <p className="text-zinc-400 leading-7">
//                 Final-year Computer Engineering student specializing in
//                 Software Development, QA Automation, API Testing, and
//                 Backend Engineering.
//               </p>

//               <p className="text-zinc-400 leading-7 mt-3">
//                 Experienced with Python, Java, FastAPI, Selenium,
//                 PyTest, SQL, React, PHP, and cloud technologies.
//               </p>

//             </motion.div>

//             {/* Feature Cards */}

//             <div className="grid grid-cols-3 gap-4">

//               <FeatureCard
//                 title="Build & Learn"
//                 text="Every concept becomes a practical project."
//               />

//               <FeatureCard
//                 title="Quality First"
//                 text="Reliable software starts with testing."
//               />

//               <FeatureCard
//                 title="Engineering Mindset"
//                 text="Scalable solutions over quick fixes."
//               />

//             </div>

//             {/* Quote Card */}

//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               className="h-[140px] rounded-[32px] border border-white/10 bg-gradient-to-br
// from-white/10
// to-white/5 border-l-4 border-l-blue-500 p-8 flex flex-col justify-center"
//             >
//               <p className="italic text-lg text-zinc-300">
//                 "Great software is built through continuous learning,
//                 disciplined engineering and problem solving."
//               </p>

//               <p className="mt-3 text-blue-500 uppercase tracking-[0.2em] text-xs">
//                 ATHARV'S ENGINEERING PHILOSOPHY
//               </p>

//             </motion.div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// function StatCard({
//   icon,
//   title,
//   value,
// }: {
//   icon: React.ReactNode;
//   title: string;
//   value: string;
// }) {
//   return (
//     <div className="h-[90px] rounded-2xl border border-white/10 bg-gradient-to-br
// from-white/10
// to-white/5 p-4 hover:border-blue-500/40 transition">

//       <div className="text-blue-500 mb-2">
//         {icon}
//       </div>

//       <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-500">
//         {title}
//       </p>

//       <p className="font-semibold text-white mt-1">
//         {value}
//       </p>

//     </div>
//   );
// }

// function FeatureCard({
//   title,
//   text,
// }: {
//   title: string;
//   text: string;
// }) {
//   return (
//     <div className="h-[165px] rounded-[28px] border border-white/10 bg-gradient-to-br
// from-white/10
// to-white/5 p-6 backdrop-blur-xl hover:border-blue-500/40 transition">

//       <div className="w-10 h-[2px] bg-blue-500 mb-5" />

//       <h4 className="text-xl font-semibold mb-3">
//         {title}
//       </h4>

//       <p className="text-zinc-400 text-sm leading-6">
//         {text}
//       </p>

//     </div>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-12 sm:py-16 md:py-24 bg-[#0A0A0A] relative overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-1/3 w-96 h-96 bg-indigo-500/10 blur-[150px] rounded-full" />

      <div className="absolute right-0 bottom-1/3 w-96 h-96 bg-purple-500/10 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}

        <div className="mb-8 sm:mb-10">

          <p className="uppercase tracking-[0.2em] sm:tracking-[0.35em] text-indigo-400 text-xs sm:text-sm mb-4">
            02 · ABOUT ME
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Who I <span className="text-indigo-400">Am</span>
          </h2>

        </div>

<div className="grid lg:grid-cols-[1.45fr_0.65fr] gap-3 sm:gap-5 lg:gap-6">
          {/* LEFT COLUMN */}

          <div className="space-y-4 sm:space-y-6">

            {/* Professional Summary */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="
              rounded-[32px]
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-4 sm:p-6
              "
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                Professional Summary
              </h3>

              <p className="text-zinc-400 text-sm sm:text-base leading-7 sm:leading-8">
                Final-year Computer Engineering student with hands-on
                experience in Software Development, QA Automation,
                API Testing, and Backend Engineering.
              </p>

              <p className="text-zinc-400 text-sm sm:text-base leading-7 sm:leading-8 mt-4">
                Through internships, projects, research, and leadership
                initiatives, I have built scalable applications,
                automation frameworks, and AI-powered solutions while
                developing a strong foundation in problem-solving,
                quality engineering, and system design.
              </p>

              <p className="text-zinc-400 text-sm sm:text-base leading-7 sm:leading-8 mt-4">
                Currently seeking Software Engineer, QA Engineer,
                SDET, and Backend Developer opportunities.
              </p>

            </motion.div>

            {/* Core Strengths */}

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-6 mt-5">
              <StrengthCard
                title="Problem Solving"
                text="Approach challenges analytically and transform complex requirements into practical solutions."
              />

              <StrengthCard
                title="Automation Focus"
                text="Leverage automation, testing, and engineering practices to improve software quality."
              />

              <StrengthCard
                title="Scalable Systems"
                text="Build maintainable and scalable systems that deliver long-term value and reliability."
              />

            </div>

          </div>

          {/* RIGHT COLUMN */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
            rounded-[32px]
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-4 sm:p-6
            h-fit
            "
          >

            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
              What I Bring
            </h3>

            <div className="space-y-4 sm:space-y-5">

              <Feature text="Software Development" />
              <Feature text="QA Automation & Testing" />
              <Feature text="Backend Engineering" />
              <Feature text="API Design & Integration" />
              <Feature text="Research & Innovation" />
              <Feature text="Leadership & Team Collaboration" />

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

function StrengthCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="
      rounded-[28px]
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-4 sm:p-6
      hover:border-indigo-500/40
      transition-all
      duration-300
      "
    >
      <div className="w-12 h-[3px] bg-gradient-to-r from-indigo-500 to-purple-500 mb-5" />

      <h4 className="text-lg sm:text-xl font-semibold mb-3">
        {title}
      </h4>

      <p className="text-zinc-400 text-sm leading-7">
        {text}
      </p>

    </motion.div>
  );
}

function Feature({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-4">

      <CheckCircle2
        size={18}
        className="text-indigo-400 flex-shrink-0"
      />

      <span className="text-zinc-300 text-sm sm:text-base">
        {text}
      </span>

    </div>
  );
}

