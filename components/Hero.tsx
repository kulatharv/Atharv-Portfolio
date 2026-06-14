"use client";

import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
        className="relative min-h-screen flex items-center overflow-hidden pt-24 py-12 sm:py-16 md:py-24"
    >
        {/* Grid Background */}

<div
  className="absolute inset-0 opacity-[0.03]"
  style={{
    backgroundImage:
      "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
    backgroundSize: "60px 60px",
  }}
/>

{/* Blue Orb */}

{/* <div className="absolute top-20 left-20 w-96 h-96 bg-indigo-500/20 blur-[150px] rounded-full" /> */}
<div className="absolute top-20 left-0 w-48 h-48 md:w-96 md:h-96 bg-indigo-500/20 blur-[80px] md:blur-[150px] rounded-full" />
{/* Purple Orb */}

{/* <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 blur-[150px] rounded-full" /> */}
<div className="absolute bottom-20 right-0 w-48 h-48 md:w-96 md:h-96 bg-purple-500/20 blur-[80px] md:blur-[150px] rounded-full" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* <div className="grid lg:grid-cols-2 gap-16 items-center"> */}
<div
  className="
  grid
  lg:grid-cols-2
  gap-8
  lg:gap-16
  items-center
"
>
          {/* LEFT */}

          <div>

            <span className="inline-flex items-center px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm">
              Available for Opportunities
            </span>

            <h1
  className="
  mt-8
  text-4xl
  sm:text-5xl
  md:text-7xl
  lg:text-8xl
  font-bold
  leading-[0.9]
  tracking-tight
"
>
              Atharv
              <br />
              Kulkarni
            </h1>

            {/* <div className="text-blue-500 text-3xl mt-6 font-semibold h-12"> */}
            <div
  className="
  text-blue-500
  text-xl
  sm:text-2xl
  md:text-3xl
   mt-6
  font-semibold
  min-h-8
  sm:min-h-10
"
>
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  2000,
                  "QA Automation Engineer",
                  2000,
                  "Backend Developer",
                  2000,
                  "AI Systems Developer",
                  2000,
                ]}
                repeat={Infinity}
              />

            </div>
  
            {/* <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 blur-[140px] rounded-full" /> */}
                <div className="absolute top-20 left-0 w-48 h-48 md:w-96 md:h-96 bg-blue-500/20 blur-[80px] md:blur-[140px] rounded-full" />
<div className="absolute bottom-20 right-0 w-48 h-48 md:w-96 md:h-96 bg-violet-500/20 blur-[80px] md:blur-[140px] rounded-full" />
            
                     
            <p className="mt-8 text-zinc-400 text-base sm:text-lg max-w-xl leading-7 sm:leading-8">
              Building scalable software applications,
              automation frameworks and AI-powered
              solutions that solve real-world problems.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-10">

                <button
  onClick={() => {
    const projects = document.querySelector("#projects");

    if (projects) {
      projects.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }}
  className="
    relative z-20
    px-6 sm:px-8 py-3 sm:py-4
    rounded-2xl
    bg-gradient-to-r
    from-indigo-500
    to-purple-500
    hover:scale-105
    transition
  "
>
  View Projects
</button>

<a
  href="/AtharvKulkarni.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="
    relative z-50
    inline-block
    px-6
    sm:px-8
    py-3
    sm:py-4
    rounded-2xl
    border
    border-white/10
    hover:border-indigo-500
    hover:bg-white/5
    transition
    inline-block
  "
>
  View Resume
</a>
            </div>

<div className="flex items-center gap-5 sm:gap-6 mt-8 sm:mt-10 text-zinc-400 relative z-50">
  <a
    href="https://github.com/kulatharv"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub
      size={24}
      className="hover:text-white transition duration-300 hover:scale-110 cursor-pointer"
    />
  </a>

  <a
    href="https://www.linkedin.com/in/atharvkul02"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin
      size={24}
      className="hover:text-blue-400 transition duration-300 hover:scale-110 cursor-pointer"
    />
  </a>

  <a
  href="mailto:atharvkul02@gmail.com"
  aria-label="Send Email to Atharv Kulkarni"
>
    <HiOutlineMail
      size={24}
      className="hover:text-purple-400 transition duration-300 hover:scale-110 cursor-pointer"
    />
  </a>

</div>
<div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8 text-zinc-500 text-sm flex-wrap relative">

  <a
    href="https://github.com/kulatharv"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition"
  >
    GitHub
  </a>

  <span>•</span>

  <a
    href="https://www.linkedin.com/in/atharvkul02"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-400 transition"
  >
    LinkedIn
  </a>

  <span>•</span>

  <a
    href="mailto:atharvkul02@gmail.com"
    className="hover:text-purple-400 transition"
  >
    Email
  </a>

  <span></span>

  <span>Pune, Maharashtra, India</span>

</div>
                
          </div>

          {/* RIGHT */}

          <div className="relative">

            <div className="
relative
rounded-[40px]
border
border-white/10
bg-gradient-to-br
from-white/10
to-white/5
backdrop-blur-xl
p-4 sm:p-6 lg:p-8
shadow-2xl
">
                    {/* <FloatingPill
                    text="Python"
                    className="top-10 -left-6"
                    />

                    <FloatingPill
                    text="FastAPI"
                    className="top-24 -right-8"
                    />

                    <FloatingPill
                    text="React"
                    className="bottom-24 -left-8"
                    />

                    <FloatingPill
                    text="QA Automation"
                    className="top-0 left-1/2"
                    />

                    <FloatingPill
                    text="AI Systems"
                    className="bottom-10 -right-6"
                    /> */}
{/* <Image
  src="/profile.png"
  alt="Atharv Kulkarni Profile Photo"
  width={700}
  height={800}
  priority
  className="
w-full
h-[350px]
sm:h-[450px]
lg:h-[560px]
object-cover
rounded-[28px]
hover:scale-[1.02]
transition
duration-500
"
/> */}
<Image
  src="/profile.png"
  alt="Atharv Kulkarni Profile Photo"
  width={700}
  height={800}
  priority
  className="
w-full
h-[320px]
sm:h-[420px]
md:h-[500px]
lg:h-[560px]
object-cover
rounded-[28px]
hover:scale-[1.02]
transition
duration-500
"
/>

              {/* <div className="grid grid-cols-2 gap-4 mt-6">

                <Stat value="3+" label="Internships" />
                <Stat value="10+" label="Projects" />
                <Stat value="15+" label="Certificates" />
                <Stat value="8.71" label="CGPA" />

              </div> */}

            </div>

          </div>

        </div>

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
    <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">
      <h3 className="text-2xl font-bold text-blue-500">
        {value}
      </h3>

      <p className="text-sm text-zinc-400">
        {label}
      </p>
    </div>
  );
}
function FloatingPill({
  text,
  className,
}: {
  text: string;
  className: string;
}) {
  return (
    <div
      className={`
      absolute
      ${className}
      px-4
      py-2
      rounded-full
      bg-black/60
      border
      border-white/10
      backdrop-blur-xl
      text-sm
      `}
    >
      {text}
    </div>
  );
}

