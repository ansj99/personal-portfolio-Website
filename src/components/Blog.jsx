import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Building Scalable Applications with React and Node.js',
      excerpt: 'Learn how to create scalable web applications using React for the frontend and Node.js for the backend, with best practices and real-world examples.',
      date: 'March 15, 2024',
      readTime: '8 min read',
      image: '/blog/react-node.jpg',
      slug: 'building-scalable-applications',
    },
    {
      title: 'Mastering TypeScript: A Comprehensive Guide',
      excerpt: 'A deep dive into TypeScript features, type system, and how to leverage it effectively in your projects for better code quality and developer experience.',
      date: 'March 10, 2024',
      readTime: '10 min read',
      image: '/blog/typescript.jpg',
      slug: 'mastering-typescript',
    },
    {
      title: 'The Future of Web Development: Trends to Watch',
      excerpt: 'Explore the latest trends in web development, from new frameworks and tools to emerging technologies that are shaping the future of the web.',
      date: 'March 5, 2024',
      readTime: '6 min read',
      image: '/blog/web-dev-trends.jpg',
      slug: 'future-of-web-development',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on web development, programming, and technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300 mb-4">
                  <div className="flex items-center">
                    <FiCalendar className="mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <FiClock className="mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  Read More
                  <FiArrowRight className="ml-2" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="/blog"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Posts
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog; 