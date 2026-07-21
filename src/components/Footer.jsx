import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      name: "Email",
      icon: <MdEmail />,
      href: "mailto:salmansahed10@gmail.com",
      hoverClass:
        "hover:bg-amber-500 hover:text-white hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/20",
    },
    {
      id: 2,
      name: "WhatsApp",
      icon: <IoLogoWhatsapp />,
      href: "https://wa.me/8801614869602",
      hoverClass:
        "hover:bg-emerald-500 hover:text-white hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20",
    },
    {
      id: 3,
      name: "LinkedIn",
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/salman-sahed/",
      hoverClass:
        "hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-lg hover:shadow-blue-600/20",
    },
    {
      id: 4,
      name: "Facebook",
      icon: <FaFacebook />,
      href: "https://www.facebook.com/salmansahedbd",
      hoverClass:
        "hover:bg-blue-500 hover:text-white hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20",
    },
    {
      id: 5,
      name: "GitHub",
      icon: <FaGithub />,
      href: "https://github.com/salmansahed",
      hoverClass:
        "hover:bg-slate-900 hover:text-white hover:border-slate-900 dark:hover:bg-white dark:hover:text-black dark:hover:border-white hover:shadow-lg hover:shadow-purple-500/20",
    },
  ];

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contacts" },
  ];

  return (
    <footer className="relative max-w-6xl mx-auto rounded-t-3xl bg-white/60 dark:bg-white/3 border-t border-x border-white/60 dark:border-white/10 p-8 sm:p-12 shadow-2xl backdrop-blur-2xl transition-all duration-300 overflow-hidden mt-16 sm:mt-24">
      {/* 1. Ambient Background Glow */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-96 h-32 bg-linear-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8">
        {/* 2. Personal Branding & Tagline */}
        <div className="flex flex-col items-center gap-2">
          <Link href="/" className="group inline-flex items-center gap-2">
            <span className="text-2xl sm:text-3xl font-black tracking-wider text-slate-900 dark:text-white">
              SALMAN<span className="text-blue-600 dark:text-blue-400">.</span>
            </span>
          </Link>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 max-w-md leading-relaxed">
            Full-Stack MERN & Next.js Web Developer crafting high-performance,
            pixel-perfect digital experiences.
          </p>
        </div>

        {/* 3. Quick Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* 4. Interactive Social Icons Grid */}
        <div className="flex items-center justify-center gap-3 text-lg sm:text-xl">
          {socialLinks.map((item) => (
            <Link
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
              href={item.href}
              aria-label={item.name}
            >
              <span
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center bg-slate-100/80 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer ${item.hoverClass}`}
              >
                {item.icon}
              </span>
            </Link>
          ))}
        </div>

        <hr className="w-full border-black/5 dark:border-white/10" />

        {/* 5. Copyright & Built-With Badge */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-gray-400">
          <p className="font-medium">
            © {new Date().getFullYear()}{" "}
            <span className="text-slate-900 dark:text-white font-bold">
              Salman Sahed
            </span>
            . All rights reserved.
          </p>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-100/80 dark:bg-white/5 border border-black/5 dark:border-white/5 text-[11px] font-mono font-medium text-slate-700 dark:text-slate-300">
            <HiSparkles className="text-amber-500 animate-pulse" />
            <span>Crafted with Passion & Precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
