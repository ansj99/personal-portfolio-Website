import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/projects/ecommerce.jpg",
    demo: "https://demo.ecommerce.com",
    github: "https://github.com/yourusername/ecommerce"
  },
  {
    title: "Task Management System",
    description: "A collaborative task management platform with real-time updates and team features.",
    technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
    image: "/projects/taskmanager.jpg",
    demo: "https://demo.taskmanager.com",
    github: "https://github.com/yourusername/taskmanager"
  },
  {
    title: "AI Content Generator",
    description: "An AI-powered content generation tool with customizable templates and export options.",
    technologies: ["Python", "TensorFlow", "FastAPI", "React"],
    image: "/projects/aicontent.jpg",
    demo: "https://demo.aicontent.com",
    github: "https://github.com/yourusername/aicontent"
  }
];

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Projects | Your Name</title>
        <meta name="description" content="Explore my portfolio of web development projects, including full-stack applications, AI solutions, and enterprise systems." />
        <meta property="og:title" content="Projects | Your Name" />
        <meta property="og:description" content="Explore my portfolio of web development projects." />
        <meta property="og:type" content="website" />
      </Helmet>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-12"
          >
            Projects
          </motion.h1>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.main>
    </>
  );
};

export default ProjectsPage; 