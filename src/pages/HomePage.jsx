import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiTwitter, FiArrowRight } from 'react-icons/fi';
import { projects } from '../data/projects';
import { blogPosts } from '../data/blogPosts';

const HomePage = () => {
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/yourusername' },
    { icon: <FiLinkedin />, url: 'https://linkedin.com/in/yourusername' },
    { icon: <FiTwitter />, url: 'https://twitter.com/yourusername' },
  ];

  // Get the first 2 projects and blog posts
  const featuredProjects = projects.slice(0, 2);
  const latestPosts = blogPosts.slice(0, 2);

  return (
    <>
      <Helmet>
        <title>Your Name | Full Stack Developer</title>
        <meta name="description" content="Full Stack Developer specializing in React, Node.js, and modern web technologies. Building scalable applications with a focus on performance and user experience." />
        <meta property="og:title" content="Your Name | Full Stack Developer" />
        <meta property="og:description" content="Full Stack Developer specializing in React, Node.js, and modern web technologies." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Name | Full Stack Developer" />
        <meta name="twitter:description" content="Full Stack Developer specializing in React, Node.js, and modern web technologies." />
      </Helmet>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Hero Section */}
        <section className="min-h-[80vh] flex items-center justify-center bg-gray-50 dark:bg-gray-900 pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              >
                Hi, I'm <span className="text-blue-600 dark:text-blue-400">Your Name</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8"
              >
                I build scalable systems and clean interfaces
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex justify-center space-x-6 mb-12"
              >
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <span className="text-2xl">{link.icon}</span>
                  </a>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex justify-center space-x-4"
              >
                <Link
                  to="/projects"
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Projects
                </Link>
                <Link
                  to="/blog"
                  className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                >
                  Read Blog
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mini About Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                I'm a full-stack developer with a passion for creating efficient, scalable applications. 
                With expertise in modern web technologies and cloud services, I help businesses transform 
                their ideas into robust digital solutions.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                Learn more about my journey
                <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Project Preview Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Here are some of my recent works</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-md text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View All Projects
                <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Blog Preview Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Latest Articles</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Insights and thoughts on technology</p>
            </motion.div>

            <div className="space-y-8 mb-12">
              {latestPosts.map((post, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6"
                >
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300 mb-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    Read More
                    <FiArrowRight className="ml-2" />
                  </Link>
                </motion.article>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link
                to="/blog"
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Read More Posts
                <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Have an idea? Let's talk.
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get in Touch
                <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </section>
      </motion.main>
    </>
  );
};

export default HomePage; 