import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const PostOne = () => {
  return (
    <>
      <Helmet>
        <title>Building Modern Web Applications | John Doe</title>
        <meta name="description" content="A deep dive into modern web development practices and tools." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8"
      >
        <article className="max-w-3xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Building Modern Web Applications
            </h1>
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <span>March 15, 2024</span>
              <span className="mx-2">•</span>
              <span>5 min read</span>
            </div>
          </header>

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              In today's fast-paced digital landscape, building modern web applications requires a careful balance of performance, user experience, and maintainability. Let's explore some key principles and practices that can help you create better web applications.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              The Importance of Performance
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Performance is no longer just a nice-to-have feature—it's a critical aspect of user experience. Modern users expect web applications to load quickly and respond instantly to their interactions. This means optimizing everything from initial load times to runtime performance.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              User Experience Matters
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              A great user experience goes beyond just making things look pretty. It's about creating intuitive interfaces that help users accomplish their goals efficiently. This includes thoughtful navigation, clear feedback, and accessible design patterns.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              Code Maintainability
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Writing maintainable code is crucial for long-term success. This means following best practices, using consistent patterns, and documenting your code effectively. Remember, you're not just writing code for the computer—you're writing it for other developers (including your future self).
            </p>

            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Key Takeaways
              </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Performance optimization is essential for user satisfaction</li>
                <li>Focus on creating intuitive and accessible user interfaces</li>
                <li>Write maintainable code with clear documentation</li>
                <li>Stay updated with modern web development practices</li>
              </ul>
            </div>
          </div>
        </article>
      </motion.div>
    </>
  );
};

export default PostOne; 