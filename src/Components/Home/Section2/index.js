"use client";
import { useInView } from "react-intersection-observer";
import React from "react";

export default function Section2() {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center py-16 transition-all duration-1000 ease-in-out pl-10"
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div
          className={`sm:pl-20 transition-all duration-1000 ease-in-out ${
            sectionInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-4xl lg:text-[100px] font-regular text-white sm:leading-[6rem] tracking-wide">
            Intelligence, Precision,
            <br /> and Unmatched Returns
          </h2>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
          {/* Network Visualization */}
          <div
            className={`relative w-full aspect-square sm:max-w-[400px] max-w-[200px] mx-auto transition-transform duration-1000 ${
              sectionInView ? "scale-100" : "scale-75"
            }`}
          >
            <img
              src="/assets/images/element.png"
              alt="Network visualization"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>

          {/* Content */}
          <div
            className={`space-y-8 w-[70%] transition-opacity duration-1000 ${
              sectionInView ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Paragraph */}
            <p
              className={`text-gray-300 text-lg leading-relaxed transition-all duration-1000 ease-in-out ${
                sectionInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              At InvestZ, we leverage sophisticated analytics, AI-driven
              insights, and a profound understanding of global markets to
              redefine wealth creation.
            </p>

            {/* List */}
            <ul className="space-y-4 border-b-[1px] pb-6">
              {[
                "Invest with confidence",
                "InvestZ elevates your financial potential through a disciplined, innovative approach",
              ].map((text, index) => (
                <li
                  key={index}
                  className={`flex items-center space-x-3 text-white transition-all duration-1000 ease-in-out ${
                    sectionInView
                      ? `translate-y-0 opacity-100 delay-${index * 200}`
                      : "translate-y-5 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div
                    className={`w-10 h-10 ${index === 1 ? "w-14 h-14" : ""}`}
                  >
                    <img src="/assets/images/point.png" alt="" />
                  </div>
                  <span className="text-lg">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
