import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import profile from "../assets/asd.png";
import { Code, Briefcase, Github, Linkedin, ExternalLink, Menu, X, Sun, Moon, Mail, CheckCircle, Loader2, } from "lucide-react";

export default function Portfolio() {
  const EMAILJS_SERVICE = "service_x3a2i6m";
  const EMAILJS_TEMPLATE = "template_7eau2ve";
  const EMAILJS_PUBLIC_KEY = "gYBZNlFsdDCwi81la";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    try {
      return localStorage.getItem("prefers-dark") === "true";
    } catch (e) {
      return true;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("prefers-dark", String(isDark));
  }, [isDark]);

  const [projects] = useState([
    {
      id: 1,
      title: "JustFlip Real Estate",
      description: "Full-stack online store with payment integration & admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Redux", "Razorpay"],
      link: "https://justflip.in",
      color: "#7c3aed",
    },
    {
      id: 2,
      title: "EasyRenter Portal & CRM",
      description: "Tenant-Landlord CRM with real-time messaging.",
      tech: ["React", "Socket.io", "PostgreSQL", "Redux", "node.js"],
      link: "https://easyrenter.netlify.app/",
      color: "#0ea5e9",
    },
    {
      id: 3,
      title: "ShopSutra E-commerce",
      description: "Collaborative shopping platform with filters & cart.",
      tech: ["React", "Redux", "MongoDB", "node.js"],
      link: "https://shopsutra.vercel.app/",
      color: "#ef4444",
    },
  ]);

  // Contact form
  const formRef = useRef(null);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleContactChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    // basic validation
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      return;
    }

    setSending(true);

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        {
          name: formState?.name,
          email: formState?.email,
          message: formState?.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      // success
      setFormState({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
    } finally {
      setSending(false);
    }
  };

  // Framer Motion variants
  const sectionVariant = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.6 } },
  };
  const cardVariant = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900 text-slate-900 dark:text-gray-100 transition-colors">

      {/* NAV */}
      <nav className="fixed w-full z-50 bg-white/60 dark:bg-slate-900/60 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-gradient-to-r from-purple-600 to-pink-500 text-white">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <a href="#home" className="font-semibold text-lg">
                  Jitendra Saini
                </a>
                <div className="text-xs text-gray-500 dark:text-gray-400">Full Stack Web Developer</div>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="hover:text-purple-600">About</a>
              <a href="#skills" className="hover:text-purple-600">Skills</a>
              <a href="#projects" className="hover:text-purple-600">Projects</a>
              <a href="#contact" className="hover:text-purple-600">Contact</a>

              <a href="https://github.com/jitendra-sudo" target="_blank" rel="noreferrer" className="hover:text-purple-600">
                <Github />
              </a>
              <a href="https://www.linkedin.com/in/jitendra2705/" target="_blank" rel="noreferrer" className="hover:text-purple-600">
                <Linkedin />
              </a>

              {/* <button
                onClick={() => setIsDark((s) => !s)}
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button> */}
            </div>

            <div className="md:hidden flex items-center gap-2">
              {/* <button
                onClick={() => setIsDark((s) => !s)}
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button> */}
              <button onClick={() => setIsMenuOpen((s) => !s)} className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden px-4 py-3 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-900">
            <a href="#about" className="block py-2">About</a>
            <a href="#skills" className="block py-2">Skills</a>
            <a href="#projects" className="block py-2">Projects</a>
            <a href="#contact" className="block py-2">Contact</a>
            <div className="flex items-center gap-4 mt-2">
              <a href="https://github.com/jitendra-sudo" target="_blank" rel="noreferrer"><Github /></a>
              <a href="https://www.linkedin.com/in/jitendra2705/" target="_blank" rel="noreferrer"><Linkedin /></a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <header id="home" className="pt-28 pb-12">
        <motion.div initial="hidden" animate="show" variants={sectionVariant} className="max-w-6xl mx-auto px-4 text-center">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-full mb-6">Full Stack Developer</div>
          <h1 className="text-2xl md:text-4xl font-extrabold leading-tight mb-4">
            I build AI-powered, modern & scalable web applications
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Expert in React, Node.js, and AI integrations — delivering fast, scalable, and production-ready solutions for startups and businesses.
          </p>

          <div className="flex items-center justify-center gap-4">
            <a href="#projects" className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold shadow hover:opacity-95 transition">
              View Projects <ExternalLink className="w-4 h-4" />
            </a>
            <a href="#contact" className="px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-700">Hire Me</a>
          </div>
        </motion.div>
      </header>

      <main className="max-w-6xl mx-auto px-4 pb-24">
        {/* ABOUT */}
        <motion.section id="about" className="mb-16" initial="hidden" whileInView="show" viewport={{ once: true }} variants={sectionVariant}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I'm Jitendra Saini, a Full Stack Developer from Bengaluru. I build elegant, performant web applications using React, Node.js, and cloud-native workflows. I also specialize in creating AI-powered features, integrating modern LLMs, and building smart user experiences that deliver real business impact.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-gray-100 dark:border-gray-800">
                  <Briefcase className="w-6 h-6 mb-2 text-purple-600" />
                  <div className="text-xl font-semibold">25+</div>
                  <div className="text-sm text-gray-500">Projects</div>
                </div>

                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-gray-100 dark:border-gray-800">
                  <Code className="w-6 h-6 mb-2 text-purple-600" />
                  <div className="text-xl font-semibold">1+</div>
                  <div className="text-sm text-gray-500">Years Experience</div>
                </div>

                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-gray-100 dark:border-gray-800">
                  <CheckCircle className="w-6 h-6 mb-2 text-purple-600" />
                  <div className="text-xl font-semibold">98%</div>
                  <div className="text-sm text-gray-500">Client Satisfaction</div>
                </div>

                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-gray-100 dark:border-gray-800">
                  <Mail className="w-6 h-6 mb-2 text-purple-600" />
                  <div className="text-xl font-semibold">24/7</div>
                  <div className="text-sm text-gray-500">Support</div>
                </div>
              </div>
            </div>

            <div>
              {/* placeholder image - replace with profile image */}
              <div className="w-full h-84 rounded-2xl bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white text-xl font-semibold">
                <img src={profile} alt="Jitendra Saini" className="w-full h-full object-cover rounded-2xl" />
              </div>
            </div>
          </div>
        </motion.section>

        {/* SKILLS */}
        <motion.section id="skills" className="mb-16" initial="hidden" whileInView="show" viewport={{ once: true }} variants={sectionVariant}>
          <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { title: "Frontend", items: ["React", "TypeScript", "Tailwind", "Next.js"] },
              { title: "Backend", items: ["Node.js", "Express", "GraphQL", "Auth"] },
              { title: "Database", items: ["MongoDB", "Postgres", "MySQL"] },
              { title: "Tools", items: ["Docker", "Git", "Vercel", "AWS"] },
            ].map((col) => (
              <motion.div key={col.title} variants={cardVariant} className="p-6 bg-white dark:bg-slate-800 rounded-lg border border-gray-100 dark:border-gray-800">
                <div className="font-semibold mb-3">{col.title}</div>
                <div className="flex flex-wrap gap-2">
                  {col.items.map((it) => (
                    <span key={it} className="px-3 py-1 bg-gray-100 dark:bg-slate-700 rounded-full text-sm">{it}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section id="projects" className="mb-16" initial="hidden" whileInView="show" viewport={{ once: true }} variants={sectionVariant}>
          <h3 className="text-2xl font-bold mb-6">Featured Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <motion.a key={p.id} href={p.link} target="_blank" rel="noreferrer" variants={cardVariant} whileHover={{ y: -6, scale: 1.02 }} className="block rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-white dark:bg-slate-800 shadow-sm">
                <div style={{ background: p.color }} className="h-40 flex items-center justify-center text-white font-bold">{p.title}</div>
                <div className="p-4">
                  <h4 className="font-semibold mb-2">{p.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {p.tech.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 bg-gray-100 dark:bg-slate-700 rounded">{t}</span>
                    ))}
                  </div>
                  <div className="text-purple-600 flex items-center gap-2">Open Project <ExternalLink className="w-4 h-4" /></div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section id="contact" initial="hidden" whileInView="show" viewport={{ once: true }} variants={sectionVariant}>
          <h3 className="text-2xl font-bold mb-6">Get in touch</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-gray-800">
              <h4 className="font-semibold mb-2">Contact</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Prefer email? Send a direct message and I'll reply within 24 hours.
              </p>

              <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <div>📧 jitusaini2705@gmail.com</div>
                <div>📞 +91 7023187924</div>
                <div>📍 Bengaluru, Karnataka</div>
              </div>
            </div>


            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-gray-800">
              <form ref={formRef} onSubmit={sendMessage} className="space-y-4">
                <div>
                  <label className="text-sm mb-1 block">Your name</label>
                  <input name="name" value={formState.name} onChange={handleContactChange} placeholder="Your name" className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent" />
                </div>
                <div>
                  <label className="text-sm mb-1 block">Email</label>
                  <input name="email" value={formState.email} onChange={handleContactChange} placeholder="you@domain.com" className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent" />
                </div>
                <div>
                  <label className="text-sm mb-1 block">Message</label>
                  <textarea name="message" value={formState.message} onChange={handleContactChange} rows={4} placeholder="Tell me about your project..." className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent"></textarea>
                </div>

                <div className="flex items-center gap-3">
                  <button type="submit" disabled={sending} className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold">
                    {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Mail className="w-4 h-4" />} <span>{sending ? "Sending..." : "Send Message"}</span>
                  </button>

                  <button type="button" onClick={() => { setFormState({ name: "", email: "", message: "" }); }} className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700">Clear</button>
                </div>
              </form>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="py-10 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Jitendra Saini. Built with ❤️ — React & Tailwind.</div>
      </footer>
    </div>
  );
}
