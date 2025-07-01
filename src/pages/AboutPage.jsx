import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About | Ans Joju</title>
        <meta name="description" content="Learn more about Ans Joju – a web developer and AI enthusiast based in Toronto, Canada. Discover his background, interests, and unique approach to building user-centric platforms and AI-enabled tools." />
        <meta property="og:title" content="About | Ans Joju" />
        <meta property="og:description" content="Learn more about Ans Joju – a web developer and AI enthusiast based in Toronto, Canada. Discover his background, interests, and unique approach to building user-centric platforms and AI-enabled tools." />
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
                I'm a web developer with a strong foundation in front-end technologies, startup experience, and a growing passion for AI and automation. Whether I'm building user-facing platforms or experimenting with agentic AI tools, I bring a hands-on, fast-learning mindset to every project. I enjoy solving real-world problems with clean design, efficient code, and curiosity-driven iteration.
              </p>
              <ul className="list-disc pl-5 text-lg text-gray-600 dark:text-gray-300 mb-6">
                <li>Building user-centric platforms</li>
                <li>AI-enabled tools and automations</li>
                <li>Web apps that solve real-world problems</li>
              </ul>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I combine real-world event and security experience with technical projects and startup hustle. I'm adaptable, practical, and detail-oriented — with a habit of picking things up fast in high-pressure environments.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutPage; 