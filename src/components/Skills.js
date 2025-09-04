import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const skillsCategories = [
    {
      title: "Languages",
      icon: "💻",
      items: ["Python", "Java", "JavaScript", "HTML/CSS", "Deluge Script", "Nextflow"]
    },
    {
      title: "Developer Tools",
      icon: "🛠️",
      items: ["Git", "Docker","AWS Cloud9","VS Code", "Linux", "HPC", "Zoho Creator"]
    },
    {
      title: "Frameworks & Libraries",
      icon: "📚",
      items: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Node.js", "OpenCV", "PyTorch", "TensorFlow"]
    },
    {
      title: "Soft Skills",
      icon: "🌟",
      items: ["Adaptability", "Problem-Solving", "Team Collaboration", "Continuous Learning"]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Skill bar animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-800 dark:text-white mb-4"
          >
            Skills & Expertise
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Here's a showcase of my technical skills and expertise that I've developed through projects and experience.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillsCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <span className="text-2xl mr-3">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + (skillIndex * 0.1) }}
                      className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 
                                 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium 
                                 border border-blue-200 dark:border-blue-700 shadow-sm hover:shadow-md transition-shadow"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;