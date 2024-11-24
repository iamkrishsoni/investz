const Section4 = () => {
  return (
    <section className="bg-white text-white group">
      <div className="text-center">
        {/* Default Content */}
        <div className="group-hover:hidden h-screen flex flex-col justify-center items-center">
          <h2 className="text-2xl md:text-6xl font-bold text-black">
            Our Investment Philosophy
          </h2>
          <div className="mt-20 flex w-full items-center justify-center">
            <img
              src="/assets/images/box.png"
              alt="Decorative Box"
              className="w-[18rem]"
            />
          </div>
        </div>
        {/* Hover Content */}
        <div
          className="group-hover:flex hidden transition duration-300 ease-in-out group-hover:flex-col items-center h-screen justify-center gap-y-12 px-10"
          style={{
            backgroundImage: "url('/assets/images/bg.png')",
          }}
        >
          <h2 className="text-2xl md:text-6xl font-bold">
            Our Investment Philosophy
          </h2>
          <p className="text-lg mt-8">
            Built on Timeless Principles, Enhanced by Modern Technology
          </p>
          <p className="text-base mt-12 max-w-2xl mx-auto">
            Our value-focused, high-margin-of-safety strategy is designed to
            seize underappreciated assets with resilience and long-term
            profitability.
          </p>
          <p className="text-sm mt-12 text-gray-400">
            Sustainable competitive advantage is the backbone of every
            investment decision we make.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section4;
