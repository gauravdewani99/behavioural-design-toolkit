
"use client";

import { Button } from "@/components/ui/button";
import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperTrigger,
} from "@/components/ui/stepper";
import { useState } from "react";

// Define step content
const stepContent = [
  {
    title: "Set Expectations",
    description: "Progress bars reduce anxiety by setting clear timeline expectations."
  },
  {
    title: "Show Current State",
    description: "They provide visual feedback about the current state of a process."
  },
  {
    title: "Maintain Engagement",
    description: "Progress indicators keep users engaged during multi-step processes."
  },
  {
    title: "Celebrate Completion",
    description: "Completing steps offers a sense of achievement and forward momentum."
  }
];

function StepperDemo() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="mx-auto max-w-xl space-y-8 text-center min-w-[300px] pt-12">
      <div className="space-y-3">
        <Stepper value={currentStep} onValueChange={setCurrentStep}>
          {stepContent.map((step, index) => (
            <StepperItem key={index + 1} step={index + 1} className="flex-1">
              <StepperTrigger className="w-full flex-col items-start gap-2" asChild>
                <StepperIndicator asChild className="h-2 w-full rounded-none bg-border">
                  <span className="sr-only">{index + 1}</span>
                </StepperIndicator>
              </StepperTrigger>
            </StepperItem>
          ))}
        </Stepper>
        <div className="text-sm font-medium tabular-nums text-muted-foreground">
          Step {currentStep} of {stepContent.length}
        </div>
      </div>

      {/* Display the content for the current step */}
      <div className="bg-card p-6 rounded-md border border-border">
        <h3 className="font-semibold text-lg mb-2">{stepContent[currentStep - 1].title}</h3>
        <p className="text-muted-foreground">{stepContent[currentStep - 1].description}</p>
      </div>

      <div className="flex justify-center space-x-4">
        <Button
          variant="outline"
          className="w-32"
          onClick={() => setCurrentStep((prev) => prev - 1)}
          disabled={currentStep === 1}
        >
          Prev step
        </Button>
        <Button
          variant="outline"
          className="w-32"
          onClick={() => setCurrentStep((prev) => prev + 1)}
          disabled={currentStep >= stepContent.length}
        >
          Next step
        </Button>
      </div>
    </div>
  );
}

export default StepperDemo;
