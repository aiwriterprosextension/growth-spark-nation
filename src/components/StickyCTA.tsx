import { Button } from "@/components/ui/button";
import { Phone, X } from "lucide-react";
import { useState } from "react";

export const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // Show after 3 seconds
  useState(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  });

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  if (!isVisible || isDismissed) return null;

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-accent to-accent-dark shadow-2xl p-4 md:hidden transform transition-transform duration-500 ease-out">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="text-white font-bold text-sm">Free $200 Audit - Limited Time</div>
            <div className="text-white/80 text-xs">Usually $200 - Free Today Only</div>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" className="bg-white text-accent hover:bg-white/90 font-bold">
              Claim Now
            </Button>
            <button 
              onClick={handleDismiss}
              className="text-white/70 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Sticky Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary to-primary-dark shadow-lg py-2 hidden md:block transform transition-transform duration-500 ease-out">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-white font-bold">🎯 Limited Time: Free Website Audit (Usually $200)</div>
            <div className="text-white/80 text-sm">Only 3 spots left this month</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-white">
              <Phone className="w-4 h-4" />
              <span className="font-medium">(555) 123-4567</span>
            </div>
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-white font-bold">
              Get Free Audit
            </Button>
            <button 
              onClick={handleDismiss}
              className="text-white/70 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};