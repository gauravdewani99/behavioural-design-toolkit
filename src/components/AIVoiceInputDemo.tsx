
import { AIVoiceInput } from "@/components/ui/ai-voice-input";
import { useState } from "react";

export function AIVoiceInputDemo() {
  const [recordings, setRecordings] = useState<{ duration: number; timestamp: Date }[]>([]);

  const handleStop = (duration: number) => {
    setRecordings(prev => [...prev.slice(-4), { duration, timestamp: new Date() }]);
  };

  return (
    <div className="w-full max-w-[350px] mx-auto flex flex-col items-center justify-center">
      <AIVoiceInput 
        onStart={() => console.log('Recording started')}
        onStop={handleStop}
        className="py-2 w-full" 
      />   
    </div>
  );
}
