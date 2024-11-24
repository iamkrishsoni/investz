export default function Section1() {
  return (
    <section className="min-h-screen flex items-center mx-6 sm:mx-20">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-normal text-white leading-[1.1]">
            Redefining Elite Wealth Management
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 my-16 leading-relaxed max-w-3xl">
            Beyond traditional asset management—InvestZ crafts tailored
            investment strategies for the world's leading investors, driving
            consistent excellence and growth.
          </p>
          <button className="group inline-flex items-center bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-colors">
            <span className="mr-2 text-lg font-medium">Experience InvestZ</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 8H15M15 8L8 1M15 8L8 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
