import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, CheckCircle, Star } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Grow? 
              <span className="block text-accent">Get Your Free Website Audit</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Usually $200 - Free for qualified businesses
            </p>
            <div className="flex items-center justify-center gap-2 text-accent mb-8">
              <Star className="w-5 h-5 fill-current" />
              <span className="font-semibold">Response within 2 hours guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Get Your Free Website Audit</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <Input placeholder="John" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <Input placeholder="Smith" required />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Business Name</label>
                    <Input placeholder="Your Business Name" required />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" placeholder="john@business.com" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <Input type="tel" placeholder="(555) 123-4567" required />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Website URL</label>
                    <Input placeholder="https://yourbusiness.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Industry</label>
                    <select className="w-full px-3 py-2 border border-input rounded-md">
                      <option>Select your industry</option>
                      <option>Restaurant/Food Service</option>
                      <option>Legal Services</option>
                      <option>Construction/Contracting</option>
                      <option>Healthcare</option>
                      <option>E-commerce/Retail</option>
                      <option>Real Estate</option>
                      <option>Financial Services</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">What's your biggest marketing challenge?</label>
                    <Textarea placeholder="Tell us about your current marketing challenges..." rows={4} />
                  </div>
                  
                  <Button className="btn-accent w-full text-lg py-6">
                    Get My Free $200 Audit Now
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to receive marketing communications. 
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Service Promise */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Service Promise</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span>Serving small businesses nationwide</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span>All consultations via secure screen share</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span>Response within 2 hours guaranteed</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span>All time zones covered</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Contact Methods */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Contact Methods</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-accent" />
                      <div>
                        <div className="font-medium">(555) 123-4567</div>
                        <div className="text-sm text-muted-foreground">Mon-Fri 9AM-6PM EST</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-accent" />
                      <div>
                        <div className="font-medium">hello@jlawrencemarketing.com</div>
                        <div className="text-sm text-muted-foreground">24/7 email support</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-accent" />
                      <div>
                        <div className="font-medium">Baltimore, MD (Headquarters)</div>
                        <div className="text-sm text-muted-foreground">Serving all 50 states remotely</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-accent" />
                      <div>
                        <div className="font-medium">Business Hours</div>
                        <div className="text-sm text-muted-foreground">Monday-Friday: 9AM-6PM EST</div>
                        <div className="text-sm text-muted-foreground">Saturday: 10AM-4PM EST</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Consultation Method */}
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">How We Work</h3>
                  <p className="text-muted-foreground mb-4">
                    All consultations are conducted via secure screen share technology. 
                    This allows us to review your website, analytics, and marketing materials 
                    in real-time while maintaining the highest level of professionalism and security.
                  </p>
                  <Button variant="outline" className="w-full">
                    Book Your Free Strategy Session
                  </Button>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">How quickly will I see results?</h3>
                  <p className="text-muted-foreground">
                    Most clients see improvements in website traffic within 30-60 days. We guarantee 
                    measurable results within 30 days or your money back.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Do you work with businesses in my industry?</h3>
                  <p className="text-muted-foreground">
                    We've successfully helped businesses in over 30 industries nationwide, from restaurants 
                    to law firms to contractors. Our strategies adapt to your specific industry needs.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">What makes you different from other agencies?</h3>
                  <p className="text-muted-foreground">
                    We focus exclusively on small businesses, offer month-to-month contracts, provide 
                    a 30-day money-back guarantee, and deliver enterprise-level strategies at small business prices.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">How does remote service work?</h3>
                  <p className="text-muted-foreground">
                    All consultations are conducted via secure screen share. We can access your website, 
                    review analytics, and implement strategies just as effectively as if we were in the same room.
                  </p>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;