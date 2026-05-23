import {
  HiOutlineCode,
  HiOutlineDeviceMobile,
  HiOutlineTerminal,
} from "react-icons/hi";
import { MdOutlineGridView, MdOutlineDraw, MdOutlineDns } from "react-icons/md";
import ServicesModal from "./ServicesModal";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "Frontend Development",
      icon: <MdOutlineGridView className="text-3xl mb-4" />,
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
      icon: <HiOutlineCode className="text-3xl mb-4" />,
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
      icon: <MdOutlineDraw className="text-3xl mb-4" />,
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
      icon: <MdOutlineDns className="text-3xl mb-4" />,
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
      icon: <HiOutlineTerminal className="text-3xl mb-4" />,
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
      title: "WordPress Development (CMS)",
      icon: <HiOutlineDeviceMobile className="text-3xl mb-4" />,
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
    <section className="py-14 sm:py-18 px-3 max-w-6xl mx-auto scroll-mt-8" id="services">
      {/* Header Part */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-100">Services</h2>
        <p className="text-gray-300 text-sm mt-2 uppercase tracking-widest">
          What I offer
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="border border-white/20 rounded-3xl p-10 flex flex-col justify-end items-start min-h-50 shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] transition-shadow bg-white/10 group cursor-pointer"
          >
            {/* Icon */}
            <div className="text-gray-100">{service.icon}</div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-100 mb-6 leading-snug">
              {service.title}
            </h3>
            {/* {
              service.details.map((d, ind)=> <p>{d}</p>)
            } */}
            {/* Modal */}
            <ServicesModal
              details={service.details}
              description={service.description}
              title={service.title}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
