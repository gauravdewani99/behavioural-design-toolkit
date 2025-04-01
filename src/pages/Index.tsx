
import React from 'react';
import Hero from '../components/Hero';
import ComponentGrid from '../components/ComponentGrid';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="pb-16">
        <Hero 
          title="YOUR NAME" 
          subtitle="Every product bottleneck is a behavioural problem. Here are some FE components that make modern day web design standout."
        />
        <ComponentGrid />
      </main>
      <footer className="py-6 border-t border-border">
        <div className="container">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} UI/UX Component Portfolio
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
