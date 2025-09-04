import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, XCircle, CheckCircle, TrendingUp, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { RiskReversal } from "@/components/RiskReversal";
import { TrustBadges } from "@/components/TrustBadges";
import { AuditCTA } from "@/components/AuditCTA";

const RestaurantMarketing = () => {
  const problems = [
    "Low online visibility in local searches",
    "Inconsistent online reviews and ratings",
    "Competition from delivery apps eating into profits",
    "Outdated or mobile-unfriendly website",
    "Ineffective social media presence",
    "No system for customer retention"
  ];

  const solutions = [
    {
      icon: Star,
      title: "Local SEO Domination",
      description: "Get found when hungry customers search for restaurants in your area"
    },
    {
      icon: Users,
      title: "Social Media Growth",
      description: "Build a loyal following and keep tables full with engaging content"
    },
    {
      icon: TrendingUp,
      title: "Online Ordering Optimization",
      description: "Maximize profits with an optimized online ordering system"
    }
  ];

  const caseStudy = {
    name: "Chen's Family Restaurant",
    location: "Seattle, WA",
    results: [
      "180% increase in online orders",
      "250% growth in social media following",
      "40% increase in foot traffic",
      "Ranking #1 for 'best Chinese food Seattle'"
    ]
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Restaurant Marketing 
              <span className="block text-accent">That Actually Works</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Fill your tables and boost online orders with proven restaurant marketing strategies
            </p>
            <TrustBadges />
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link to="/contact-us-free-audit">
                <Button size="lg" className="btn-accent">
                  <div className="text-center">
                    <div className="font-bold">Get Your Free Restaurant Marketing Audit</div>
                    <div className="text-xs opacity-75">(Usually $200)</div>
                  </div>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Common Restaurant Marketing Problems</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-red-600">What's Not Working</h3>
                  <ul className="space-y-4">
                    {problems.map((problem, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                        <span>{problem}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-blue-600">How We Help</h3>
                {solutions.map((solution) => {
                  const Icon = solution.icon;
                  return (
                    <div key={solution.title} className="flex items-start gap-4 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">{solution.title}</h4>
                        <p className="text-muted-foreground">{solution.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Real Restaurant Results</h2>
            <Card>
              <CardContent className="p-8">
                <div className="text-4xl mb-6">🥡</div>
                <h3 className="text-2xl font-bold mb-2">{caseStudy.name}</h3>
                <p className="text-muted-foreground mb-6">{caseStudy.location}</p>
                <div className="grid grid-cols-2 gap-4">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="text-center p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg">
                      <div className="font-bold text-accent">{result}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Risk Reversal */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <RiskReversal />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-6">
          <AuditCTA 
            title="Ready to Fill More Tables?"
            subtitle="Get your free restaurant marketing audit and see how to attract more customers"
            className="text-white"
          />
        </div>
      </section>
    </div>
  );
};

export default RestaurantMarketing;