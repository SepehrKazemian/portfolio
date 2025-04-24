import React from 'react';

// Accept onEnterClick prop
const Hero = ({ onEnterClick }) => {
  return (
    // Section with correct padding
    <section id="hero" className="flex flex-col items-center justify-center px-4 pt-8 pb-16 md:pt-12 md:pb-24 relative z-10">
      {/* Top Box: Dark gray background, correct text colors/gradient, reduced bottom margin */}
      <div className="text-center mb-4 md:mb-6 max-w-3xl bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
        {/* Name: White-to-green gradient */}
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-green-500 text-transparent bg-clip-text mb-3">Sepehr Kazemian</h1>
        {/* Sentence: Light gray, normal weight */}
        <p className="text-lg md:text-xl text-gray-200">
          Engineering AI to amplify leader's potential and unlock humanity's next chapter
        </p>
      </div>

      {/* Main Card: Corrected background (bg-gray-500), hover effect, correct padding, onClick */}
      <div
        // Note: onClick is on the whole card now. If only the button should trigger, move onClick there.
        onClick={onEnterClick}
        className="group bg-gray-500 rounded-lg shadow-xl p-8 md:p-12 max-w-3xl w-full text-center border border-gray-600 transform transition-transform duration-300 ease-out hover:scale-105 cursor-pointer animate-fade-slide-up" // Corrected background, adjusted border
      >
        {/* Summary Text: Correct color (white) and alignment */}
        <div className="text-base md:text-lg text-white px-4 md:px-8 mb-10 space-y-4 text-left text-justify">
          <p>
            Hey, I’m Sepehr, a <strong>machine learning engineer</strong> focused on building <strong>AI systems</strong> that turn data into decisions.
          </p>
          <p>
            With experience across <strong>fintech</strong>, <strong>enterprise AI</strong>, and <strong>applied research</strong>, I specialize in developing a wide range of <strong>ML and LLM pipelines</strong>, intelligent infrastructure, and <strong>scalable tools</strong> that drive real impact. I’ve helped organizations <strong>forecast risk</strong>, <strong>automate insight</strong>, and <strong>productionize machine learning</strong> at scale.
          </p>
          <p>
            I'm passionate about turning <strong>complex problems</strong> into <strong>clean code</strong> and partnering with <strong>bold teams</strong> to build what’s next.
          </p>
        </div>

        {/* "See Projects" Button */}
        <div className="mb-8"> {/* Add margin below button */}
           <button
             type="button"
             onClick={onEnterClick} // Also trigger the click handler here
             className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200 text-lg"
           >
             Check Out My Projects
           </button>
         </div>

        {/* Image: Correct size and margin */}
        <div className="w-64 h-64 md:w-96 md:h-96 rounded-md mx-auto bg-gray-200 border border-gray-300 flex items-center justify-center overflow-hidden mb-8">
          <img src="/ghibli_image.png" alt="Profile" className="w-full h-full object-cover" />
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          {/* GitHub Link with Icon */}
          <a
            href="https://github.com/SepehrKazemian"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          {/* LinkedIn Link with Icon */}
          <a
            href="https://www.linkedin.com/in/sepehrkazemian/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
          >
             <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
               <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
             </svg>
            LinkedIn
          </a>
          {/* CV Link with Icon */}
          <a
            href="/Sepehr CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-600 hover:bg-green-500 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            Full CV
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
