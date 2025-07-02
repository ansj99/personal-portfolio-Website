import { motion } from 'framer-motion';

const Timeline = () => {
  const timelineEvents = [
    {
      year: 2024,
      events: [
        "Launched scalable AI agent system using Docker + Kafka",
        "Started contributing to open-source React projects",
        "Published technical articles on system design"
      ]
    },
    {
      year: 2023,
      events: [
        "Led development of real-time collaboration platform",
        "Implemented CI/CD pipeline for microservices",
        "Mentored junior developers in React and TypeScript"
      ]
    },
    {
      year: 2022,
      events: [
        "Built and deployed cloud-native applications",
        "Optimized database performance by 40%",
        "Implemented automated testing strategy"
      ]
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
        Timeline
      </motion.h2>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-600 dark:bg-blue-400" />

        <div className="space-y-12">
          {timelineEvents.map((yearData, index) => (
            <motion.div
              key={yearData.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-12"
            >
              {/* Year dot */}
              <div className="absolute left-0 w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-400 flex items-center justify-center">
                <span className="text-white font-bold">{yearData.year}</span>
              </div>

              {/* Events */}
              <div className="space-y-4">
                {yearData.events.map((event, eventIndex) => (
                  <motion.div
                    key={eventIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + eventIndex * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md"
                  >
                    <p className="text-gray-700 dark:text-gray-300">{event}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline; 