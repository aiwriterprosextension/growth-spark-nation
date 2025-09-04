import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { SocialProof } from "@/components/SocialProof";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Show sticky CTA after 3 seconds
    const timer = setTimeout(() => {
      const stickyCta = document.querySelector('.sticky-cta');
      if (stickyCta) {
        stickyCta.classList.add('show');
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <div id="services">
          <Services />
        </div>
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <div id="testimonials">
          <SocialProof />
        </div>
      </main>
    </div>
  );
};

export default Index;