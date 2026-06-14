"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  Briefcase,
  Rocket,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#0A0A0A] py-12 sm:py-16 md:py-24 relative overflow-hidden flex items-center"
    >
      {/* Background Effects */}

      <div className="absolute left-0 top-1/3 w-96 h-96 bg-blue-500/10 blur-[140px] rounded-full" />

      <div className="absolute right-0 bottom-1/3 w-96 h-96 bg-purple-500/10 blur-[140px] rounded-full" />

      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <p className="uppercase tracking-[0.2em] sm:tracking-[0.35em] text-blue-500 text-xs sm:text-sm mb-4">
            12 · CONTACT
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
            Let's Build Something
            <span className="text-blue-500">
              {" "}Amazing
            </span>
          </h2>

          <p className="text-zinc-400 mt-4 sm:mt-6 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg">
            Actively seeking opportunities in Software Development,
            QA Automation, Backend Engineering, and AI-powered systems.
          </p>
        </motion.div>

        {/* Availability Banner */}

        <div className="flex justify-center mb-8 sm:mb-12">

          <div
            className="
            px-4
            sm:px-6
            py-3
            rounded-full
            bg-green-500/10
            border
            border-green-500/20
            text-green-400
            flex
            items-center
            gap-2
            sm:gap-3
            text-sm
            sm:text-base
          "
          >
            <Briefcase size={18} />
            Available for Full-Time Opportunities
          </div>

        </div>

        {/* Main Card */}

        <div
          className="
          rounded-[40px]
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          p-4 sm:p-6 lg:p-10
        "
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Left Side */}

            <div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                Contact Information
              </h3>

              <div className="space-y-5 sm:space-y-7">

                <InfoItem
                  icon={<Mail size={22} />}
                  title="Email"
                  value="atharvkul02@gmail.com"
                />

                <InfoItem
                  icon={<Phone size={22} />}
                  title="Phone"
                  value="+91 9850779890"
                />

                <InfoItem
                  icon={<MapPin size={22} />}
                  title="Location"
                  value="Pune, Maharashtra, India"
                />

              </div>

              {/* Quick Stats

              <div className="grid grid-cols-2 gap-4 mt-10">

                <StatCard
                  value="10+"
                  label="Projects"
                />

                <StatCard
                  value="3"
                  label="Research Papers"
                />

                <StatCard
                  value="50+"
                  label="Events Led"
                />

                <StatCard
                  value="20+"
                  label="Certifications"
                />

              </div> */}

            </div>

            {/* Right Side */}

            <div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                Connect With Me
              </h3>

              <p className="text-zinc-400 text-sm sm:text-base leading-7 mb-6 sm:mb-8">
                Whether it's software engineering, QA automation,
                research collaborations, internships, or exciting
                technical opportunities, I'd love to connect.
              </p>

              <div className="flex gap-4 sm:gap-5 mb-8 sm:mb-10">

                <a
                  href="https://github.com/kulatharv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-12
                    h-12
                    sm:w-14
                    sm:h-14
                    rounded-full
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    hover:border-blue-500
                    transition
                  "
                >
                  <FaGithub size={22} />
                </a>

                <a
                  href="https://www.linkedin.com/in/atharvkul02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-12
                    h-12
                    sm:w-14
                    sm:h-14
                    rounded-full
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    hover:border-blue-500
                    transition
                  "
                >
                  <FaLinkedin size={22} />
                </a>

              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4">

                <a
                  href="/Atharvkulkarni.pdf"
                  className="
                    px-4
                    sm:px-6
                    py-3
                    sm:py-4
                    rounded-xl
                    bg-blue-600
                    hover:bg-blue-700
                    transition
                    flex
                    items-center
                    gap-3
                  "
                >
                  <Download size={18} />
                  Download Resume
                </a>

                <a
                  href="mailto:atharvkul02@gmail.com"
                  className="
                    px-4
                    sm:px-6
                    py-3
                    sm:py-4
                    rounded-xl
                    border
                    border-white/10
                    hover:border-blue-500
                    transition
                    flex
                    items-center
                    gap-3
                  "
                >
                  <Rocket size={18} />
                  Let's Connect
                </a>

              </div>

            </div>

          </div>
        </div>

        {/* Footer */}

        <div className="text-center mt-8 sm:mt-12">

          <p className="text-zinc-500 text-sm sm:text-base">
            © 2026 Atharv Kulkarni · Software Engineer · QA Automation Engineer · Research Enthusiast
          </p>

        </div>

      </div>
    </section>
  );
}

function InfoItem({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 sm:gap-5 min-w-0">
      <div className="text-blue-500">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-zinc-500 text-sm">
          {title}
        </p>

        <p className="text-base sm:text-lg font-medium break-words">
          {value}
        </p>
      </div>
    </div>
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
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
      <h3 className="text-2xl font-bold text-blue-500">
        {value}
      </h3>

      <p className="text-zinc-400 text-sm mt-1">
        {label}
      </p>
    </div>
  );
}

