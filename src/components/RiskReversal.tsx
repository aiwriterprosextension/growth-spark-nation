import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export const RiskReversal = () => {
  return (
    <div className="text-center p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <Shield className="w-8 h-8 text-accent" />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-primary">Zero Risk, Maximum Results</h3>
      <p className="text-lg font-semibold text-accent mb-4">30-Day Money-Back Guarantee - No Questions Asked</p>
      <p className="text-muted-foreground mb-6">
        See measurable results within 30 days or get your money back
      </p>
      <Link to="/contact-us-free-audit">
        <Button size="lg" className="btn-accent">
          Get Your Free Website Audit
          <span className="text-xs ml-2">(Usually $200)</span>
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </Link>
    </div>
  );
};
