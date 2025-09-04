import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface AuditCTAProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export const AuditCTA = ({ 
  title = "Ready to Stop Losing Customers to Competitors?",
  subtitle = "Get your free website audit and see exactly how to outrank your competition",
  className = ""
}: AuditCTAProps) => {
  return (
    <div className={`text-center ${className}`}>
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
        <p className="text-muted-foreground mb-6">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact-us-free-audit">
            <Button size="lg" className="btn-accent">
              <div className="text-center">
                <div className="font-bold">Get Your Free Website Audit</div>
                <div className="text-xs opacity-75">(Usually $200)</div>
              </div>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link to="/small-business-marketing-case-studies">
            <Button size="lg" variant="outline" className="btn-outline">
              See Our Case Studies
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
