"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const move = (e: MouseEvent) => {
      if (cursor) cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#0b0d10]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Loading…
        </motion.div>
      </div>
    );
  }

  return (
    <>
      {/* Cursor */}
      <div
        id="cursor"
        className="pointer-events-none fixed top-0 left-0 z-[999] w-4 h-4 rounded-full bg-cyan-400/70 blur-sm mix-blend-screen"
      />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-black/40 border-b border-white/10">
        <div className="flex justify-between items-center px-6 md:px-16 py-4">
          <span className="font-bold text-white">Sakshat</span>
          <div className="flex gap-6 text-slate-300">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a
              href="https://www.linkedin.com/in/sakshat-keote/"
              target="_blank"
              className="hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </nav>

      <main className="px-6 md:px-16 pt-28 text-slate-100">

        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-12 min-h-[80vh] items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white">
              Sakshat{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Keote
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-300 max-w-xl">
              AI Automation & Web Experience Developer crafting intelligent,
              high-performance digital experiences.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="#projects" className="px-6 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white">
                View Projects
              </a>
              <a
                href="mailto:sakshatkeote17@gmail.com"
                className="px-6 py-4 rounded-2xl border border-slate-600 text-slate-200 hover:bg-slate-800"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* IMAGE */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-indigo-500/30 to-cyan-500/30 blur-3xl" />
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img src="/profile.jpg" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-32">
          <h2 className="text-4xl font-semibold mb-10">Selected Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["Smart Parking System", "Web-based automated parking solution"],
              ["DSA Visualizer", "Interactive algorithm visualization platform"],
              ["ContractIQ", "LLM-powered legal assistant"],
            ].map(([title, desc]) => (
              <motion.div
                key={title}
                whileHover={{ y: -10 }}
                className="p-6 rounded-3xl bg-[#111318] border border-slate-800 hover:border-cyan-400/40"
              >
                <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
                <p className="text-slate-400">{desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-40 mb-24 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Let’s build something impactful
          </h2>
          <p className="text-slate-400 mb-8">
            Open for freelance, internships & collaborations.
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="mailto:sakshatkeote17@gmail.com"
              className="px-8 py-5 rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/sakshat-keote/"
              target="_blank"
              className="px-8 py-5 rounded-2xl border border-slate-600 text-slate-200 hover:bg-slate-800"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
