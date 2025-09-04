import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SocialMediaManagement = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Stay Top-of-Mind with 
            <span className="block text-accent">Consistent Social Media</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Automated posting that keeps your audience engaged
          </p>
          <div className="bg-gradient-to-r from-accent/20 to-accent/10 rounded-lg p-6 mb-8">
            <div className="text-3xl font-bold text-accent mb-2">$197/month</div>
            <div className="text-muted-foreground">Complete social media management</div>
          </div>
          <Link to="/contact-us-free-audit">
            <Button size="lg" className="btn-accent">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaManagement;