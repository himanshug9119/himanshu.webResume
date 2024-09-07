// src/components/Projects.js
import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Reviews System",
      company: "Expedia Group",
      description:
        "Currently working on the reviews system handling millions of requests globally.",
      technologies: "Kotlin, Java, GraphQL, TypeScript",
    },
    {
      title: "Documents Sharing Framework",
      company: "Paytm Lending",
      description:
        "Developed a framework for lending products using Abstract Factory and messaging queue.",
      technologies: "Java, Spring Boot, MySQL, Redis, SQS",
    },
    // Add more projects here
  ];

  return (
    <section className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold">
            {project.title}{" "}
            <span className="text-sm text-gray-600">({project.company})</span>
          </h3>
          <p className="mt-2">{project.description}</p>
          <p className="mt-1 text-sm text-gray-700">
            <strong>Technologies Used:</strong> {project.technologies}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Projects;
