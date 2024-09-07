import React from "react";
import {
  FaLinkedin,
  FaGithub,
  // FaLeetcode,
  // FaHackerrank,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const contactInfo = [
  {
    label: "Email",
    value: "himanshug9119@gmail.com",
    link: "mailto:himanshug9119@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/himanshug9119",
    link: "https://linkedin.com/in/himanshug9119",
    icon: <FaLinkedin />,
  },
  {
    label: "GitHub",
    value: "github.com/himanshug9119",
    link: "https://github.com/himanshug9119",
    icon: <FaGithub />,
  },
  {
    label: "Instagram",
    value: "instagram.com/himanshug9119",
    link: "https://instagram.com/himanshug9119",
    icon: <FaInstagram />,
  },
  {
    label: "Phone",
    value: "9918330266",
    link: "tel:9918330266",
    icon: <FaPhone />,
  },
];

const experiences = [
  {
    role: "Senior Software Engineer at Expedia Group",
    duration: "June 2022 - Present",
    description:
      "Currently working in the reviews system of Expedia Group, which handles millions of requests globally.",
    icon: "https://via.placeholder.com/100", // Placeholder icon for experience
  },
  {
    role: "Software Engineer at Paytm",
    duration: "August 2019 - May 2022",
    description:
      "Worked in various verticals like Paytm E-commerce, credit cards, and lending. Developed scalable services adaptable to new requirements.",
    icon: "https://via.placeholder.com/100", // Placeholder icon for experience
  },
];

const projects = [
  {
    name: "Catalog Restricted Keyword - Paytm E-commerce",
    technologies: "Java, Spring Boot, Kafka, Redis",
    description:
      "Worked on catalog validation to restrict brand-restricted keywords in Paytm products.",
  },
  {
    name: "Spring Batch Job - Paytm Credit Card",
    technologies: "Java, Spring Batch",
    description:
      "Developed a multithreaded batch processing system for reward distribution based on user transaction history.",
  },
  {
    name: "College Project: News Media Analysis",
    technologies: "Python, Django, React, Scrapy, NLTK, SVM",
    description:
      "Scraped news headlines and developed a classifier with visualization on React.",
  },
  {
    name: "Personal Project: Find Lost Item Web App",
    technologies:
      "Python, Django, AWS, HTML, Google Map, Authentication API, CSS",
    description:
      "A web app to facilitate communication between the person who lost an item and the one who finds it.",
  },
  {
    name: "Script: Analyze Paytm Wallet",
    technologies: "Python, Pandas, Matplotlib",
    description:
      "Python script to analyze and visualize Paytm wallet transactions.",
  },
];

const skills = [
  { label: "Languages", value: "Java, Kotlin" },
  {
    label: "Backend",
    value: "Spring Boot, Spring Batch, GraphQL, Redis, SQS, Git",
  },
  {
    label: "Design Patterns",
    value: "Strategy, Observer, State Machine, Abstract Factory, Singleton",
  },
  { label: "Databases", value: "MySQL, MongoDB" },
];

const App = () => {
  return (
    <div className="bg-gray-100 w-full flex items-center justify-center min-h-screen">
      <div className="max-w-3xl mx-auto p-6">
        <div className="container mx-auto p-4">
          {/* Profile and Contact Section */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row">
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 text-center md:text-left items-center">
              <div className="flex justify-center">
                <img
                  className="h-32 w-32 rounded-full mx-auto md:mx-0"
                  src="profile.jpg"
                  alt="Profile"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mt-4 text-center">
                Himanshu Gupta
              </h2>
              <p className="text-blue-600 text-center">Software Engineer</p>
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-lg font-semibold text-gray-800 mb-4">
                Hi, I am Himanshu Gupta, a software engineer with 3 years of
                work experience at Paytm and Expedia Group.
              </div>
              <div>
                <ul className="text-gray-600 flex flex-wrap">
                  {contactInfo.map((info, index) => (
                    <li
                      key={index}
                      className="flex items-center mb-2 w-full sm:w-1/2 lg:w-1/3"
                    >
                      <span className="mr-2 text-xl">{info.icon}</span>
                      <a
                        href={info.link}
                        className="text-blue-600 hover:underline ml-1"
                      >
                        <strong>{info.label}</strong>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="bg-white shadow-md rounded-lg p-6 mt-6">
            <div className="text-lg font-semibold text-gray-800">Education</div>
            <ul className="mt-2 text-gray-600">
              <li>
                <strong>B.Tech in Computer Science</strong> - NSUT, New Delhi
                (2016-2019) - CGPA: 8.1
              </li>
              <li>
                <strong>Computer Engineering</strong> - Jamia Millia Islamia
                (2012-2015) - 81.2%
              </li>
            </ul>
          </div>

          {/* Experience Section */}
          <div className="bg-white shadow-md rounded-lg p-6 mt-6">
            <div className="text-lg font-semibold text-gray-800">
              Experiences
            </div>
            <ul className="mt-2 text-gray-600">
              {experiences.map((exp, index) => (
                <li key={index} className="mb-4 flex items-start">
                  <img
                    src={exp.icon}
                    alt={exp.role}
                    className="h-12 w-12 mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-800">
                      {exp.role}
                    </div>
                    <div className="text-gray-500">{exp.duration}</div>
                    <div>{exp.description}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects Section */}
          <div className="bg-white shadow-md rounded-lg p-6 mt-6">
            <div className="text-lg font-semibold text-gray-800">Projects</div>
            <ul className="mt-2 text-gray-600">
              {projects.map((project, index) => (
                <li key={index} className="mb-4">
                  <div className="font-semibold text-gray-800">
                    {project.name}
                  </div>
                  <div className="text-gray-500">
                    Technology Used: {project.technologies}
                  </div>
                  <div>{project.description}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills Section */}
          <div className="bg-white shadow-md rounded-lg p-6 mt-6">
            <div className="text-lg font-semibold text-gray-800">
              Skills & Proficiency
            </div>
            <ul className="mt-2 text-gray-600">
              {skills.map((skill, index) => (
                <li key={index}>
                  <strong>{skill.label}:</strong> {skill.value}
                </li>
              ))}
            </ul>
          </div>

          {/* Collage Section */}
          <div className="bg-white shadow-md rounded-lg p-6 mt-6">
            <div className="text-lg font-semibold text-gray-800">Collage</div>
            <div className="mt-4 flex flex-col md:flex-row">
              <img
                className="w-full md:w-1/2 h-auto rounded-lg"
                src="https://via.placeholder.com/400x300"
                alt="Collage"
              />
              <img
                className="w-full md:w-1/2 h-auto rounded-lg mt-4 md:mt-0 md:ml-4"
                src="https://via.placeholder.com/400x300"
                alt="Collage"
              />
            </div>
          </div>

          {/* Footer Section */}
          <div className="bg-gray-200 text-center p-4 mt-6">
            <p className="text-gray-600">Designed by Himanshu Gupta</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
