import React from 'react';

export default function Blog() {
  const blogPosts = [
    {
      title: 'Choosing the Right Sewing Machine',
      excerpt: 'Learn how to select the perfect sewing machine for your needs.',
      date: 'December 1, 2025'
    },
    {
      title: 'Basic Sewing Techniques',
      excerpt: 'Master these essential sewing techniques to improve your skills.',
      date: 'November 25, 2025'
    },
    {
      title: 'Fabric Care Guide',
      excerpt: 'How to properly care for different types of fabrics.',
      date: 'November 18, 2025'
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#1a365d] mb-8">Our Blog</h1>
        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-semibold text-[#c54513] mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-2">{post.excerpt}</p>
              <span className="text-sm text-gray-500">{post.date}</span>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
