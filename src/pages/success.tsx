
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

const PAYMENT_STATUS_KEY = "prompt_payment_status";
const PRODUCT_ID = "ai_prompt_3d_motion";

export default function SuccessPage() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const redirectPath = searchParams.get('redirect') || '/';
  const shouldOpenPrompt = searchParams.get('openPrompt') === 'true';

  useEffect(() => {
    // Mark the payment as successful
    localStorage.setItem(PAYMENT_STATUS_KEY, PRODUCT_ID);
    
    // Show success message
    toast({
      title: "Payment successful!",
      description: "You can now view the prompt.",
    });

    // Redirect back to the specified page after a short delay
    const timer = setTimeout(() => {
      navigate(redirectPath, { 
        state: { openPrompt: shouldOpenPrompt } 
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate, toast, redirectPath, shouldOpenPrompt]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Payment Successful!</h1>
        <p className="text-muted-foreground">
          Thank you for your purchase. You now have access to the AI prompt.
        </p>
        <p className="text-sm text-muted-foreground">
          Redirecting you back...
        </p>
      </div>
    </div>
  );
}
