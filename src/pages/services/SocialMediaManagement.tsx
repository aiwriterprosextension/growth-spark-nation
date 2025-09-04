import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Users, Calendar, BarChart, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import { RiskReversal } from "@/components/RiskReversal";
import { TrustBadges } from "@/components/TrustBadges";
import { AuditCTA } from "@/components/AuditCTA";

const SocialMediaManagement = () => {
  const features = [
    "Daily posting across 3 platforms",
    "Custom graphics and content creation",
    "Community engagement and responses",
    "Monthly content calendar",
    "Performance analytics",
    "Brand voice development"
  ];

  const benefits = [
    {
      icon: Users,
      title: "Build Your Community",
      description: "Engage with your audience consistently and authentically"
    },
    {
      icon: Calendar,
      title: "Save Time",
      description: "We handle all posting while you focus on your business"
    },
    {
      icon: BarChart,
      title: "Track Performance",
      description: "Get detailed analytics and engagement metrics"
    },
    {
      icon: Palette,
      title: "Professional Content",
      description: "Custom graphics and engaging posts that reflect your brand"
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
              Stay Top-of-Mind with 
              <span className="block text-accent">Consistent Social Media</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Automated posting that keeps your audience engaged
            </p>
            <div className="bg-gradient-to-r from-accent/20 to-accent/10 rounded-lg p-6 mb-8">
              <div className="text-3xl font-bold text-accent mb-2">$197/month</div>
              <div className="text-muted-foreground">Complete social media management</div>
            </div>
            <TrustBadges />
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link to="/contact-us-free-audit">
                <Button size="lg" className="btn-accent">
                  <div className="text-center">
                    <div className="font-bold">Get Your Free Audit</div>
                    <div className="text-xs opacity-75">(Usually $200)</div>
                  </div>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/small-business-marketing-case-studies">
                <Button size="lg" variant="outline">
                  View Case Studies
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
                  <h3 className="text-2xl font-bold mb-6">Complete Social Media Package</h3>
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

      {/* Risk Reversal */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <RiskReversal />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-6">
          <AuditCTA 
            title="Ready to Build a Strong Social Media Presence?"
            subtitle="Get your free social media audit and see how to engage your audience effectively"
            className="text-white"
          />
        </div>
      </section>
    </div>
  );
};

export default SocialMediaManagement;