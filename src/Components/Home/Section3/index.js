"use client";
import { useInView } from "react-intersection-observer";
import React from "react";

const Section3 = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Re-trigger animation every time it enters the viewport
    threshold: 0.2, // Trigger when 20% of the section is visible
  });

  const cards = [
    {
      id: "01",
      title: "Strategic Expertise",
      description:
        "Our investments reflect a meticulous strategy informed by global trends and local insights.",
      imageSrc: "/assets/images/strategic.png",
      altText: "Strategic Expertise",
    },
    {
      id: "02",
      title: "Exclusive Access",
      description:
        "Access exclusive, high-return opportunities typically reserved for ultra-high-net-worth investors.",
      imageSrc: "/assets/images/exclusive.png",
      altText: "Exclusive Access",
    },
    {
      id: "03",
      title: "Client Alignment",
      description:
        "Our investments prioritize the client's best interests with transparent decision-making.",
      imageSrc: "/assets/images/client.png",
      altText: "Client Alignment",
    },
  ];

  return (
    <section ref={ref} className="text-white sm:py-24 px-6 mb-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2
          className={`text-4xl md:text-8xl font-bold text-center mb-28 transition-all duration-1000 ease-in-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0ms" }}
        >
          Why Choose InvestZ?
        </h2>

        {/* Cards */}
        <div className="space-y-20">
          {cards.map((card, index) => (
            <Card
              key={card.id}
              index={index}
              inView={inView}
              id={card.id}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
              altText={card.altText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({ id, title, description, imageSrc, altText, index, inView }) => {
  // Calculate delay based on card index
  const delay = `${index * 200}ms`;

  return (
    <div
      className={`flex flex-row transition-all duration-1000 ease-in-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: delay }}
    >
      <div className="items-center justify-center flex flex-col">
        <span className="p-3 bg-[#F3F3F330] rounded-full text-black">{id}</span>
        <div className="w-[1px] sm:h-[40rem] h-[30rem] bg-[#F3F3F330] flex justify-center" />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col md:flex-row bg-white text-black rounded-lg shadow-lg overflow-hidden sm:w-[75%] w-[80%] sm:p-10 sm:py-20">
          <div className="p-6 w-full text-black text-lg flex items-center">
            <p>{description}</p>
          </div>
          <div>
            <img src={imageSrc} alt={altText} className="w-[17rem]" />
          </div>
        </div>
        <div className="bg-[#0A2472] text-white sm:text-4xl text-xl font-bold w-[80%] sm:py-20 rounded-lg sm:p-16 py-8 px-5">
          {title}
        </div>
      </div>
    </div>
  );
};

export default Section3;
