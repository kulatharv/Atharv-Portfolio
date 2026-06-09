
"use client";

import CountUp from "react-countup";

const stats = [
  { value: 3, suffix: "+", label: "Internships" },
  { value: 10, suffix: "+", label: "Projects" },
  { value: 200, suffix: "+", label: "DSA Problems Solved" },
  { value: 8.4, suffix: "+", label: "CGPA" },
  { value: 50, suffix: "+", label: "Events Led" },
  { value: 3, suffix: "+", label: "Research Paper" },
];

export default function Stats() {
  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">

  <p className="uppercase tracking-[0.3em] text-indigo-400 text-sm mb-4">
    QUICK HIGHLIGHTS
  </p>

  <h2 className="text-5xl md:text-6xl font-bold">
    Numbers That Define My Journey
  </h2>

</div>

    <div className="absolute left-1/4 top-10 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full" />

<div className="absolute right-1/4 bottom-0 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full" />
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5">

          {stats.map((item) => (
            <div
              key={item.label}
              className="
group
relative
overflow-hidden
bg-white/5
border
border-white/10
rounded-[28px]
p-8
text-center
backdrop-blur-xl
hover:border-indigo-500/50
transition-all
duration-500
hover:-translate-y-2
"
            >
                <div
  className="
  absolute
  top-0
  left-0
  w-full
  h-[2px]
  bg-gradient-to-r
  from-blue-500
  via-purple-500
  to-indigo-500
  opacity-0
  group-hover:opacity-100
  transition
  "
/>
              <h3 className="
text-4xl
font-black
bg-gradient-to-r
from-blue-400
to-blue-400
bg-clip-text
text-transparent
">
                <CountUp end={item.value} duration={2} />
                {item.suffix}
              </h3>

              <p className="text-zinc-400 mt-2">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
