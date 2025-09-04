import { useState, useEffect } from "react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "/" },
    { 
      label: "Services", 
      href: "/services",
      submenu: [
        { label: "Complete Digital Marketing", href: "/services/complete-digital-marketing" },
        { label: "Website Optimization", href: "/services/website-optimization" },
        { label: "Social Media Management", href: "/services/social-media-management" },
      ]
    },
    {
      label: "Industries",
      href: "/industries",
      submenu: [
        { label: "Law Firm Marketing", href: "/industries/law-firm-marketing" },
        { label: "Healthcare Marketing", href: "/industries/healthcare-marketing" },
        { label: "Real Estate Marketing", href: "/industries/real-estate-marketing" },
        { label: "Restaurant Marketing", href: "/industries/restaurant-marketing" },
        { label: "Contractor Marketing", href: "/industries/contractor-marketing" },
        { label: "E-commerce Marketing", href: "/industries/ecommerce-marketing" },
        { label: "Financial Services Marketing", href: "/industries/financial-services-marketing" },
      ]
    },
    { label: "Resources", href: "/resources" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
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
                <div key={item.label} className="relative group">
                  <Link 
                    to={item.href}
                    className={`text-foreground hover:text-primary transition-colors font-medium ${
                      location.pathname === item.href ? 'text-primary' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <div className="absolute left-0 top-full mt-2 w-64 bg-background shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            className={`block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground ${
                              location.pathname === subItem.href ? 'bg-accent/50' : ''
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
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
                  <div key={item.label}>
                    <Link 
                      to={item.href}
                      className={`text-foreground hover:text-primary transition-colors font-medium ${
                        location.pathname === item.href ? 'text-primary' : ''
                      }`}
                      onClick={() => !item.submenu && setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 mt-2 flex flex-col gap-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            className={`text-sm text-foreground hover:text-primary transition-colors ${
                              location.pathname === subItem.href ? 'text-primary' : ''
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
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