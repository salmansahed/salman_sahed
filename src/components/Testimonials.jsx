"use client";

import { Pagination, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Image from "next/image";

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
    <div className="max-w-6xl mx-auto py-14 md:py-24 px-3" id="testimonials">
      <div className="px-2 mb-10 md:mb-12 text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-100">
          Kind Words from Clients
        </h2>
        <p className="text-gray-300 text-lg">
          Feedback from the wonderful people I&apos;ve worked with
        </p>
      </div>

      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="border p-6 rounded-3xl space-y-5 mt-4 mx-2 mb-10 bg-white/10 border-white/20 shadow-[0_0_10px_1px_rgba(255,255,255,0.3)]">
              <div className="flex justify-between">
                <div>
                  <FaQuoteLeft className="text-gray-400 text-3xl" />
                </div>
                <div className="flex text-green-500 gap-1.5">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <p className="italic text-center text-gray-300">
                &quot;{review.review}&quot;
              </p>
              <hr className="border-white/20" />
              <div className="flex items-center justify-start gap-2">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gray-100">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-100">{review.name}</h3>
                  <p className="text-sm font-medium text-zinc-500">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
