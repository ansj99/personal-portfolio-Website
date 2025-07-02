import { motion } from 'framer-motion';
import { HiOutlineDocumentText } from 'react-icons/hi';

const ResumeButton = ({ className = '' }) => {
  return (
    <motion.a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title="View & Download Resume (PDF)"
    >
      <HiOutlineDocumentText className="text-xl" />
      Resume
    </motion.a>
  );
};

export default ResumeButton; 