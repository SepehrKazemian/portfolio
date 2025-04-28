import React, { useState } from 'react';

// Helper function to render content parts (text and links)
const renderContentParts = (parts) => {
  return parts.map((part, index) => {
    if (part.type === 'link') {
      return (
        <a
          key={index}
          href={part.href}
          className="text-indigo-600 hover:text-indigo-800 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {part.text}
        </a>
      );
    }
    // Handle potential HTML entities in text if needed, otherwise render directly
    return <span key={index}>{part.value}</span>;
  });
};


const ProjectItem = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Determine title content: link or plain text
  const titleContent = project.url ? (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-indigo-300 underline"
      onClick={(e) => e.stopPropagation()} // Prevent accordion toggle when clicking link
    >
      {project.title}
    </a>
  ) : (
    project.title
  );

  return (
    <div className="border-b border-gray-200 pb-6 last:border-b-0">
      {/* Header with Title and Toggle Button */}
      <div
        className="flex items-center justify-between cursor-pointer group"
        onClick={(e) => { e.stopPropagation(); toggleExpand(); }} // Stop propagation and toggle
      >
        <h2 className="text-4xl font-semibold text-gray-100 transition-colors duration-150">
          {titleContent}
        </h2>
        <button
          type="button"
          className="text-gray-400 hover:text-gray-200 transition-transform duration-300 transform"
          aria-expanded={isExpanded}
        >
          <svg
            className={`w-6 h-6 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
          <span className="sr-only">{isExpanded ? 'Collapse' : 'Expand'}</span>
        </button>
      </div>

      {/* Collapsible Content Area */}
      {isExpanded && (
        <div className="mt-4 space-y-4 pl-2"> {/* Add padding/margin for content */}
          {project.content.map((item, index) => {
            switch (item.type) {
              case 'h2':
                return <p key={index} className="text-base text-gray-100 mb-2">{item.text}</p>;
              case 'h3':
                return <h3 key={index} className="text-2xl font-medium text-gray-100 mt-4 mb-1">{item.text}</h3>;
              case 'paragraph':
                // Added text-justify
                return <p key={index} className="text-xl text-gray-200 leading-relaxed text-justify">{renderContentParts(item.parts)}</p>;
              case 'list':
                return (
                  // Added text-justify to list items container (ul) if desired, or apply to li if needed
                  <ul key={index} className="list-disc list-inside text-xl text-gray-200 space-y-1 text-justify">
                    {item.items.map((li, liIndex) => <li key={liIndex}>{li}</li>)}
                  </ul>
                );
              default:
                return null;
            }
          })}
        </div>
      )}
    </div>
  );
};

export default ProjectItem;
