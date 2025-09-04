import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
            <p className="mb-6 leading-relaxed">
              A curious mind passionate about turning ideas into impactful solutions. I thrive where technology meets creativity, building systems that are not just efficient and reliable but also meaningful.
            </p>
            
            <p className="mb-6 leading-relaxed">
              I enjoy exploring new tools, tackling unfamiliar challenges, and crafting innovative ways to solve problems. My journey has been fueled by adaptability, curiosity, and a love for continuous growth.
            </p>
            
            <p className="mb-6 leading-relaxed">
              With experience in scaling systems, automating workflows, and working across the entire software lifecycle, I enjoy exploring how technology can simplify life and open new possibilities.
            </p>
            
            <p className="leading-relaxed">
              Beyond the technical side, I value collaboration, curiosity, and the pursuit of lifelong learning.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/Abuno_Resume.pdf"
            download
            className="inline-flex items-center bg-secondary dark:bg-gray-800 text-white dark:text-gray-200 px-8 py-4 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200 font-semibold"
          >
            Download Resume
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;