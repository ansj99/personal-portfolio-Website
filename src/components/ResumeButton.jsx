import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const ResumeButton = ({ className = '' }) => {
  return (
    <motion.a
      href="/resume.pdf"
      download
      className={`inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <FiDownload className="mr-2" />
      Download Resume
    </motion.a>
  );
};

export default ResumeButton; 