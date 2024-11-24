"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "InvestZ Elite Wealth Management gave me the confidence I needed.",
      author: "Sudeep Goenka",
      title: "Director, Goldiee Group",
    },
    {
      id: 2,
      quote: "Their strategic approach transformed our investment portfolio.",
      author: "Rajesh Mehta",
      title: "CEO, Global Ventures",
    },
    {
      id: 3,
      quote: "The best decision we made for our family's financial future.",
      author: "Priya Sharma",
      title: "Founder, Tech Solutions",
    },
    {
      id: 4,
      quote: "Exceptional service and outstanding returns on investment.",
      author: "Amit Patel",
      title: "Managing Director, Innovative Corp",
    },
    {
      id: 5,
      quote: "They truly understand wealth preservation and growth.",
      author: "Vikram Singh",
      title: "Partner, Heritage Investments",
    },
    {
      id: 6,
      quote: "Professional excellence with a personal touch.",
      author: "Neha Kapoor",
      title: "CFO, Future Enterprises",
    },
    {
      id: 7,
      quote: "Their expertise in market analysis is unmatched.",
      author: "Arun Kumar",
      title: "President, Strategic Holdings",
    },
    {
      id: 8,
      quote: "A game-changer for our investment strategy.",
      author: "Sanjay Gupta",
      title: "Chairman, Vista Group",
    },
    {
      id: 9,
      quote: "They delivered beyond our expectations.",
      author: "Meera Reddy",
      title: "Director, Pinnacle Industries",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="sm:min-h-[80vh] h-fit w-full bg-white flex items-center px-6 py-8">
      <div className="mx-auto max-w-6xl text-black">
        <div className="mb-20 flex-row flex">
          <div>
            <h2 className="text-3xl font-normal leading-tight md:text-5xl lg:text-6xl sm:w-[64%]">
              "{testimonials[currentIndex].quote}"
            </h2>
          </div>
          <div className="flex flex-col">
            <div className="sm:text-sm text-black capitalize font-light sm:w-[10rem]">
              portfolio highlights
            </div>
            <img src="/assets/images/arrow.png" className="w-32" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-row items-center sm:gap-20 gap-6">
            <div className="text-4xl">
              {currentIndex + 1}/{testimonials.length}
            </div>
            <div className="flex gap-2">
              <button
                onClick={previousTestimonial}
                className="rounded-full border-[1px] sm:p-3 p-1 transition-colors border-gray-600 text-black"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="rounded-full border-[1px] border-gray-600 sm:p-3 p-1 transition-colors hover:bg-gray-50 text-black"
                aria-label="Next testimonial"
              >
                <ArrowRight className="h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="flex flex-col sm:gap-2 pl-10">
            <div className="sm:text-xl font-medium">
              {testimonials[currentIndex].author}
            </div>
            <div className="text-gray-600">
              {testimonials[currentIndex].title}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
