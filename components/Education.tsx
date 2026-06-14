
// "use client";

// import { motion } from "framer-motion";

// const education = [
//   {
//     year: "2022 - 2026",
//     title: "BE Computer Engineering",
//     institute: "Sinhgad Institute of Technology, Lonavala",
//     score: "CGPA 8.71",
//     current: true,
//   },
//   {
//     year: "2020 - 2022",
//     title: "Higher Secondary Certificate",
//     institute: "Science Stream",
//     score: "85.83%",
//     current: false,
//   },
//   {
//     year: "2020",
//     title: "Secondary School Certificate",
//     institute: "MSBSHSE",
//     score: "95%",
//     current: false,
//   },
// ];

// export default function Education() {
//   return (
//     <section
//       id="education"
//       className="py-24 bg-[#0A0A0A] relative overflow-hidden"
//     >
//       {/* Glow */}

//       <div className="absolute left-0 top-1/3 w-96 h-96 bg-indigo-500/10 blur-[150px] rounded-full" />

//       <div className="absolute right-0 bottom-1/3 w-96 h-96 bg-purple-500/10 blur-[150px] rounded-full" />

//       <div className="max-w-[1350px] mx-auto px-10 lg:px-14 relative z-10">

//         {/* Heading */}

//         <div className="mb-16">

//           <p className="uppercase tracking-[0.35em] text-indigo-400 text-sm mb-4">
//             04 · EDUCATION
//           </p>

//           <h2 className="text-5xl md:text-6xl font-bold">
//             Academic{" "}
//             <span className="text-indigo-400">
//               Journey
//             </span>
//           </h2>

//         </div>

//         {/* Timeline */}

//         <div className="relative">

//           {/* Vertical Line */}

//           <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-white/10" />

//           <div className="space-y-10">

//             {education.map((item, index) => (

//               <motion.div
//                 key={item.year}
//                 initial={{
//                   opacity: 0,
//                   x: -30,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   x: 0,
//                 }}
//                 transition={{
//                   delay: index * 0.15,
//                 }}
//                 viewport={{
//                   once: true,
//                 }}
//                 className="relative pl-14"
//               >

//                 {/* Timeline Dot */}

//                 <div
//                   className={`
//                   absolute
//                   left-0
//                   top-4
//                   h-8
//                   w-8
//                   rounded-full
//                   border-4
//                   ${
//                     item.current
//                       ? "border-indigo-500 bg-indigo-500/20"
//                       : "border-white/20 bg-white/5"
//                   }
//                   `}
//                 />

//                 {/* Card */}

//                 <div
//                   className="
//                   bg-white/5
//                   border
//                   border-white/10
//                   rounded-[24px]
//                   p-6
//                   backdrop-blur-xl
//                   hover:border-indigo-500/40
//                   transition-all
//                   duration-300
//                   "
//                 >

//                   <p className="text-indigo-400 text-sm font-medium mb-2">
//                     {item.year}
//                   </p>

//                   <h3 className="text-2xl font-bold">
//                     {item.title}
//                   </h3>

//                   <p className="text-zinc-400 mt-2">
//                     {item.institute}
//                   </p>

//                   <div className="mt-4 inline-flex px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm">
//                     {item.score}
//                   </div>

//                 </div>

//               </motion.div>

//             ))}

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";

const education = [
{
year: "2022 - 2026",
title: "BE Computer Engineering",
institute: "Sinhgad Institute of Technology, Lonavala",
score: "CGPA 8.71",
current: true,
},
{
year: "2020 - 2022",
title: "Higher Secondary Certificate",
institute: "Science Stream",
score: "85.83%",
current: false,
},
{
year: "2020",
title: "Secondary School Certificate",
institute: "MSBSHSE",
score: "95%",
current: false,
},
];

export default function Education() {
return ( <section
   id="education"
   className="py-12 sm:py-16 md:py-24 bg-[#0A0A0A] relative overflow-hidden"
 > 


  <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

    {/* Heading */}

    <div className="mb-12">

      <p className="uppercase tracking-[0.2em] sm:tracking-[0.35em] text-indigo-400 text-xs sm:text-sm mb-4">
        04 · EDUCATION
      </p>

      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
        Academic{" "}
        <span className="text-indigo-400">
          Journey
        </span>
      </h2>

      <p className="text-zinc-400 mt-4 md:mt-6 max-w-3xl text-sm sm:text-base lg:text-lg">
        Strong academic foundation in Computer Engineering with
        focus on software development, cloud computing,
        automation, databases, artificial intelligence,
        and system design.
      </p>

    </div>

    {/* Academic Stats */}

    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 md:mb-16">

      <Stat value="8.71" label="CGPA" />

      <Stat value="2026" label="Graduation" />

      <Stat value="95%" label="SSC" />

      <Stat value="85.83%" label="HSC" />

    </div>

    {/* Timeline */}

    <div className="relative">

      <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-white/10" />

      <div className="space-y-5 sm:space-y-8">

        {education.map((item, index) => (

          <motion.div
            key={item.year}
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: index * 0.15,
            }}
            viewport={{
              once: true,
            }}
            className="relative pl-12 sm:pl-14"
          >

            {/* Timeline Dot */}

            <div
              className={`
              absolute
              left-0
              top-4
              h-6
w-6
sm:h-8
sm:w-8
              rounded-full
              border-4
              ${
                item.current
                  ? "border-indigo-500 bg-indigo-500 shadow-lg shadow-indigo-500/30"
                  : "border-white/20 bg-white/5"
              }
              `}
            />

            {/* Card */}

            <div
              className="
              bg-white/5
              border
              border-white/10
              rounded-2xl
p-4
sm:p-5
              backdrop-blur-xl
              hover:border-indigo-500/40
              transition-all
              duration-300
              "
            >

              <p className="text-indigo-400 text-sm font-medium mb-2">
                {item.year}
              </p>

              {item.current && (
                <div
                  className="
                  inline-flex
                  px-3
                  py-1
                  rounded-full
                  bg-green-500/10
                  border
                  border-green-500/20
                  text-green-400
                  text-xs
                  mb-3
                  "
                >
                  Current
                </div>
              )}

              <h3 className="text-lg sm:text-xl font-bold">
                {item.title}
              </h3>

              <p className="text-zinc-400 mt-2">
                {item.institute}
              </p>

              <div
                className="
                mt-4
                inline-flex
                px-2
py-1
                rounded-full
                bg-indigo-500/10
                border
                border-indigo-500/20
                text-indigo-400
                text-xs
                "
              >
                {item.score}
              </div>

              {item.current && (
                <div className="flex flex-wrap gap-2 mt-5">

                  {[
                    
                  ].map((course) => (
                    <span
                      key={course}
                      className="
                      px-3
                      py-1
                      rounded-full
                      bg-white/5
                      border
                      border-white/10
                      text-xs
                      "
                    >
                      {course}
                    </span>
                  ))}

                </div>
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

function Stat({
value,
label,
}: {
value: string;
label: string;
}) {
return ( <div
   className="
   bg-white/5
   border
   border-white/10
rounded-xl sm:rounded-2xl
p-3 sm:p-5
   text-center
   backdrop-blur-xl
   hover:border-indigo-500/40
   transition-all
   duration-300
   "
 > <h3 className="text-2xl sm:text-3xl font-black text-indigo-400">
{value} </h3>


  <p className="text-zinc-400 text-sm mt-1">
    {label}
  </p>
</div>


);
}
