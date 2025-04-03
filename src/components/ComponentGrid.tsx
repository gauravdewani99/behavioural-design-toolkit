import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

// Define the structure for each component item
interface ComponentItem {
  name: string;
  description: string;
  href: string;
}

// Update the array of components to include Conversational Input
export const components = [
  {
    name: "Visual Salience",
    description: "Drawing attention to key interface elements with visual cues",
    href: "/visual-salience",
  },
  {
    name: "Motion",
    description: "Using animation to convey meaning and enhance usability",
    href: "/motion",
  },
  {
    name: "Progress Bars",
    description: "Modern, interactive progress indicators to enhance user experience",
    href: "/progress-bars",
  },
  {
    name: "Conversational Input",
    description: "Text and voice interfaces for natural human-computer interaction",
    href: "/conversational-input",
  },
];

const ComponentGrid: React.FC = () => {
  return (
    <div className="container py-8">
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {components.map((component, index) => (
          <a key={index} href={component.href} className="no-underline">
            <Card className="transition-colors duration-300 transform hover:scale-102 hover:shadow-lg">
              <CardHeader>
                <CardTitle>{component.name}</CardTitle>
                <CardDescription>{component.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-end text-primary">
                Explore <ArrowRight className="ml-2 h-4 w-4" />
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ComponentGrid;
