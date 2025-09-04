import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Download, Settings, Calculator, CheckSquare, FileText, ArrowRight, Zap, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const tools = [
  {
    icon: Zap,
    title: "Website Speed Tester",
    description: "Check your website's loading speed and get recommendations for improvement",
    type: "Interactive Tool",
    cta: "Test Your Site"
  },
  {
    icon: TrendingUp,
    title: "SEO Keyword Finder",
    description: "Discover the keywords your competitors are ranking for in your area",
    type: "Interactive Tool", 
    cta: "Find Keywords"
  },
  {
    icon: Calculator,
    title: "Marketing ROI Calculator",
    description: "Calculate the potential return on your digital marketing investment",
    type: "Interactive Tool",
    cta: "Calculate ROI"
  }
];

const downloads = [
  {
    icon: CheckSquare,
    title: "Small Business SEO Checklist",
    description: "47-point checklist to audit and optimize your website for search engines",
    format: "PDF Guide",
    pages: "12 pages",
    gated: true
  },
  {
    icon: FileText,
    title: "Social Media Content Calendar Template",
    description: "Pre-planned content calendar with 30 days of post ideas for any business",
    format: "Excel Spreadsheet",
    pages: "3 sheets",
    gated: true
  },
  {
    icon: Download,
    title: "Website Audit Template",
    description: "Professional website audit template used by marketing agencies",
    format: "PDF Template",
    pages: "8 pages",
    gated: true
  },
  {
    icon: TrendingUp,
    title: "Local SEO Optimization Guide",
    description: "Step-by-step guide to dominate local search results in your area",
    format: "PDF Guide",
    pages: "24 pages", 
    gated: true
  },
  {
    icon: FileText,
    title: "Email Marketing Templates",
    description: "5 proven email templates that convert prospects into customers",
    format: "Word Doc",
    pages: "10 pages",
    gated: true
  },
  {
    icon: Calculator,
    title: "Marketing Budget Planner",
    description: "Allocate your marketing budget across channels for maximum ROI",
    format: "Excel Spreadsheet",
    pages: "2 sheets",
    gated: true
  }
];

const Resources = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Free Marketing Resources 
              <span className="block text-accent">for Small Businesses Nationwide</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Tools, templates, and guides to help you grow your business online
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold mb-2">Free Tools</h3>
                <p className="text-sm text-muted-foreground">Interactive calculators and analyzers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold mb-2">Templates</h3>
                <p className="text-sm text-muted-foreground">Ready-to-use marketing materials</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold mb-2">Guides</h3>
                <p className="text-sm text-muted-foreground">Step-by-step strategy blueprints</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Tools Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Free Marketing Tools</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get instant insights about your website and marketing performance
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Card key={tool.title} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{tool.title}</h3>
                    <p className="text-muted-foreground mb-6">{tool.description}</p>
                    <div className="space-y-4">
                      <Input placeholder="Enter your website URL" />
                      <Button className="btn-accent w-full">
                        {tool.cta}
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-3">{tool.type}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Free Marketing Guides & Templates</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional resources used by successful businesses nationwide
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {downloads.map((download) => {
              const Icon = download.icon;
              return (
                <Card key={download.title} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold mb-2 line-clamp-2">{download.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <span>{download.format}</span>
                          <span>•</span>
                          <span>{download.pages}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 line-clamp-3">{download.description}</p>
                    
                    {download.gated ? (
                      <div className="space-y-3">
                        <Input placeholder="Your email address" type="email" />
                        <Button className="btn-accent w-full">
                          <Download className="w-4 h-4 mr-2" />
                          Download Free
                        </Button>
                        <p className="text-xs text-muted-foreground text-center">
                          No spam. Unsubscribe anytime.
                        </p>
                      </div>
                    ) : (
                      <Button variant="outline" className="w-full">
                        <Download className="w-4 h-4 mr-2" />
                        Download Now
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why These Resources */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Why We Share These for Free</h2>
              <p className="text-xl text-muted-foreground">
                Because we believe every small business deserves access to professional marketing resources
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Our Philosophy</h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    These are the same tools and templates we use with our paying clients. 
                    We believe in transparency and want to help you succeed, whether you work with us or not.
                  </p>
                  <p className="text-muted-foreground">
                    Small businesses are the backbone of America, and they deserve access to the same 
                    quality marketing resources that big corporations use.
                  </p>
                  <p className="text-muted-foreground">
                    If these free resources help your business grow, that's a win for us. 
                    If you need more comprehensive help, we're here for that too.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl">
                <h4 className="text-xl font-bold mb-4">What Makes These Different?</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckSquare className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Actually Used by Agencies</div>
                      <div className="text-sm text-muted-foreground">Not generic templates - real tools</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckSquare className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Tested on 500+ Businesses</div>
                      <div className="text-sm text-muted-foreground">Proven to work nationwide</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckSquare className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Updated Regularly</div>
                      <div className="text-sm text-muted-foreground">Reflects current best practices</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckSquare className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">No Strings Attached</div>
                      <div className="text-sm text-muted-foreground">Truly free, no hidden costs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Want Us to Implement These for You?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Resources are great, but implementation is everything. Let us handle your marketing while you focus on running your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-us-free-audit">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Get Your Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/small-business-marketing-case-studies">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                See Our Results
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;