// "use client";

// import { motion } from "framer-motion";
// import {
//   FaGithub,
//   FaLinkedin,
// } from "react-icons/fa";

// import { HiOutlineMail } from "react-icons/hi";

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center overflow-hidden pt-24 bg-[#0A0A0A]"
//     >
//       {/* Grid */}

//       <div
//         className="absolute inset-0 opacity-[0.03]"
//         style={{
//           backgroundImage:
//             "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
//           backgroundSize: "60px 60px",
//         }}
//       />

//       {/* Glow */}

//       <div className="absolute top-20 left-20 w-[450px] h-[450px] bg-indigo-500/20 blur-[180px] rounded-full" />

//       <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-purple-500/20 blur-[180px] rounded-full" />

//       <div className="max-w-[1400px] mx-auto px-8 w-full relative z-10">

//         <div className="grid lg:grid-cols-2 gap-20 items-center">

//           {/* LEFT */}

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//           >
//             <div
//               className="
//               inline-flex
//               items-center
//               gap-2
//               px-4
//               py-2
//               rounded-full
//               border
//               border-green-500/20
//               bg-green-500/10
//               text-green-400
//               text-sm
//             "
//             >
//               <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
//               Available For Opportunities
//             </div>

//             <h1
//               className="
//               mt-8
//               text-6xl
//               md:text-8xl
//               font-black
//               leading-[0.9]
//               tracking-tight
//             "
//             >
//               Atharv
//               <br />
//               <span className="text-white/90">
//                 Kulkarni
//               </span>
//             </h1>

//             <h2
//               className="
//               mt-8
//               text-xl
//               md:text-3xl
//               font-semibold
//               bg-gradient-to-r
//               from-indigo-400
//               to-purple-400
//               bg-clip-text
//               text-transparent
//             "
//             >
//               Software Engineer · QA Automation Engineer · Backend Developer
//             </h2>

//             <p
//               className="
//               mt-8
//               text-zinc-400
//               text-lg
//               leading-8
//               max-w-2xl
//             "
//             >
//               Building scalable software applications,
//               automation frameworks, backend systems,
//               and AI-powered solutions that solve real-world
//               problems through engineering excellence.
//             </p>

//             {/* Achievement Pills */}

//             <div className="flex flex-wrap gap-3 mt-8">
//               <Pill text="3+ Internships" />
//               <Pill text="10+ Projects" />
//               <Pill text="20+ Certifications" />
//               <Pill text="3 Research Papers" />
//               <Pill text="50+ Events Led" />
//             </div>

//             {/* CTA */}

//             <div className="flex flex-wrap gap-4 mt-10">

//               <a
//                 href="#projects"
//                 className="
//                 px-8
//                 py-4
//                 rounded-2xl
//                 bg-gradient-to-r
//                 from-indigo-500
//                 to-purple-500
//                 hover:scale-105
//                 transition
//                 duration-300
//                 font-medium
//               "
//               >
//                 View Projects →
//               </a>

//               <a
//                 href="/resume.pdf"
//                 className="
//                 px-8
//                 py-4
//                 rounded-2xl
//                 border
//                 border-white/10
//                 hover:border-indigo-500
//                 hover:bg-white/5
//                 transition
//               "
//               >
//                 Download Resume ↓
//               </a>

//             </div>

//             {/* Social */}

//             <div className="flex items-center gap-6 mt-10">

//               <a href="https://github.com/kulatharv">
//                 <FaGithub
//                   size={24}
//                   className="text-zinc-400 hover:text-white transition"
//                 />
//               </a>

//               <a href="#">
//                 <FaLinkedin
//                   size={24}
//                   className="text-zinc-400 hover:text-blue-400 transition"
//                 />
//               </a>

//               <a href="mailto:atharvkul02@gmail.com">
//                 <HiOutlineMail
//                   size={24}
//                   className="text-zinc-400 hover:text-purple-400 transition"
//                 />
//               </a>

//             </div>

//             <p className="text-zinc-500 mt-8">
//               Open to Software Engineer, QA Engineer,
//               Backend Developer and SDET roles.
//             </p>

//           </motion.div>

//           {/* RIGHT */}

//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="relative"
//           >
//             {/* Floating Cards */}

//             <FloatingCard
//               className="-left-10 top-16"
//               title="CGPA"
//               value="8.71"
//             />

//             <FloatingCard
//               className="-right-10 top-24"
//               title="Research"
//               value="3 Papers"
//             />

//             <FloatingCard
//               className="-left-10 bottom-16"
//               title="Experience"
//               value="3 Internships"
//             />

//             <FloatingCard
//               className="-right-10 bottom-20"
//               title="Status"
//               value="Available"
//             />

//             {/* Main Image */}

//             <div
//               className="
//               relative
//               rounded-[40px]
//               overflow-hidden
//               border
//               border-white/10
//               bg-white/5
//               backdrop-blur-xl
//               p-4
//             "
//             >
//               <img
//                 src="/profile.png"
//                 alt="Atharv Kulkarni"
//                 className="
//                 w-full
//                 h-[650px]
//                 object-cover
//                 rounded-[30px]
//               "
//               />

//               <div
//                 className="
//                 absolute
//                 bottom-6
//                 left-6
//                 right-6
//                 bg-black/50
//                 backdrop-blur-xl
//                 border
//                 border-white/10
//                 rounded-2xl
//                 p-5
//               "
//               >
//                 <p className="text-sm text-zinc-400">
//                   Focus Areas
//                 </p>

//                 <div className="flex flex-wrap gap-2 mt-3">
//                   <TechTag text="Java" />
//                   <TechTag text="Python" />
//                   <TechTag text="FastAPI" />
//                   <TechTag text="React" />
//                   <TechTag text="Selenium" />
//                   <TechTag text="Docker" />
//                 </div>
//               </div>

//             </div>

//           </motion.div>

//         </div>

//       </div>
//     </section>
//   );
// }

// function Pill({ text }: { text: string }) {
//   return (
//     <span
//       className="
//       px-4
//       py-2
//       rounded-full
//       bg-white/5
//       border
//       border-white/10
//       text-zinc-300
//       text-sm
//     "
//     >
//       {text}
//     </span>
//   );
// }

// function TechTag({ text }: { text: string }) {
//   return (
//     <span
//       className="
//       px-3
//       py-1
//       rounded-full
//       bg-indigo-500/10
//       border
//       border-indigo-500/20
//       text-indigo-400
//       text-sm
//     "
//     >
//       {text}
//     </span>
//   );
// }

// function FloatingCard({
//   title,
//   value,
//   className,
// }: {
//   title: string;
//   value: string;
//   className: string;
// }) {
//   return (
//     <div
//       className={`
//       absolute
//       hidden
//       xl:block
//       z-20
//       ${className}
//       bg-white/5
//       backdrop-blur-xl
//       border
//       border-white/10
//       rounded-2xl
//       px-5
//       py-4
//       `}
//     >
//       <p className="text-zinc-500 text-xs">
//         {title}
//       </p>

//       <p className="font-semibold mt-1">
//         {value}
//       </p>
//     </div>
//   );
// }
