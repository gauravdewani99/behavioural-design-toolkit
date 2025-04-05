
'use client'

import { Suspense, useState, useEffect } from 'react'
import { Card } from "@/components/ui/card"

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [SplineComponent, setSplineComponent] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const loadSpline = async () => {
      try {
        setIsLoading(true);
        // Dynamic import with error handling
        const Spline = (await import('@splinetool/react-spline')).default;
        setSplineComponent(() => Spline);
        setHasError(false);
      } catch (error) {
        console.error('Failed to load Spline:', error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadSpline();
  }, []);

  if (hasError) {
    return (
      <div className={`w-full h-full flex items-center justify-center bg-muted ${className}`}>
        <div className="text-center p-4">
          <p className="text-destructive mb-2">Could not load 3D scene</p>
          <p className="text-muted-foreground text-sm">Please check your connection or try again later</p>
        </div>
      </div>
    );
  }

  if (isLoading || !SplineComponent) {
    return (
      <div className={`w-full h-full flex items-center justify-center ${className}`}>
        <div className="flex flex-col items-center">
          <div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin mb-4"></div>
          <p className="text-muted-foreground">Loading 3D scene...</p>
        </div>
      </div>
    );
  }

  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin mb-4"></div>
            <p className="text-muted-foreground">Loading 3D scene...</p>
          </div>
        </div>
      }
    >
      <SplineComponent
        scene={scene}
        className={className}
      />
    </Suspense>
  );
}
