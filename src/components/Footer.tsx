
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-6 px-4 mt-auto">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">
              © {currentYear} GetBet2Play2Win. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:contact@getbet2play2win.com" className="text-sm text-gray-400 hover:text-custom-turquoise transition-colors">
              contact@getbet2play2win.com
            </a>
            <span className="hidden sm:inline text-gray-400">|</span>
            <a href="tel:+15551234567" className="text-sm text-gray-400 hover:text-custom-turquoise transition-colors">
              +1 (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
