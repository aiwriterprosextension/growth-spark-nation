import { Button } from "@/components/ui/button";
import { Search, Users, Zap, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Website Optimization & SEO",
    price: "$297",
    period: "/month",
    description: "Fast, mobile-friendly websites that rank on Google",
    subtitle: "Get Found by Customers Searching for Your Services",
    features: [
      "Monthly website maintenance & security updates",
      "Technical SEO optimization",
      "2 SEO-optimized blog posts monthly",
      "Local search optimization",
      "Monthly performance reports",
      "Email support"
    ],
    promise: "Typically see 40-60% traffic increase within 90 days",
    popular: false
  },
  {
    icon: Users,
    title: "Social Media Management",
    price: "$197",
    period: "/month", 
    description: "Automated posting that keeps your audience engaged",
    subtitle: "Stay Top-of-Mind with Consistent Social Media",
    features: [
      "Daily posting across 3 platforms",
      "Custom graphics and content creation",
      "Community engagement and responses",
      "Monthly content calendar",
      "Performance analytics",
      "Brand voice development"
    ],
    promise: "Build an engaged community that converts to customers",
    popular: false
  },
  {
    icon: Zap,
    title: "Complete Digital Marketing",
    price: "$497",
    period: "/month",
    description: "SEO-optimized content that drives traffic and leads",
    subtitle: "Dominate Your Market with Full-Service Marketing",
    features: [
      "Everything in other packages",
      "4 blog posts monthly",
      "Advanced SEO and keyword tracking",
      "Social media advertising management",
      "Email marketing campaigns",
      "Monthly strategy calls",
      "Priority support"
    ],
    promise: "Complete online dominance - outrank and outperform competitors",
    popular: true
  }
];

export const Services = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Complete Digital Marketing Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect package for your business growth. All services include our 30-day money-back guarantee.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.title}
                className={`service-card relative ${service.popular ? 'ring-2 ring-accent shadow-glow' : ''}`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-primary">{service.price}</span>
                      <span className="text-muted-foreground">{service.period}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 mb-6">
                  <p className="text-sm font-medium text-accent">{service.promise}</p>
                </div>
                
                <Button 
                  className={service.popular ? "btn-accent w-full" : "btn-primary w-full"}
                >
                  Get Started Today
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom solution? We serve businesses nationwide via secure remote consultation.
          </p>
          <Button variant="outline" className="btn-outline">
            Schedule Free Consultation
          </Button>
        </div>
        
        {/* Risk Reversal Section */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
          <h3 className="text-2xl font-bold mb-4 text-primary">Zero Risk, Maximum Results</h3>
          <p className="text-lg font-semibold text-accent mb-2">30-Day Money-Back Guarantee - No Questions Asked</p>
          <p className="text-muted-foreground">
            See measurable results within 30 days or get your money back
          </p>
        </div>
      </div>
    </section>
  );
};