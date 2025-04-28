import React, { useState } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
// Keep these commented out
// import Navbar from './components/Navbar';
// import About from './components/About';
// import Blog from './components/Blog';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

function App() {
  const [showContent, setShowContent] = useState(false);

  const handleHeroClick = () => {
    setShowContent(true);
  };

  // Function to go back to hero view
  const handleGoBack = () => {
    setShowContent(false);
  };

  return (
    <div className="relative min-h-screen">
      {/* Video Background - always present */}
      <video autoPlay loop muted playsInline className="video-background">
        <source src="/portfolio/background-vid_1080p.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Conditionally render Hero or just the Projects content */}
      {!showContent ? (
        <Hero onEnterClick={handleHeroClick} />
      ) : (
        // Render only Projects component inside a styled container
        // Add onClick handler to this container to go back
        <div
          onClick={handleGoBack} // Add click handler to go back
            className="relative z-10 max-w-6xl mx-auto my-12 p-8 md:p-12 rounded-lg shadow-xl border border-gray-200 cursor-pointer bg-gray-500" // Added cursor-pointer
        >
          <Projects />
        </div>
      )}
    </div>
  );
}

export default App;
