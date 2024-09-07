// src/components/Skills.js
import React from "react";

const Skills = () => {
  const skills = [
    {
      category: "Languages",
      list: "Java, Kotlin",
    },
    {
      category: "Backend",
      list: "Spring Boot, GraphQL, Redis, SQS, Git",
    },
    {
      category: "Design Patterns",
      list: "Strategy, Observer, State Machine, Singleton",
    },
    {
      category: "Databases",
      list: "MySQL, MongoDB",
    },
  ];

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Skills & Proficiency</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} className="mb-3">
            <strong>{skill.category}:</strong> {skill.list}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
