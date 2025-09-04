import { Star, Quote, TrendingUp, Users, MapPin } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    business: "Chen's Family Restaurant", 
    location: "Seattle, WA",
    rating: 5,
    text: "JLawrence Marketing increased our online orders by 180% in just 4 months. The remote consultation process was seamless and professional.",
    result: "180% increase in online orders"
  },
  {
    name: "Mike Rodriguez",
    business: "Rodriguez Plumbing",
    location: "Miami, FL", 
    rating: 5,
    text: "Finally found a marketing agency that understands small businesses. Our phone hasn't stopped ringing since they optimized our website!",
    result: "300% more service calls"
  },
  {
    name: "Jennifer Walsh",
    business: "Walsh Legal Services",
    location: "Denver, CO",
    rating: 5,
    text: "The SEO results speak for themselves. We're now ranking #1 for our main keywords and getting quality leads every day.",
    result: "#1 Google ranking achieved"
  }
];

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "businesses served",
    sublabel: "Nationwide"
  },
  {
    icon: TrendingUp,
    value: "150%",
    label: "average traffic increase",
    sublabel: "Within 6 months"
  },
  {
    icon: Star,
    value: "30+",
    label: "industries helped",
    sublabel: "From restaurants to law firms"
  },
  {
    icon: MapPin,
    value: "All 50",
    label: "States Served",
    sublabel: "Remote nationwide service"
  }
];

export const SocialProof = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-6">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.label}
                className="text-center group scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="font-semibold text-foreground">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
              </div>
            );
          })}
        </div>
        
        {/* Testimonials Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by Small Businesses 
            <span className="block text-accent">Nationwide</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real businesses nationwide. See how our remote digital marketing solutions drive growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="testimonial-card fade-in"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.business}</div>
                  <div className="text-xs text-accent flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {testimonial.location}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              
              <div className="relative mb-4">
                <Quote className="w-6 h-6 text-accent/30 absolute -top-2 -left-1" />
                <p className="text-muted-foreground italic pl-4">
                  "{testimonial.text}"
                </p>
              </div>
              
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 text-center">
                <div className="font-bold text-accent">{testimonial.result}</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Guarantee */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
          <h3 className="text-2xl font-bold mb-4 text-primary">30-Day Money-Back Guarantee</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're so confident in our results that if you don't see measurable improvement in your online presence within 30 days, we'll refund every penny. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
};