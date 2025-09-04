import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
const [status, setStatus] = useState("");
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: formData.name,       // User's name input
      from_email: formData.email,     // User's email input
      message: formData.message       // User's message
    };
    console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID)
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("✅ Message sent successfully!");
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error(error.text);
          setStatus("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary dark:text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Let's collaborate and create something exceptional together. I'm always open to discussing new opportunities and innovative projects.
          </p>
          <div className="w-24 h-1 bg-primary dark:bg-blue-400 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-secondary dark:text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary dark:text-gray-200 mb-2">
                  <strong>Name</strong>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-800 text-secondary dark:text-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary dark:text-gray-200 mb-2">
                  <strong>Email</strong>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-800 text-secondary dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary dark:text-gray-200 mb-2">
                  <strong>Message</strong>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-800 text-secondary dark:text-white"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-secondary dark:bg-gray-800 text-white dark:text-gray-200 py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                Send Message
              </button>
          
            </form>
            {status && (
                <p className="mt-4 text-center text-gray-700 dark:text-gray-300">{status}</p>
              )}
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-secondary dark:text-white mb-6">Let's Connect</h3>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through any of the channels below.
              </p>

              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center p-3 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors duration-200 group">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors duration-200">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary dark:text-white mb-1">Email</h4>
                    <a
                      href="mailto:abwai604@gmail.com"
                      className="text-primary dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                    >
                      abwai604@gmail.com
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center p-3 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors duration-200 group">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors duration-200">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary dark:text-white mb-1">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/abuno-waikhom-5073a61b0/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                    >
                      Connect professionally
                    </a>
                  </div>
                </div>
              </div>
            </div>
{/* 
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-800">
              <h4 className="font-semibold text-secondary dark:text-white mb-3">Quick Response</h4>
              <p className="text-gray-600 dark:text-gray-300">
                I typically respond to emails within 24 hours. For urgent matters, LinkedIn messages are also monitored regularly.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;