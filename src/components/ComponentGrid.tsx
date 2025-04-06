
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
    title: "Motion", 
    link: "/motion"
  },
  { 
    title: "Progress Bars", 
    link: "/progress-bars"
  },
  { 
    title: "Conversational Input", 
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
    <div className="container py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {components.map((component, index) => (
          <div key={index} className="opacity-0 animate-fade-in" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
            {component.link ? (
              <a href={component.link}>
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
