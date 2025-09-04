import { Button } from "@/components/ui/button";
import { Search, Users, Zap, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Website Optimization & SEO",
    price: "$297",
    period: "/month",
    description: "Complete technical SEO audit and optimization to get your website ranking on Google's first page.",
    features: [
      "Technical SEO Audit & Fixes",
      "Keyword Research & Optimization", 
      "Local SEO Setup",
      "Google Business Profile Optimization",
      "Monthly Performance Reports",
      "Core Web Vitals Optimization"
    ],
    popular: false
  },
  {
    icon: Users,
    title: "Social Media Management",
    price: "$197",
    period: "/month", 
    description: "Automated social media posting and engagement across all major platforms to build your brand.",
    features: [
      "Content Creation & Posting",
      "Community Management",
      "Hashtag Strategy",
      "Engagement Analytics",
      "Brand Voice Development",
      "Cross-Platform Scheduling"
    ],
    popular: false
  },
  {
    icon: Zap,
    title: "Complete Digital Marketing",
    price: "$497",
    period: "/month",
    description: "Full-service digital marketing package combining SEO, social media, and content marketing.",
    features: [
      "Everything in SEO Package",
      "Everything in Social Media Package", 
      "Content Marketing Strategy",
      "Email Marketing Campaigns",
      "Conversion Rate Optimization",
      "Monthly Strategy Calls",
      "Priority Support"
    ],
    popular: true
  }
];

export const Services = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Services That Drive Real Results
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
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
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
      </div>
    </section>
  );
};