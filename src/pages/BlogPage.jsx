import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const blogPosts = [
  {
    title: "Building Scalable Web Applications with React",
    excerpt: "Learn the best practices for creating scalable React applications that can handle millions of users.",
    date: "2024-03-15",
    readTime: "8 min read",
    category: "Web Development",
    slug: "building-scalable-web-applications"
  },
  {
    title: "The Future of AI in Software Development",
    excerpt: "Exploring how artificial intelligence is transforming the way we write and maintain code.",
    date: "2024-03-10",
    readTime: "6 min read",
    category: "Artificial Intelligence",
    slug: "future-of-ai-in-software-development"
  },
  {
    title: "Optimizing Database Performance",
    excerpt: "A comprehensive guide to database optimization techniques for better application performance.",
    date: "2024-03-05",
    readTime: "10 min read",
    category: "Database",
    slug: "optimizing-database-performance"
  }
];

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Your Name</title>
        <meta name="description" content="Read my thoughts on web development, software engineering, and technology trends." />
        <meta property="og:title" content="Blog | Your Name" />
        <meta property="og:description" content="Read my thoughts on web development, software engineering, and technology trends." />
        <meta property="og:type" content="website" />
      </Helmet>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-16"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-12"
          >
            Blog
          </motion.h1>

          <div className="space-y-12">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                    {post.category}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    {post.date}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {post.excerpt}
                </p>
                <a
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Read more →
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.main>
    </>
  );
};

export default BlogPage; 