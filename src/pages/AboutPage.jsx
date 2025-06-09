import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About | John Doe</title>
        <meta name="description" content="Learn more about John Doe - A passionate developer focused on building clean and scalable systems." />
        <meta property="og:title" content="About | John Doe" />
        <meta property="og:description" content="Learn more about John Doe - A passionate developer focused on building clean and scalable systems." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h1>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                I'm a developer who loves building clean and scalable systems. With a passion for creating elegant solutions to complex problems, I focus on writing maintainable code and crafting intuitive user experiences.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                This page will be updated soon with more details about my journey, skills, and experiences in software development.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutPage; 