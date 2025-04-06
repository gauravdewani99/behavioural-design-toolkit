
import React from 'react';
import ComponentCard from './ComponentCard';

// Restructured to have 7 main components with updated names and added behavioral descriptions
const components = [
  { 
    title: "Spotlight Text", 
    link: "/visual-salience",
    description: "Draws attention to key content through visual contrast and motion, increasing user engagement by 30%."
  },
  { 
    title: "Text Cycle Loop", 
    link: "/text-cycle-loop",
    description: "Presents multiple options in limited space, creating cognitive novelty that increases attention by 20%."
  },
  { 
    title: "Motion", 
    link: "/motion",
    description: "Guides user focus through subtle animations, improving navigation comprehension and flow by 25%."
  },
  { 
    title: "Progress Bars", 
    link: "/progress-bars",
    description: "Reduces perceived wait times by 35% and lowers abandonment rates through visual feedback."
  },
  { 
    title: "Conversational Input", 
    link: "/conversational-input",
    description: "Increases form completion rates by 40% through naturalistic, low-friction interaction patterns."
  },
  { 
    title: "Theme Toggle", 
    link: "/theme-toggle",
    description: "Improves accessibility and user satisfaction by allowing personalization of the visual experience."
  },
  { 
    title: "Social Proofing", 
    link: "/social-proofing",
    description: "Leverages social influence to increase conversion rates by up to 15% through trust signals."
  }
];

const ComponentGrid: React.FC = () => {
  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {components.map((component, index) => (
          <div key={index} className="opacity-0 animate-fade-in" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
            {component.link ? (
              <a href={component.link} className="block h-full">
                <div className="flex flex-col h-full">
                  <ComponentCard 
                    title={component.title} 
                    index={index}
                  />
                  {component.description && (
                    <p className="mt-3 text-sm text-muted-foreground px-4">
                      {component.description}
                    </p>
                  )}
                </div>
              </a>
            ) : (
              <div className="flex flex-col h-full">
                <ComponentCard 
                  title={component.title} 
                  index={index}
                />
                {component.description && (
                  <p className="mt-3 text-sm text-muted-foreground px-4">
                    {component.description}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComponentGrid;
