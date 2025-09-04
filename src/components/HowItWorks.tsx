import { Search, Cog, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Analyze Your Online Presence",
    description: "We conduct a comprehensive remote audit of your website, SEO, and social media via secure screen share consultation.",
    detail: "Complete technical analysis of your current digital footprint"
  },
  {
    icon: Cog,
    title: "Create Custom Solutions", 
    description: "Our team implements automated systems and optimizations tailored to your business needs and industry.",
    detail: "Automated implementation while you focus on your business"
  },
  {
    icon: TrendingUp,
    title: "You Get More Customers",
    description: "Watch your online visibility, traffic, and leads increase with our proven, measurable strategies.",
    detail: "Average 150% traffic increase within 6 months"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How We Transform Your Business 
            <span className="block text-accent">In 3 Simple Steps</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven process has helped over 500 small businesses nationwide achieve sustainable growth through digital marketing automation.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.title}
                  className="text-center group slide-up"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  {/* Step Number */}
                  <div className="relative mb-8">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm shadow-lg">
                      {index + 1}
                    </div>
                    
                    {/* Connection Line */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent transform translate-x-6"></div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    {step.description}
                  </p>
                  <p className="text-sm font-medium text-accent">
                    {step.detail}
                  </p>
                </div>
              );
            })}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16 p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-primary/10">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Join hundreds of businesses that have transformed their online presence with our proven system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-accent">
                Start Your Free Audit Today
              </button>
              <button className="btn-outline">
                Schedule Strategy Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};