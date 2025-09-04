import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "American Sign Language Identification",
      category: "Research Project",
      year: "2023",
      description: "Built a benchmark ASL recognition database using Python, addressing the lack of user-oriented datasets and improving model performance for reproducible future research.",
      technologies: ["Python", "OpenCV", "Machine Learning", "Computer Vision", "PyTorch"],
      link: "https://github.com/YoihenBachu/DiPASL"
    },
    {
      id: 2,
      title: "Captcha Cracking",
      category: "Research Project",
      year: "2023",
      description: "Automated CAPTCHA cracking system using CNN to process, segment, and decode text-based challenges, rendering them ineffective against bots.",
      technologies: ["Python", "CNN", "openCV", "Numpy","Keras"],
      link: "https://github.com/YoihenBachu/Cracking-Captcha/"
    },
  ];

  const publications = [
    {
      id: 1,
      title: "DIPASL: The Different Perspective ASL",
      conference: "2023 ICCINS Conference",
      year: "2023",
      description: "Co-authored research paper introducing a user-perspective dataset for ASL recognition. Published at 2023 International Conference on Computational Intelligence, Networks and Security (ICCINS).",
      link: "https://ieeexplore.ieee.org/document/10450026"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary dark:text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary dark:bg-blue-400 mx-auto"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <span className="bg-primary/10 text-primary dark:bg-blue-900/30 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium mr-3">
                  {project.category}
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">{project.year}</span>
              </div>
              
              <h3 className="text-xl font-bold text-secondary dark:text-white mb-3">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 dark:bg-gray-800 text-secondary dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>

        {/* Publications Section */}
        <div>
          <h3 className="text-2xl font-semibold text-secondary dark:text-white mb-8 border-b pb-2">Publications</h3>
          
          {publications.map((pub) => (
            <div key={pub.id} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mb-6">
              <div className="flex items-center mb-4">
                <span className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium mr-3">
                  Publication
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">{pub.year}</span>
              </div>
              
              <h4 className="text-xl font-bold text-secondary dark:text-white mb-2">
                {pub.title}
              </h4>
              
              <p className="text-primary dark:text-blue-400 font-medium mb-3">
                {pub.conference}
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {pub.description}
              </p>
              
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium"
              >
                Paper ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;