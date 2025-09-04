import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ArrowRight } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Success Stories", href: "#testimonials" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">JL</span>
              </div>
              <div>
                <div className="font-bold text-xl text-foreground">JLawrence Marketing</div>
                <div className="text-xs text-muted-foreground">Nationwide Digital Marketing</div>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>
            
            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </div>
              <Button className="btn-accent">
                Free Audit
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="container mx-auto px-6 py-6">
              <div className="flex flex-col gap-6">
                {menuItems.map((item) => (
                  <a 
                    key={item.label}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex flex-col gap-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span>(555) 123-4567</span>
                  </div>
                  <Button className="btn-accent w-full">
                    Get Free Website Audit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      {/* Sticky Mobile CTA */}
      <div className="sticky-cta lg:hidden">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-bold">Limited Time: Free $200 Audit</div>
            <div className="text-xs opacity-90">Usually $200 - Free Today Only</div>
          </div>
          <Button variant="secondary" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </>
  );
};