const Section8 = () => {
  return (
    <section className="text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-8xl font-semibold leading-tight">
          Cutting-Edge Technology & Human Insight
        </h1>

        {/* Content */}
        <div className="sm:mt-12 pt-20 space-y-10">
          {/* Innovation Section */}
          <div className="group">
            <h2 className="text-lg font-medium">Innovation</h2>
            <hr className="border-t border-white opacity-20 mt-2" />
            <p className="text-sm md:text-base mt-4 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 sm:w-[50%] text-gray-400">
              A seamless blend of AI, proprietary algorithms, and expert
              oversight ensures every decision is optimally positioned.
            </p>
          </div>

          {/* Data & Research Section */}
          <div className="group">
            <h2 className="text-lg font-medium">Data & Research</h2>
            <hr className="border-t border-white opacity-20 mt-2" />
            <p className="text-sm md:text-base mt-4 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 sm:w-[50%] text-gray-400">
              Robust market research and data-driven insights fuel our
              investment strategies.
            </p>
          </div>

          {/* Future-Ready Investing Section */}
          <div className="group">
            <h2 className="text-lg font-medium">Future-Ready Investing</h2>
            <hr className="border-t border-white opacity-20 mt-2" />
            <p className="text-sm md:text-base mt-4 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 sm:w-[50%] text-gray-400">
              We anticipate tomorrow’s trends, empowering today’s decisions with
              foresight and precision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section8;
