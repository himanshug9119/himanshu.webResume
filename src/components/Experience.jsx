// src/components/Experience.js
import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer at Expedia Group",
      duration: "June 2022 - Present",
      description:
        "Working in the reviews system, handling millions of requests globally.",
    },
    {
      title: "Ex Software Engineer at Paytm",
      duration: "August 2019 - May 2022",
      description:
        "Worked across various verticals like E-commerce, Credit Cards, and Lending. Developed scalable services.",
    },
  ];

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Experiences</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold">{exp.title}</h3>
          <span className="text-sm text-gray-600">{exp.duration}</span>
          <p className="mt-2">{exp.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Experience;
