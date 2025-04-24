import React from 'react';

// Placeholder blog data
const blogPosts = [
  {
    id: 1,
    title: 'Understanding Large Language Models',
    date: 'April 15, 2025',
    excerpt: 'A brief overview of LLMs, their architecture, and common applications in the field of AI...',
    link: '#',
  },
  {
    id: 2,
    title: 'Getting Started with Tailwind CSS in React',
    date: 'April 10, 2025',
    excerpt: 'A step-by-step guide to setting up Tailwind CSS in a React project using Vite...',
    link: '#',
  },
];

const Blog = () => {
  return (
    // Section styling within the main content card
    // Removed background color, adjusted padding
    <section id="blog" className="py-12 md:py-16">
      {/* Centered content, adjusted max-width */}
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center md:text-left">
          Blog / Writings
        </h2>
        {/* Simple list layout */}
        <div className="space-y-10">
          {blogPosts.map((post) => (
            <div key={post.id} className="group relative border-b border-gray-200 pb-6 last:border-b-0"> {/* Added border */}
              <p className="text-sm text-gray-500 mb-1">{post.date}</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors duration-150">
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                   <span className="absolute inset-0" aria-hidden="true"></span>
                  {post.title}
                </a>
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">{post.excerpt}</p>
              {/* Removed explicit "Read More" link */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
