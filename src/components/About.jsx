import React from 'react';

const About = () => {
  return (
    // Section styling within the main content card
    // Removed background color, adjusted padding
    <section id="about" className="py-12 md:py-16">
      {/* Centered content, adjusted max-width */}
      <div className="max-w-3xl mx-auto px-4">
         {/* Title for the section */}
         <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center md:text-left">
           About
         </h2>
        {/* Adjusted text size, color, line height */}
        <div className="text-base md:text-lg text-gray-700 space-y-5 leading-relaxed text-left">
          <p>
            Hey, I’m Sepehr — a machine learning engineer focused on building AI systems that turn data into decisions.
          </p>
          <p>
            With experience across fintech, enterprise AI, and applied research, I specialize in developing a wide range of ML and LLM pipelines, intelligent infrastructure, and scalable tools that drive real impact. I’ve helped organizations forecast risk, automate insight, and productionize machine learning at scale.
          </p>
          <p>
            I'm passionate about turning complex problems into clean code — and partnering with bold teams to build what’s next.
          </p>
        </div>
         {/* Removed the "Get in touch" link as it's redundant with the Contact section */}
      </div>
    </section>
  );
};

export default About;
