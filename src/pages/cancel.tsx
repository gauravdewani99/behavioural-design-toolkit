
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

export default function CancelPage() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const redirectPath = searchParams.get('redirect') || '/';

  useEffect(() => {
    // Show cancellation message
    toast({
      title: "Payment unsuccessful",
      description: "Your payment was unsuccessful. Please try again.",
      variant: "destructive",
    });

    // Redirect back to the specified page after a short delay
    const timer = setTimeout(() => {
      navigate(redirectPath);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate, toast, redirectPath]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Payment Unsuccessful</h1>
        <p className="text-muted-foreground">
          Your payment was unsuccessful. You can try again when you're ready.
        </p>
        <p className="text-sm text-muted-foreground">
          Redirecting you back...
        </p>
      </div>
    </div>
  );
}
