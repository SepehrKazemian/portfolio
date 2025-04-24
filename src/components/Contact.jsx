import React from 'react';

const Contact = () => {
  return (
    // Adjusted padding, removed background
    <section id="contact" className="py-20 md:py-28">
      {/* Wider container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Contact
        </h2>
        <div className="text-base text-gray-600 space-y-4">
          <p>
            [Placeholder: Add a sentence inviting people to contact you, e.g., "Interested in collaborating or have a question? Feel free to reach out."]
          </p>
          {/* Email link styling */}
          <p>
            Email: <a
              href="mailto:your.email@example.com" // Replace with your actual email
              className="text-indigo-600 hover:text-indigo-800 font-medium break-all"
            >
              your.email@example.com
            </a>
          </p>
          {/* Social links styling */}
          <div className="pt-4">
            <p className="mb-3">Links:</p>
            <div className="flex space-x-5">
              <a href="[Your LinkedIn URL]" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 transition-colors duration-200 font-medium">
                LinkedIn
              </a>
              <a href="[Your GitHub URL]" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors duration-200 font-medium">
                GitHub
              </a>
              {/* Add other social links (e.g., Twitter, Medium) */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
