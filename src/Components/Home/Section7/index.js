"use client";
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Section7() {
  const slides = [
    {
      content:
        "Highlight standout success stories and key metrics reflecting exceptional returns and stability.",
    },
    {
      content:
        "Showcase innovative investment strategies and market-leading performance metrics.",
    },
    {
      content:
        "Demonstrate consistent growth patterns and long-term value creation.",
    },
  ];
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-end text-white text-3xl md:text-6xl lg:text-8xl font-normal mb-16 leading-tight">
          Setting New Standards in Financial Performance
        </h2>

        <div className="grid md:grid-cols-2 gap-8 pt-12">
          <div className="bg-white rounded-lg p-8 w-[90%]">
            <p className="text-gray-800 text-2xl mb-12">
              {slides[currentSlide].content}
            </p>
            <div className="flex gap-2 text-black items-end justify-end">
              <button
                onClick={previousSlide}
                className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4 text-black" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>

          <div className="text-white">
            <p className="text-lg leading-relaxed text-end">
              Our portfolios consistently outpace market benchmarks, with
              transparent, data-backed results that ensure our clients'
              financial security and growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
