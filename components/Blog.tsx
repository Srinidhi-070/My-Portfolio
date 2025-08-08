import React from 'react';
import { motion } from 'framer-motion';
import { BLOG_POSTS } from '../constants';
import type { BlogPost } from '../types';
import AnimatedSection from './ui/AnimatedSection';

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <motion.a 
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-neutral-100 dark:bg-neutral-950 p-6 rounded-lg border border-neutral-200 dark:border-neutral-800/50 transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-200/50 dark:hover:bg-neutral-900 group"
      whileHover={{ y: -5 }}
      aria-label={`Read post: ${post.title}`}
    >
      <h3 className="text-xl font-semibold text-black dark:text-white mb-2">{post.title}</h3>
      <p className="text-neutral-600 dark:text-neutral-400 mb-4">{post.description}</p>
      <div className="flex items-center text-sm font-medium text-neutral-600 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white transition-colors">
        Read Post
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 opacity-70 group-hover:opacity-100 transition-opacity"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
      </div>
    </motion.a>
  );
};

const Blog: React.FC = () => {
  return (
    <AnimatedSection id="blog">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-black dark:text-white mb-12 text-center">From the Blog</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <BlogCard key={post.title} post={post} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Blog;