import { HiOutlineCode, HiOutlineTerminal } from "react-icons/hi";
import { MdOutlineGridView, MdOutlineDraw, MdOutlineDns } from "react-icons/md";
import { FaWordpress } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import ServicesModal from "./ServicesModal";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "Frontend Development",
      icon: <MdOutlineGridView />,
      description:
        "Crafting delightful user interfaces with Tailwind CSS, JavaScript, React, and Next.js. 🌟",
      details: [
        "User Interfaces: Engaging, intuitive designs.",
        "Responsive Layouts: Adapt to all devices.",
        "Performance Optimization: Fast-loading pages.",
        "Accessibility: Inclusive for all users.",
        "Browser Compatibility: Consistent across browsers.",
      ],
    },
    {
      id: 2,
      title: "Backend Development",
      icon: <HiOutlineCode />,
      description:
        "Building robust server-side logic and database structures using Node.js and Express.",
      details: [
        "Server Logic: Scalable and efficient backend.",
        "Database Management: Secure MongoDB schemas.",
        "Authentication: JWT and secure login flows.",
        "Error Handling: Clean and reliable code.",
        "Architecture: Clean and modular patterns.",
      ],
    },
    {
      id: 3,
      title: "Full Stack Development",
      icon: <MdOutlineDraw />,
      description:
        "End-to-end web applications with seamless integration of frontend and backend technologies.",
      details: [
        "MERN Integration: Full stack expertise.",
        "Dynamic Features: Real-time user interactions.",
        "Full Control: Managing UI to Database.",
        "Deployment: Hosting and live production.",
        "Maintainability: Well-documented codebases.",
      ],
    },
    {
      id: 4,
      title: "API Development",
      icon: <MdOutlineDns />,
      description:
        "Designing secure and high-performance RESTful APIs for modern web applications.",
      details: [
        "RESTful Services: Standards-based API design.",
        "Endpoint Security: Protection from vulnerabilities.",
        "Data Integration: Seamless third-party connections.",
        "Efficiency: Minimal latency and high speed.",
        "Documentation: Clear API usage guides.",
      ],
    },
    {
      id: 5,
      title: "Prototype Development",
      icon: <HiOutlineTerminal />,
      description:
        "Transforming your initial ideas into functional, interactive MVPs quickly.",
      details: [
        "Rapid Prototyping: Fast turnaround of ideas.",
        "Core Features: Focusing on essential logic.",
        "UX Validation: Testing flows early on.",
        "Modern Stack: Built with React/Next.js.",
        "Scalable Foundation: Ready for future growth.",
      ],
    },
    {
      id: 6,
      title: "WordPress Development",
      icon: <FaWordpress />,
      description:
        "Building custom, user-friendly CMS-based websites tailored to your specific business needs.",
      details: [
        "Custom Themes: Unique designs for your brand.",
        "CMS Expertise: Easy content management.",
        "SEO Friendly: Optimized for search engines.",
        "E-commerce: Functional online stores.",
        "Migration: Smooth data transfer from platforms.",
      ],
    },
  ];

  return (
    <section
      className="relative py-16 sm:py-24 px-4 max-w-6xl mx-auto scroll-mt-12 overflow-hidden"
      id="services"
    >
      {/* 1. Ambient Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-75 bg-linear-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* 2. Header Section */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wider uppercase mb-3 backdrop-blur-md">
          <HiSparkles className="text-amber-500 animate-pulse" />
          <span>What I Offer</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          My{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
            Services
          </span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3 max-w-xl">
          Comprehensive web development solutions crafted with modern tools,
          high performance, and pixel-perfect design.
        </p>
      </div>

      {/* 3. Modern Cyber Glass Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="group relative flex flex-col justify-between rounded-3xl p-7 bg-white/40 dark:bg-slate-950/40 border border-black/5 dark:border-white/10 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-purple-500/5 hover:-translate-y-2 hover:border-blue-500/40 dark:hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
          >
            <div>
              {/* Glowing Icon Box */}
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20 group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white group-hover:border-transparent group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300 mb-6">
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
            </div>

            {/* Modal Component Container */}
            <div className="pt-4 border-t border-black/5 dark:border-white/5">
              <ServicesModal
                details={service.details}
                description={service.description}
                title={service.title}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
