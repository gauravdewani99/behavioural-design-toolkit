
import React from 'react';
import ComponentCard from './ComponentCard';

const components = [
  { 
    title: "Visual Salience", 
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
  },
  { 
    title: "Motion", 
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    title: "Progress Bars", 
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
  },
  { 
    title: "Conversational Input", 
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
  },
  { 
    title: "Theme Toggle", 
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
  },
  { 
    title: "Social Proofing", 
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80"
  },
  { 
    title: "Future Component", 
    imageUrl: "", 
    empty: true 
  },
  { 
    title: "Future Component", 
    imageUrl: "", 
    empty: true 
  }
];

const ComponentGrid: React.FC = () => {
  return (
    <div className="container py-12 md:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {components.map((component, index) => (
          <div key={index} className="opacity-0 animate-fade-in" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
            <ComponentCard 
              title={component.title} 
              imageUrl={component.imageUrl} 
              empty={component.empty ?? false}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComponentGrid;
