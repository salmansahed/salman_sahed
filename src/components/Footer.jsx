import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-5 bg-white/10 backdrop-blur-sm rounded-t-xl py-10 border-t border-white/50">
      <div className="flex items-center justify-center gap-3 text-2xl">
        <span className="border border-slate-300 text-slate-300 rounded-full w-10 h-10 flex items-center justify-center hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all duration-300 cursor-pointer">
          <MdEmail />
        </span>
        <span className="border border-slate-300 text-slate-300 rounded-full w-10 h-10 flex items-center justify-center hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-300 cursor-pointer">
          <IoLogoWhatsapp />
        </span>
        <span className="border border-slate-300 text-slate-300 rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 cursor-pointer">
          <FaLinkedin />
        </span>
        <span className="border border-slate-300 text-slate-300 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-700 hover:text-white hover:border-gray-700 transition-all duration-300 cursor-pointer">
          <FaGithub />
        </span>
      </div>
      <div>
        <h1 className="text-center text-sm text-slate-400">
          © 2026 Copyright: Salman Sahed
        </h1>
      </div>
    </div>
  );
};

export default Footer;
