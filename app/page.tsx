// import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
// import Stats from "@/components/Stats";
// import About from "@/components/About";
// import Skills from "@/components/Skills";
// import Education from "@/components/Education";
// import Achievements from "@/components/Achievements";
// import Experience from "@/components/Experience";
// import Projects from "@/components/Projects";
// import Certifications from "@/components/Certifications";
// import Research from "@/components/Research";
// import Leadership from "@/components/Leadership";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";

// export default function Home() {
//   return (
//     <main className="bg-[#0A0A0A] text-white overflow-x-hidden">

//       <Navbar />

//       {/* 01 Home */}
//       <Hero />

//       {/* 02 Stats */}
//       <Stats />

//       {/* 03 About */}
//       <About />

//       {/* 04 Skills */}
//       <Skills />

//       {/* 05 Education */}
//       <Education />

//       {/* 06 Achievements */}
//       <Achievements />

//       {/* 07 Internships */}
//       <Experience />

//       {/* 08 Projects */}
//       <Projects />

//       {/* 09 Certifications */}
//       <Certifications />

//       {/* 10 Research & Patents */}
//       <Research />

//       {/* 11 Leadership */}
//       <Leadership />

//       {/* 12 Contact */}
//       <Contact />

//       <Footer />

//     </main>
//   );
// }
import dynamic from "next/dynamic";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Experience from "@/components/Experience";

const Projects = dynamic(
  () => import("@/components/Projects")
);

const Certifications = dynamic(
  () => import("@/components/Certifications")
);

const Research = dynamic(
  () => import("@/components/Research")
);

const Leadership = dynamic(
  () => import("@/components/Leadership")
);

const Contact = dynamic(
  () => import("@/components/Contact")
);

const Footer = dynamic(
  () => import("@/components/Footer")
);

export default function Home() {
  return (
    <main className="bg-[#0A0A0A] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Education />
      <Achievements />
      <Experience />
      <Projects />
      <Certifications />
      <Research />
      <Leadership />
      <Contact />
      <Footer />
    </main>
  );
}