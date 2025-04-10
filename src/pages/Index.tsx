
import React from 'react';
import Logo from '../components/Logo';
import ComingSoonText from '../components/ComingSoonText';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="container mx-auto flex flex-col items-center justify-center space-y-12">
          {/* Logo */}
          <Logo />
          
          {/* Coming Soon Text */}
          <ComingSoonText />
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
