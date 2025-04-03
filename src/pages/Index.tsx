
import React from 'react';
import Hero from '../components/Hero';
import ComponentGrid from '../components/ComponentGrid';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="pb-8">
        <Hero 
          title="BeSci x UI" 
          subtitle="A list of behaviourally-backed UI components that you can seamlessly integrate in your product"
        />
        <ComponentGrid />
      </main>
      <footer className="py-4 border-t border-border">
        <div className="container">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} UI/UX Component Portfolio
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
