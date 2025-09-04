import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MapPin, Users, Award, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { TrustBadges } from "@/components/TrustBadges";
import { AuditCTA } from "@/components/AuditCTA";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm J Lawrence - 
              <span className="block text-accent">Your Digital Marketing Partner</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Making professional digital marketing accessible to every small business nationwide
            </p>
            <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-8 flex items-center justify-center text-white text-4xl font-bold">
              JL
            </div>
            <TrustBadges />
          </div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">My Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  I started JLawrence Marketing with a simple belief: every small business deserves 
                  access to professional digital marketing, regardless of their location or budget.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  After seeing countless small businesses struggle with ineffective websites and 
                  non-existent online presence, I developed a systematic approach to deliver 
                  enterprise-level marketing strategies at small business prices.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Professional background in digital marketing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Commitment to small business success</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Results-driven approach with guarantees</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Started in Baltimore, now serving nationwide</h4>
                      <p className="text-sm text-muted-foreground">Local expertise, national reach</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Users className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Remote expertise, local results</h4>
                      <p className="text-sm text-muted-foreground">Professional service via secure consultations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">No long-term contracts required</h4>
                      <p className="text-sm text-muted-foreground">Month-to-month flexibility</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Award className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Results guaranteed or money back</h4>
                      <p className="text-sm text-muted-foreground">30-day money-back guarantee</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do for small businesses nationwide
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Accessibility</h3>
              <p className="text-muted-foreground">
                Professional marketing should be available to every business, regardless of size or location.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Results</h3>
              <p className="text-muted-foreground">
                We measure success by your growth, not our profits. Results are guaranteed.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Nationwide Service</h3>
              <p className="text-muted-foreground">
                Remote expertise means we can help businesses coast to coast with the same quality service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business grow with proven digital marketing strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-us-free-audit">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Get Your Free Audit
              </Button>
            </Link>
            <Link to="/small-business-marketing-case-studies">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Our Results
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;