
import React, { useState, useEffect } from 'react';

// Array of "Coming Soon" in different languages
const comingSoonTranslations = [
  { language: "English", text: "Coming Soon" },
  { language: "Chinese", text: "即将推出" },
  { language: "Spanish", text: "Próximamente" },
  { language: "French", text: "Bientôt Disponible" },
  { language: "Italian", text: "Prossimamente" },
  { language: "German", text: "Demnächst" },
  { language: "Portuguese", text: "Em Breve" },
  { language: "Arabic", text: "قريبًا" }
];

const ComingSoonText: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Change text every 3 seconds
    const interval = setInterval(() => {
      setIsVisible(false);
      
      // Wait for fade-out animation to complete
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % comingSoonTranslations.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-24 flex justify-center items-center">
      <h2 
        className={`text-5xl md:text-7xl font-bold text-gradient transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        {comingSoonTranslations[currentIndex].text}
      </h2>
    </div>
  );
};

export default ComingSoonText;
