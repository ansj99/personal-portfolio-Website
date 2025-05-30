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
      href: 'mailto:john@doedev.dev',
      color: 'hover:text-blue-400',
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/yourusername',
      color: 'hover:text-blue-500',
    },
    {
      icon: <FaGithub className="text-2xl" />,
      label: 'GitHub',
      href: 'https://github.com/yourusername',
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
        <title>Contact | John Doe</title>
        <meta name="description" content="Get in touch with John Doe for collaborations, opportunities, or just to say hello." />
        <meta property="og:title" content="Contact | John Doe" />
        <meta property="og:description" content="Get in touch with John Doe for collaborations, opportunities, or just to say hello." />
        <meta name="twitter:title" content="Contact | John Doe" />
        <meta name="twitter:description" content="Get in touch with John Doe for collaborations, opportunities, or just to say hello." />
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

          {/* Location & Availability Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <div className="inline-block p-6 rounded-lg bg-gray-100 dark:bg-gray-800">
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-medium">📍 Based in Toronto, Canada</span>
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