import { motion } from 'framer-motion';

const WorkPhilosophy = () => {
  const principles = [
    {
      title: "Code should explain itself",
      description: "Writing self-documenting code that's easy to understand and maintain."
    },
    {
      title: "Secure by default",
      description: "Implementing security best practices from the start, not as an afterthought."
    },
    {
      title: "Build fast, but never carelessly",
      description: "Balancing speed with quality and maintainability."
    },
    {
      title: "Test what matters",
      description: "Focusing on meaningful tests that provide real value and confidence."
    },
    {
      title: "Learn and share",
      description: "Continuously learning and sharing knowledge with the community."
    },
    {
      title: "User-first thinking",
      description: "Always considering the end-user experience in every decision."
    }
  ];

  return (
    <section className="py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-gray-900 dark:text-white mb-8"
      >
        How I Work
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {principles.map((principle, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {principle.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {principle.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkPhilosophy; 