import React from "react";
import { HiBadgeCheck } from "react-icons/hi";

const Skills = () => {
  return (
    <section
      className="py-14 md:py-18 px-3 max-w-6xl mx-auto scroll-mt-8 "
      id="skills"
    >
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-100">Skills</h2>
        <p className="text-gray-300 mt-2">My Technical Level</p>
      </div>

      {/* Skills Container */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {/* Frontend Developer Card */}
        <div className="bg-white/10 border border-white/20 rounded-3xl p-8 shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] transition-shadow">
          <h3 className="text-center text-2xl font-semibold mb-8 text-gray-100">
            Frontend Developer
          </h3>

          <div className="grid grid-cols-2 gap-y-6 gap-x-4">
            <div className="flex items-start gap-2">
              <HiBadgeCheck className="text-gray-100 mt-1 text-xl" />
              <div>
                <h4 className="font-bold text-lg text-gray-100 leading-none">
                  HTML5
                </h4>
                <span className="text-sm font-medium text-gray-300">
                  Expert
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <HiBadgeCheck className="text-gray-100 mt-1 text-xl" />
              <div>
                <h4 className="font-bold text-lg text-gray-100 leading-none">
                  Next.JS
                </h4>
                <span className="text-sm font-medium text-gray-300">
                  Expert
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <HiBadgeCheck className="text-gray-100 mt-1 text-xl" />
              <div>
                <h4 className="font-bold text-lg text-gray-100 leading-none">
                  CSS
                </h4>
                <span className="text-sm font-medium text-gray-300">
                  Expert
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <HiBadgeCheck className="text-gray-100 mt-1 text-xl" />
              <div>
                <h4 className="font-bold text-lg text-gray-100 leading-none">
                  Tailwind Css
                </h4>
                <span className="text-sm font-medium text-gray-300">
                  Expert
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <HiBadgeCheck className="text-gray-100 mt-1 text-xl" />
              <div>
                <h4 className="font-bold text-lg text-gray-100 leading-none">
                  JavaScript
                </h4>
                <span className="text-sm font-medium text-gray-300">
                  Expert
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <HiBadgeCheck className="text-gray-100 mt-1 text-xl" />
              <div>
                <h4 className="font-bold text-lg text-gray-100 leading-none">
                  React.JS
                </h4>
                <span className="text-sm font-medium text-gray-300">
                  Expert
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Backend Developer Card */}
        <div className="bg-white/10 border border-white/20 rounded-3xl p-8 shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] transition-shadow">
          <h3 className="text-center text-2xl font-semibold mb-8 text-gray-100">
            Backend Developer
          </h3>

          <div className="grid grid-cols-2 gap-y-6 gap-x-4">
            <div className="flex items-start gap-2">
              <HiBadgeCheck className="text-gray-100 mt-1 text-xl" />
              <div>
                <h4 className="font-bold text-lg text-gray-100 leading-none">
                  Node.JS
                </h4>
                <span className="text-sm font-medium text-gray-300">
                  Expert
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <HiBadgeCheck className="text-gray-100 mt-1 text-xl" />
              <div>
                <h4 className="font-bold text-lg text-gray-100 leading-none">
                  JWT
                </h4>
                <span className="text-sm font-medium text-gray-300">
                  Expert
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <HiBadgeCheck className="text-gray-100 mt-1 text-xl" />
              <div>
                <h4 className="font-bold text-lg text-gray-100 leading-none">
                  Express.JS
                </h4>
                <span className="text-sm font-medium text-gray-300">
                  Expert
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <HiBadgeCheck className="text-gray-100 mt-1 text-xl" />
              <div>
                <h4 className="font-bold text-lg text-gray-100 leading-none">
                  Docker
                </h4>
                <span className="text-sm font-medium text-gray-300">
                  Learning
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <HiBadgeCheck className="text-gray-100 mt-1 text-xl" />
              <div>
                <h4 className="font-bold text-lg text-gray-100 leading-none">
                  MongoDB
                </h4>
                <span className="text-sm font-medium text-gray-300">
                  Expert
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <HiBadgeCheck className="text-gray-100 mt-1 text-xl" />
              <div>
                <h4 className="font-bold text-lg text-gray-100 leading-none">
                  Better Auth
                </h4>
                <span className="text-sm font-medium text-gray-300">
                  Expert
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
