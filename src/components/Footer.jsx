import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="max-w-6xl mx-auto space-y-5 bg-black/5 dark:bg-white/10 backdrop-blur-sm rounded-t-xl py-10 border-t border-black/10 dark:border-white/20 transition-colors duration-300">
      {/* Social Icons */}
      <div className="flex items-center justify-center gap-3 text-2xl">
        {/* Email */}
        <Link target="_blank" href="mailto:salmansahedbd@gmail.com">
          <span className="border border-gray-600 text-gray-700 dark:border-slate-300 dark:text-slate-300 rounded-full w-10 h-10 flex items-center justify-center hover:bg-sky-500 hover:text-white hover:border-sky-500 dark:hover:bg-sky-500 dark:hover:text-white dark:hover:border-sky-500 transition-all duration-300 cursor-pointer">
            <MdEmail />
          </span>
        </Link>

        {/* WhatsApp */}
        <Link target="_blank" href="https://wa.me/8801614869602">
          <span className="border border-gray-600 text-gray-700 dark:border-slate-300 dark:text-slate-300 rounded-full w-10 h-10 flex items-center justify-center hover:bg-emerald-500 hover:text-white hover:border-emerald-500 dark:hover:bg-emerald-500 dark:hover:text-white dark:hover:border-emerald-500 transition-all duration-300 cursor-pointer">
            <IoLogoWhatsapp />
          </span>
        </Link>

        {/* LinkedIn */}
        <Link target="_blank" href="https://www.linkedin.com/in/salman-sahed/">
          <span className="border border-gray-600 text-gray-700 dark:border-slate-300 dark:text-slate-300 rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 dark:hover:bg-blue-600 dark:hover:text-white dark:hover:border-blue-600 transition-all duration-300 cursor-pointer">
            <FaLinkedin />
          </span>
        </Link>

        {/* GitHub */}
        <Link target="_blank" href="https://github.com/salmansahed">
          <span className="border border-gray-600 text-gray-700 dark:border-slate-300 dark:text-slate-300 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-800 hover:text-white hover:border-gray-800 dark:hover:bg-gray-200 dark:hover:text-black dark:hover:border-gray-200 transition-all duration-300 cursor-pointer">
            <FaGithub />
          </span>
        </Link>
      </div>

      {/* Copyright Text */}
      <div>
        <h3 className="text-center text-sm text-gray-600 dark:text-slate-400 transition-colors">
          © {new Date().getFullYear()} Copyright: Salman Sahed
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
