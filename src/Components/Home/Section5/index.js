"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

export default function Section5() {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation re-triggers every time the section is in view
    threshold: 0.2,     // Trigger when 20% of the section is visible
  });

  // Helper function to generate animation delay
  const getDelay = (index) => `${index * 200}ms`; // 200ms delay between items

  return (
    <section ref={ref} className="text-white p-8 md:p-16 lg:p-24">
      <h2
        className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-16 leading-tight transition-all duration-1000 ease-in-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: getDelay(0) }}
      >
        Who We Serve: Elite
        <br />
        Investors & Institutions
      </h2>

      <div className="space-y-16 md:space-y-24">
        {/* First Element */}
        <div
          className={`flex items-center transition-all duration-1000 ease-in-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: getDelay(1) }}
        >
          <div className="sm:w-1/2 pr-8">
            <p className="text-lg md:text-xl lg:text-2xl">
              Serving global UHNIs, family offices, and forward-thinking
              institutions looking for distinct market outperformance.
            </p>
          </div>
          <div className="w-1/2 flex justify-end">
            <div className="h-24 w-px bg-white relative">
              <div className="absolute top-0 right-0 w-2 h-2 bg-white rounded-full transform -translate-x-1/2"></div>
            </div>
          </div>
        </div>

        {/* Second Element */}
        <div
          className={`flex items-center transition-all duration-1000 ease-in-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: getDelay(2) }}
        >
          <div className="w-1/2 flex justify-start">
            <div className="h-24 w-px bg-white relative">
              <div className="absolute bottom-0 left-0 w-2 h-2 bg-white rounded-full transform translate-x-1/2"></div>
            </div>
          </div>
          <div className="sm:w-1/2 pl-8">
            <p className="text-lg md:text-xl lg:text-2xl">
              From the United States to India, our reach and influence extend
              across dynamic markets and high-value sectors.
            </p>
          </div>
        </div>

        {/* Third Element */}
        <div
          className={`flex items-center transition-all duration-1000 ease-in-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: getDelay(3) }}
        >
          <div className="sm:w-1/2 pr-8">
            <p className="text-lg md:text-xl lg:text-2xl">
              Focused on high returns, low volatility, and capital protection
              for a global client base.
            </p>
          </div>
          <div className="w-1/2 flex justify-end">
            <div className="h-24 w-px bg-white relative">
              <div className="absolute top-0 right-0 w-2 h-2 bg-white rounded-full transform -translate-x-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
