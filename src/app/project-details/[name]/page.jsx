const ProjectDetailsPage = () => {
  return (
    <div className="min-h-screen flex flex-col max-w-6xl mx-auto mb-12 sm:mb-20 mt-32 sm:mt-36 space-y-5 sm:space-y-8 px-3">
      {/* Project Name */}
      <div className="bg-white/10 border border-white/30 rounded-xl py-4 px-4 text-xl">
        <h1>
          <span className="text-xl sm:text-3xl text-yellow-400 font-bold">
            Project Name :
          </span>{" "}
          <span>  </span>
        </h1>
      </div>
      {/* Technologies Used */}
      <div className="bg-white/10 border border-white/30 rounded-xl py-4 px-4 text-xl">
        <h1>
          <span className="text-xl sm:text-3xl text-yellow-400 font-bold">
            Technologies used :
          </span>{" "}
          <span></span>
        </h1>
      </div>
      {/* Live Project Link */}
      <div className="bg-white/10 border border-white/30 rounded-xl py-4 px-4 text-xl">
        <h1>
          <span className="text-xl sm:text-3xl text-yellow-400 font-bold">
            Live Project Link :
          </span>{" "}
          <span></span>
        </h1>
      </div>
      {/* GitHub Repository Link */}
      <div className="bg-white/10 border border-white/30 rounded-xl py-4 px-4 text-xl">
        <h1>
          <span className="text-xl sm:text-3xl text-yellow-400 font-bold">
            GitHub Repository Link :
          </span>{" "}
          <span></span>
        </h1>
      </div>
      {/* Short Description */}
      <div className="bg-white/10 border border-white/30 rounded-xl py-4 px-4 text-xl">
        <h1>
          <span className="text-xl sm:text-3xl text-yellow-400 font-bold">
            Short Description :{" "}
          </span>{" "}
          <span className="text-lg"></span>
        </h1>
      </div>
      {/* Project Details */}
      <div className="bg-white/10 border border-white/30 rounded-xl py-4 px-4 text-xl">
        <h1>
          <span className="text-xl sm:text-3xl text-yellow-400 font-bold">
            Details this project :{" "}
          </span>{" "}
          <span className="text-lg"></span>
        </h1>
      </div>
      {/* Challenges */}
      <div className="bg-white/10 border border-white/30 rounded-xl py-4 px-4 text-xl">
        <h1>
          <span className="text-xl sm:text-3xl text-yellow-400 font-bold">
            Challenges :
          </span>{" "}
          <span></span>
        </h1>
      </div>
      {/* Future Plans */}
      <div className="bg-white/10 border border-white/30 rounded-xl py-4 px-4 text-xl">
        <h1>
          <span className="text-xl sm:text-3xl text-yellow-400 font-bold">
            Future Plans :
          </span>{" "}
          <span></span>
        </h1>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
