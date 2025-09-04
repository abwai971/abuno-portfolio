import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="w-full md:w-2/5 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Abuno Waikhom
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary dark:text-blue-400 font-semibold mb-6">
              Software Engineer
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Turning ideas into impactful solutions where technology meets creativity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="bg-primary dark:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
              >
                View Projects →
              </a>
              <a
                href="#contact"
                className="border-2 border-primary dark:border-blue-600 text-primary dark:text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-primary dark:hover:bg-blue-600 hover:text-white dark:hover:text-white transition-all duration-200 flex items-center justify-center"
              >
                Get In Touch <span className="ml-2">☑</span>
              </a>
            </div>
          </div>

          {/* Profile Image - Made Larger */}
          <div className="w-full md:w-2/5 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-to-br from-primary to-accent rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                <img 
                  src="/images/abuno.jpg" 
                  alt="Abuno Waikhom" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Optional decorative elements */}
              <div className="absolute -bottom-2 -left-4 w-24 h-24 bg-blue-200 dark:bg-blue-800 rounded-full -z-10 opacity-50"></div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-200 dark:bg-green-800 rounded-full -z-10 opacity-50"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-primary dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;