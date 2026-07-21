"use client";

import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "John Smith",
      role: "Project Manager",
      review:
        "Working with Salman was a game-changer. He transformed our complex requirements into a seamless MERN stack application. His expertise in Next.js and clean UI design is truly impressive!",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Startup Founder",
      review:
        "Salman built our platform using React and Tailwind CSS. The performance is top-notch, and the user interface is incredibly intuitive. He is professional, responsive, and highly skilled.",
      avatar: "https://i.pravatar.cc/150?u=sarah",
    },
    {
      id: 3,
      name: "Mahmudul Hasan",
      role: "Tech Lead",
      review:
        "I was amazed by Salman's ability to handle both frontend and backend tasks. His integration of Better-Auth and MongoDB for our secure portal was flawless. Highly recommended!",
      avatar: "https://i.pravatar.cc/150?u=arif",
    },
    {
      id: 4,
      name: "Emily Chen",
      role: "Creative Director",
      review:
        "The directory service project Salman built was exactly what we needed. He has a great eye for detail and ensures every component is responsive and pixel-perfect. A great developer to work with!",
      avatar: "https://i.pravatar.cc/150?u=emily",
    },
  ];

  return (
    <section
      className="relative max-w-6xl mx-auto py-16 sm:py-24 px-4 sm:px-6 scroll-mt-20 overflow-hidden"
      id="testimonials"
    >
      {/* 1. Ambient Background Glows */}
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-blue-500/15 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/15 dark:bg-purple-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse delay-700" />

      {/* 2. Cyber Section Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/15 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-3">
          <HiSparkles className="text-amber-500" />
          <span>CLIENT FEEDBACK</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
          Kind Words From{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
            Clients
          </span>
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 mt-2 max-w-md">
          Feedback from the wonderful people I&apos;ve worked with
        </p>
      </div>

      {/* 3. Swiper Slider Component */}
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        className="pb-14! [&_.swiper-pagination-bullet]:bg-slate-400! [&_.swiper-pagination-bullet-active]:bg-blue-600! dark:[&_.swiper-pagination-bullet-active]:bg-blue-400! [&_.swiper-pagination-bullet-active]:w-6! [&_.swiper-pagination-bullet-active]:rounded-full! [&_.swiper-pagination-bullet]:transition-all"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="group flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white/60 dark:bg-white/3 border border-black/6 dark:border-white/10 shadow-xl backdrop-blur-2xl hover:border-blue-500/30 dark:hover:border-blue-400/30 hover:-translate-y-1 transition-all duration-300 space-y-6 my-2">
              {/* Quote Icon & Rating Stars */}
              <div className="flex justify-between items-center">
                <div className="p-2.5 rounded-2xl bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400">
                  <FaQuoteLeft className="text-lg sm:text-xl" />
                </div>
                <div className="flex text-amber-400 gap-1 text-sm sm:text-base">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <p className="text-slate-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed italic">
                &quot;{review.review}&quot;
              </p>

              <hr className="border-black/5 dark:border-white/10" />

              {/* Client Info */}
              <div className="flex items-center gap-3.5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500/30 dark:border-blue-400/30 shrink-0 shadow-sm">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white truncate">
                    {review.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-gray-400 truncate">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
