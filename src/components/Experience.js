import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Associate Software Engineer",
      company: "Strand Life Sciences",
      period: "Aug 2023 - Oct 2024",
      location: "Bengaluru, India",
      description: [
        "Built a centralized dashboard with Zoho Creator to streamline sequencing data access",
        "Optimized and scaled a Nextflow-based bioinformatics pipeline for large-scale genomic workflows",
        "Automated repetitive tasks with Python, cutting processing time by 60%",
        "Actively contributed in agile workflows with Git, Docker, AWS, and Linux"
      ]
    }
  ];

  const education = [
    {
      id: 1,
      degree: "B.E. Computer Science and Engineering",
      institution: "JSS Science and Technology University",
      period: "2019-2023",
      location: "Mysore, India",
      description: [
        "Comprehensive study of computer science fundamentals",
        "Hands-on experience with software development and system design",
        "Focus on algorithms, data structures, and software engineering principles"
      ]
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary dark:text-white mb-4">Experience & Education</h2>
          <div className="w-24 h-1 bg-primary dark:bg-blue-400 mx-auto"></div>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-secondary dark:text-white mb-8 border-b pb-2">Experience</h3>
          
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-10">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-secondary dark:text-white">{exp.role}</h4>
                    <p className="text-primary dark:text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0 md:text-right">
                    <p className="text-secondary dark:text-white font-medium">{exp.period}</p>
                    <p className="text-gray-500 dark:text-gray-400">{exp.location}</p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary dark:text-blue-400 mr-2 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-semibold text-secondary dark:text-white mb-8 border-b pb-2">Education</h3>
          
          {education.map((edu) => (
            <div key={edu.id} className="mb-10">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-secondary dark:text-white">{edu.degree}</h4>
                    <p className="text-primary dark:text-blue-400 font-medium">{edu.institution}</p>
                  </div>
                  <div className="mt-2 md:mt-0 md:text-right">
                    <p className="text-secondary dark:text-white font-medium">{edu.period}</p>
                    <p className="text-gray-500 dark:text-gray-400">{edu.location}</p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {edu.description.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary dark:text-blue-400 mr-2 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;