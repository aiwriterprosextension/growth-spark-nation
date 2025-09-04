import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Complete Digital Marketing", href: "/services/complete-digital-marketing" },
      { name: "Website Optimization", href: "/services/website-optimization" },
      { name: "Social Media Management", href: "/services/social-media-management" },
    ],
    industries: [
      { name: "Restaurant Marketing", href: "/industries/restaurant-marketing" },
      { name: "Law Firm Marketing", href: "/industries/law-firm-marketing" },
      { name: "Contractor Marketing", href: "/industries/contractor-marketing" },
      { name: "Healthcare Marketing", href: "/industries/healthcare-marketing" },
      { name: "Ecommerce Marketing", href: "/industries/ecommerce-marketing" },
      { name: "Real Estate Marketing", href: "/industries/real-estate-marketing" },
      { name: "Financial Services", href: "/industries/financial-services-marketing" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Blog", href: "/blog" },
      { name: "Resources", href: "/resources" },
      { name: "Contact", href: "/contact" },
    ],
  };

  return (
    <footer className="bg-background border-t">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">JL</span>
              </div>
              <div>
                <div className="font-bold text-xl">JLawrence Marketing</div>
                <div className="text-xs text-muted-foreground">Nationwide Digital Marketing</div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contact@jlawrencemarketing.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Serving All 50 States</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-bold mb-4">Industries</h3>
            <ul className="space-y-2">
              {footerLinks.industries.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 pt-8 border-t">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Grow Your Business?</h3>
            <p className="text-muted-foreground mb-6">
              Get your free website audit and digital marketing consultation today.
            </p>
            <Link to="/contact">
              <Button size="lg" className="btn-accent">
                Get Your Free Audit
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">
          <div>© {currentYear} JLawrence Marketing. All rights reserved.</div>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
