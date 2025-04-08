
import React from 'react';
import MainLayout from '../components/MainLayout';

const Index: React.FC = () => {
  return (
    <div>
      <div className="bg-background/80 p-4 mb-6 rounded text-sm text-muted-foreground mx-auto max-w-7xl">
        <p>UI design patterns backed by behavioral science principles create more engaging and effective user experiences.</p>
        <p>Research shows that intentional UI pattern selection can increase user engagement by up to 30% and improve task completion rates.</p>
      </div>
      <MainLayout />
    </div>
  );
};

export default Index;
