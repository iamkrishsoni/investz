"use client";
import { useInView } from "react-intersection-observer";
import React from "react";

export default function Section6() {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: false, // Trigger animation every time the section comes into view
    threshold: 0.2, // Trigger when 20% of the section is visible
  });

  const services = [
    {
      title: "Service Offering",
      description:
        "Pioneering PMS, cutting-edge AIFs, and strategic stock advisory—all meticulously crafted to fit your objectives.",
    },
    {
      title: "Tailored Strategies",
      description:
        "Momentum, special situations, and conservative value investing tailored for consistent outperformance.",
    },
    {
      title: "Flexible Engagement",
      description:
        "Success fee or subscription options—built to align with your growth ambitions.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="text-white py-24 sm:mx-20 mx-10 transition-all duration-1000 ease-in-out"
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2
          className={`md:text-7xl text-4xl font-light mb-24 transition-all duration-1000 ease-in-out ${
            sectionInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          Premium Services
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 sm:gap-32 sm:pt-24 gap-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`space-y-6 transition-all duration-1000 ease-in-out ${
                sectionInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }} // Staggered animation
            >
              <h3 className="text-3xl font-medium">{service.title}</h3>
              <p className="text-md leading-relaxed text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
