import { motion } from 'framer-motion';
import { FiCode, FiServer, FiDatabase, FiLayers } from 'react-icons/fi';

const About = () => {
  const features = [
    {
      icon: <FiCode className="w-6 h-6" />,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces with modern frameworks and best practices.',
    },
    {
      icon: <FiServer className="w-6 h-6" />,
      title: 'Backend Development',
      description: 'Creating robust and scalable server-side applications with Node.js, Python, and other technologies.',
    },
    {
      icon: <FiDatabase className="w-6 h-6" />,
      title: 'Database Design',
      description: 'Designing and implementing efficient database schemas and optimizing queries for performance.',
    },
    {
      icon: <FiLayers className="w-6 h-6" />,
      title: 'Full Stack Integration',
      description: 'Seamlessly connecting frontend and backend systems to create cohesive applications.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with a strong foundation in both frontend and backend technologies.
            With several years of experience in the industry, I specialize in creating efficient, scalable, and
            user-friendly applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
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
            href="#contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 