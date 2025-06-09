import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Building Modern Web Applications',
      excerpt: 'A deep dive into modern web development practices and tools that are shaping the future of web applications.',
      date: 'March 15, 2024',
      readTime: '5 min read',
      path: '/blog/post-1',
    },
    {
      id: 2,
      title: 'The Future of AI in Web Development',
      excerpt: 'Exploring how artificial intelligence is revolutionizing the way we build and interact with web applications.',
      date: 'March 20, 2024',
      readTime: '7 min read',
      path: '/blog/post-2',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Blog | John Doe</title>
        <meta name="description" content="Thoughts and insights on web development, technology, and software engineering." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Blog
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Thoughts and insights on web development, technology, and software engineering
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link
                    to={post.path}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    Read More
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage; 