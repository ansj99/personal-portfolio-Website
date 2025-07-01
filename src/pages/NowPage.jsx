import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const NowPage = () => {
  const currentActivities = {
    building: [
      "Developing the front-end for AI Store using React, Tailwind CSS, and Framer Motion.",
      "Integrating real-time execution data and memory visualization into a secure agent execution interface.",
      "Designing UI components that communicate system-level activity and modular logic clearly."
    ],
    learning: [
      "Experimenting with workflow automations like email triggers, submission events, and async task flows.",
      "Exploring design systems and how component architecture scales with project complexity.",
      
    ],
    sideProjects: [
      "Managing content for Rail Tech’s social media platforms like LinkedIn and X.",
      "Planning and designing a dev-focused blog to share insights and frontend practices.",
      "Exploring the possibilities around secure front-end  development and content creation."
    ]
  };

  return (
    <>
      <Helmet>
        <title>Now | Ans Joju</title>
        <meta name="description" content="What Ans Joju is currently working on — building AI Store, automating workflows, and designing tools for devs." />
        <meta property="og:title" content="Now | Ans Joju" />
        <meta property="og:description" content="What Ans Joju is currently working on — building AI Store, automating workflows, and designing tools for devs." />
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
            A snapshot of what I’m currently focused on — from platform building to side experimentation.
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
            Last updated: July 1, 2025
          </motion.p>
        </div>
      </motion.main>
    </>
  );
};

export default NowPage;
