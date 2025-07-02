import { motion } from 'framer-motion';
import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiCoffee, FiUsers, FiMic, FiCode, FiBook, FiTrendingUp, FiGlobe } from 'react-icons/fi';
import { Helmet } from 'react-helmet';

const ContactPage = () => {
  const contactMethods = [
    {
      icon: <HiOutlineMail className="text-2xl" />,
      label: 'Email',
      href: 'mailto:ansjoju10@gmail.com',
      color: 'hover:text-blue-400',
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/ansjoju',
      color: 'hover:text-blue-500',
    },
    {
      icon: <FaGithub className="text-2xl" />,
      label: 'GitHub',
      href: 'https://github.com/ansj99',
      color: 'hover:text-gray-300',
    },
  ];

  const opportunities = [
    {
      icon: <FiCoffee className="text-xl" />,
      title: 'Freelance Projects',
      description: 'Full-stack development and technical consulting',
    },
    {
      icon: <FiUsers className="text-xl" />,
      title: 'AI Infrastructure',
      description: 'Collaborating on scalable AI/ML systems',
    },
    {
      icon: <FiMic className="text-xl" />,
      title: 'Speaking',
      description: 'Tech talks and workshop facilitation',
    },
    {
      icon: <FiCode className="text-xl" />,
      title: 'Open Source',
      description: 'Contributing to meaningful projects',
    },
  ];

  const whatsNext = [
    {
      icon: <FiBook className="text-xl" />,
      title: 'Learning',
      description: 'Deep diving into WebAssembly and Rust',
    },
    {
      icon: <FiTrendingUp className="text-xl" />,
      title: 'Building',
      description: 'Open-source AI development tools',
    },
    {
      icon: <FiGlobe className="text-xl" />,
      title: 'Planning',
      description: 'Global tech community initiatives',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact | Ans Joju</title>
        <meta name="description" content="Contact Ans Joju – web developer and AI enthusiast based in Toronto, Canada. Get in touch for opportunities, collaborations, or just to say hello." />
        <meta property="og:title" content="Contact | Ans Joju" />
        <meta property="og:description" content="Contact Ans Joju – web developer and AI enthusiast based in Toronto, Canada. Get in touch for opportunities, collaborations, or just to say hello." />
        <meta name="twitter:title" content="Contact | Ans Joju" />
        <meta name="twitter:description" content="Contact Ans Joju – web developer and AI enthusiast based in Toronto, Canada. Get in touch for opportunities, collaborations, or just to say hello." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Personal Quote Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <blockquote className="text-xl italic text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              "Building technology that empowers people to create, collaborate, and innovate is what drives me every day."
            </blockquote>
          </motion.div>

          {/* Contact Methods Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center gap-8 mb-16"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400 transition-colors ${method.color}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              >
                {method.icon}
                <span className="text-sm font-medium">{method.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Send a Message</h2>
            <div className="max-w-2xl mx-auto space-y-6">
              <form action="mailto:ansjoju10@gmail.com" method="POST" encType="text/plain" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                    placeholder="Your Message"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md shadow transition w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Location & Availability Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <div className="inline-block p-6 rounded-lg bg-gray-100 dark:bg-gray-800">
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-medium">📍 Based in Toronto, Ontario, Canada</span>
                <br />
                <span className="mt-2 block">🕐 I usually reply within 24–48 hours</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ContactPage; 