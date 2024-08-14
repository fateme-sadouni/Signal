// src/components/BackgroundManager.js

import React, { useState, useEffect } from 'react';

const backgroundImages = {
  default: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3",
  vegetables: "https://images.unsplash.com/photo-1467453678174-768ec283a940?auto=format&fit=crop&q=80&w=2076&ixlib=rb-4.0.3",
  fruits: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
  grains: "https://images.unsplash.com/photo-1486887396153-fa416526c108?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
  protein: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
  dairy: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
};

const BackgroundManager = ({ currentSection, children }) => {
  const [background, setBackground] = useState(backgroundImages.default);

  useEffect(() => {
    switch(currentSection) {
      case 'vegetables':
        setBackground(backgroundImages.vegetables);
        break;
      case 'fruits':
        setBackground(backgroundImages.fruits);
        break;
      case 'grains':
        setBackground(backgroundImages.grains);
        break;
      case 'protein':
        setBackground(backgroundImages.protein);
        break;
      case 'dairy':
        setBackground(backgroundImages.dairy);
        break;
      default:
        setBackground(backgroundImages.default);
    }
  }, [currentSection]);

  return (
    <div 
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        transition: 'background-image 0.5s ease-in-out'
      }}
      className="min-h-screen"
    >
      {children}
    </div>
  );
};

export default BackgroundManager;
