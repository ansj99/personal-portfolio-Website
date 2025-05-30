import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const NowPage = () => {
  const currentActivities = {
    building: [
      "Building a real-time collaboration platform using WebRTC and WebSocket",
      "Developing an AI-powered code review assistant",
      "Creating a personal finance tracking app with React Native"
    ],
    learning: [
      "Deep diving into WebAssembly and Rust for web development",
      "Exploring advanced TypeScript patterns and best practices",
      "Studying system design and distributed systems architecture"
    ],
    sideProjects: [
      "Contributing to open-source projects in the React ecosystem",
      "Writing technical blog posts about web development",
      "Building a community around developer productivity tools"
    ]
  };

  return (
    <>
      <Helmet>
        <title>What I'm Doing Now | Your Name</title>
        <meta name="description" content="Current projects, learning goals, and side projects I'm working on." />
      </Helmet>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-16"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
          >
            What I'm Doing Now
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300 mb-12"
          >
            This page is inspired by Derek Sivers' "now page" concept. It's a snapshot of what I'm currently focused on, learning, and building.
          </motion.p>

          <div className="space-y-12">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Currently Building
              </h2>
              <ul className="space-y-3">
                {currentActivities.building.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Currently Learning
              </h2>
              <ul className="space-y-3">
                {currentActivities.learning.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Side Projects
              </h2>
              <ul className="space-y-3">
                {currentActivities.sideProjects.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.section>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-sm text-gray-500 dark:text-gray-400 mt-12"
          >
            Last updated: {new Date().toLocaleDateString()}
          </motion.p>
        </div>
      </motion.main>
    </>
  );
};

export default NowPage; 