
import React from 'react';
import ComponentCard from './ComponentCard';

// Restructured to have 7 main components with updated names
const components = [
  { 
    title: "Spotlight Text", 
    link: "/visual-salience"
  },
  { 
    title: "Text Cycle Loop", 
    link: "/text-cycle-loop"
  },
  { 
    title: "3D Motion", 
    link: "/motion"
  },
  { 
    title: "Progress Bar", 
    link: "/progress-bars"
  },
  { 
    title: "AI Conversational Input", 
    link: "/conversational-input"
  },
  { 
    title: "Theme Toggle", 
    link: "/theme-toggle"
  },
  { 
    title: "Social Proofing", 
    link: "/social-proofing"
  }
];

const ComponentGrid: React.FC = () => {
  return (
    <div className="container py-4 md:py-8 px-4 md:px-6">
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
        {components.map((component, index) => (
          <div key={index} className="opacity-0 animate-fade-in w-full" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
            {component.link ? (
              <a href={component.link} className="block w-full">
                <ComponentCard 
                  title={component.title} 
                  index={index}
                />
              </a>
            ) : (
              <ComponentCard 
                title={component.title} 
                index={index}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComponentGrid;
