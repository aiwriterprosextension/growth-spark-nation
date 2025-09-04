import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, TrendingUp, Clock, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { RiskReversal } from "@/components/RiskReversal";
import { TrustBadges } from "@/components/TrustBadges";
import { AuditCTA } from "@/components/AuditCTA";

const WebsiteOptimization = () => {
  const features = [
    "Monthly website maintenance & security updates",
    "Technical SEO optimization",
    "2 SEO-optimized blog posts monthly", 
    "Local search optimization",
    "Monthly performance reports",
    "Email support"
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Visibility",
      description: "Get found by customers searching for your services"
    },
    {
      icon: Clock,
      title: "Time Savings",
      description: "We handle all technical aspects while you focus on your business"
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description: "Keep your website secure and running smoothly"
    },
    {
      icon: Zap,
      title: "Fast Results",
      description: "Typically see 40-60% traffic increase within 90 days"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get Found by Customers 
              <span className="block text-accent">Searching for Your Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Fast, mobile-friendly websites that rank on Google
            </p>
            <div className="bg-gradient-to-r from-accent/20 to-accent/10 rounded-lg p-6 mb-8">
              <div className="text-3xl font-bold text-accent mb-2">$297/month</div>
              <div className="text-muted-foreground">Complete website optimization & SEO</div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-us-free-audit">
                <Button size="lg" className="btn-accent">
                  Get Your Free Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/small-business-marketing-case-studies">
                <Button size="lg" variant="outline">
                  View Results
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">What's Included</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Complete SEO Package</h3>
                  <ul className="space-y-4">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <div className="space-y-6">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={benefit.title} className="flex items-start gap-4 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">{benefit.title}</h4>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Promise */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Results Promise</h2>
            <div className="bg-gradient-to-r from-accent/10 to-accent/20 border border-accent/20 rounded-2xl p-8 mb-8">
              <div className="text-2xl font-bold text-accent mb-4">
                Typically see 40-60% traffic increase within 90 days
              </div>
              <p className="text-muted-foreground mb-6">
                Our proven SEO strategies help businesses get found by customers actively searching for their services.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">90%</div>
                  <div className="text-sm text-muted-foreground">of customers use search engines</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">75%</div>
                  <div className="text-sm text-muted-foreground">never scroll past first page</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3x</div>
                  <div className="text-sm text-muted-foreground">more leads than social media</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">30-Day Money-Back Guarantee</h3>
              <p className="text-muted-foreground">
                If you don't see measurable improvements in your website traffic and search rankings within 30 days, we'll refund every penny. No questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">How We Optimize Your Website</h2>
            
            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Complete Website Audit</h3>
                  <p className="text-muted-foreground">
                    We analyze your current website performance, identify technical issues, and research your competition to create a custom optimization strategy.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Technical Optimization</h3>
                  <p className="text-muted-foreground">
                    We fix speed issues, improve mobile responsiveness, optimize for search engines, and ensure your site is secure and up-to-date.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Content & SEO Strategy</h3>
                  <p className="text-muted-foreground">
                    We create SEO-optimized content, target the right keywords for your business, and implement local SEO strategies to dominate your market.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Ongoing Monitoring & Optimization</h3>
                  <p className="text-muted-foreground">
                    We continuously monitor your rankings, traffic, and performance, making adjustments to ensure consistent growth and improved results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Found Online?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Stop losing customers to competitors. Get your website optimized and start ranking on Google's first page.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-us-free-audit">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Get Your Free Website Audit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/about-jlawrence-marketing">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn About Our Process
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteOptimization;