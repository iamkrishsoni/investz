"use client";
import React, { useState } from "react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How does InvestZ offer unique value versus traditional firms?",
      answer:
        "InvestZ provides cutting-edge investment solutions leveraging AI-driven analytics and personalized strategies, which differentiate us from traditional firms.",
    },
    {
      question:
        "What differentiates our investment strategy from other asset managers?",
      answer:
        "Our strategy focuses on sustainable investments with a data-driven approach to maximize long-term returns while minimizing risks.",
    },
    {
      question: "How do I join and start building with InvestZ?",
      answer:
        "Joining InvestZ is simple. Sign up on our platform, explore investment opportunities, and connect with our expert advisors to get started.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative text-white min-h-screen py-24 overflow-hidden">
      {/* FAQ Title */}
      <div className="container mx-auto px-20 mb-16">
        <h2 className="text-5xl font-bold">FAQs</h2>
      </div>

      {/* FAQ Questions */}
      <div className="w-full sm:space-y-12 space-y-6 sm:pt-20">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`relative flex flex-col w-full z-10 bg-white sm:py-14 sm:px-20 px-10 py-7 ${
              index === 1 ? "-rotate-2" : "rotate-2"
            }`}
          >
            {/* Question */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-black">
                {faq.question}
              </h3>
              <button
                className="text-3xl text-black transform transition-transform"
                aria-label="Toggle Answer"
              >
                {activeIndex === index ? "−" : "+"}
              </button>
            </div>

            {/* Answer */}
            {activeIndex === index && (
              <p className="mt-4 text-lg text-gray-700 w-[50%]">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
