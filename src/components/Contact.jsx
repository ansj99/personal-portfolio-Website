import { motion } from 'framer-motion';
import { HiOutlineMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const socialLinks = [
    {
      icon: <HiOutlineMail className="w-full h-full" />,
      url: 'mailto:john@doedev.dev',
      label: 'Email',
    },
    {
      icon: <FaGithub className="w-full h-full" />,
      url: 'https://github.com/johndoe',
      label: 'GitHub',
    },
    {
      icon: <FaLinkedin className="w-full h-full" />,
      url: 'https://linkedin.com/in/johndoe',
      label: 'LinkedIn',
    },
  ];

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Let's Connect
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Open to interesting work, collaborations, or just a quick hello.
          </p>

          <div className="flex justify-center gap-6 pt-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                <span className="text-2xl md:text-3xl">
                  {link.icon}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 