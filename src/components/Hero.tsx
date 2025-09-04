import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{backgroundImage: `url(${heroBg})`}}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/80"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2 mb-8 fade-in">
          <Users className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-white">Join 500+ Small Businesses Growing with JLawrence Marketing</span>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 slide-up text-white">
          We Find Small Businesses With 
          <span className="block text-accent">Broken Websites</span>
          & Fix Them While You Sleep
        </h1>
        
        {/* Subheading */}
        <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8 slide-up" style={{animationDelay: '0.2s'}}>
          Automated SEO, social media, and website management that drives real results 
          for businesses nationwide. No long-term contracts, just measurable growth.
        </p>
        
        {/* Value Props */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 slide-up" style={{animationDelay: '0.4s'}}>
          <div className="flex items-center gap-2 text-white/80">
            <CheckCircle className="w-5 h-5 text-accent" />
            <span className="font-medium">30-Day Money-Back Guarantee</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <CheckCircle className="w-5 h-5 text-accent" />
            <span className="font-medium">Average 150% Traffic Increase</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <CheckCircle className="w-5 h-5 text-accent" />
            <span className="font-medium">Remote Nationwide Service</span>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 scale-in" style={{animationDelay: '0.6s'}}>
          <Button className="btn-accent group px-8 py-4 text-lg">
            <div className="text-center">
              <div className="font-bold">Get Your Free Website Audit</div>
              <div className="text-xs opacity-75">(Usually $200)</div>
            </div>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" className="btn-outline px-8 py-4 text-lg">
            See Our Case Studies
          </Button>
        </div>
        
        {/* Social Proof */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-white/70 fade-in" style={{animationDelay: '0.8s'}}>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm font-medium">4.9/5 Client Rating</span>
          </div>
          <div className="text-sm font-medium">
            From Baltimore to Denver to Miami
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};