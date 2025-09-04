import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HealthcareMarketing = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Healthcare Marketing 
            <span className="block text-accent">That Actually Works</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Attract more patients with HIPAA-compliant marketing strategies
          </p>
          <Link to="/contact-us-free-audit">
            <Button size="lg" className="btn-accent">
              Get Your Free Healthcare Marketing Audit
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HealthcareMarketing;