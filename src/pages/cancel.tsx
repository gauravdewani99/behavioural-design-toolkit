
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

export default function CancelPage() {
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Show cancellation message
    toast({
      title: "Payment cancelled",
      description: "Your payment was cancelled. You'll be redirected back shortly.",
      variant: "destructive",
    });

    // Redirect back to the previous page after a short delay
    const timer = setTimeout(() => {
      navigate(-1);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate, toast]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Payment Cancelled</h1>
        <p className="text-muted-foreground">
          Your payment was cancelled. You can try again when you're ready.
        </p>
        <p className="text-sm text-muted-foreground">
          Redirecting you back...
        </p>
      </div>
    </div>
  );
}
