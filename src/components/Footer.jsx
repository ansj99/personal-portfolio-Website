import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Now', path: '/now' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/ansj99', label: 'GitHub' },
    { icon: <FiLinkedin />, url: 'https://linkedin.com/in/ansjoju', label: 'LinkedIn' },
    { icon: <FiTwitter />, url: 'https://x.com/AnsJoju', label: 'Twitter' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <nav className="flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={link.label}
              >
                <span className="text-xl">{link.icon}</span>
              </a>
            ))}
            
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Ans Joju. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-1">
            
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 