import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Search, MapPin, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    client: "Chen's Family Restaurant",
    location: "Seattle, WA",
    industry: "Restaurant",
    challenge: "Low online visibility and declining foot traffic due to increased competition from delivery apps and chain restaurants.",
    solution: "Implemented local SEO optimization, created engaging social media presence, and launched targeted Google Ads for delivery keywords.",
    results: [
      "180% increase in online orders",
      "250% growth in social media following", 
      "40% increase in foot traffic",
      "Ranking #1 for 'best Chinese food Seattle'"
    ],
    testimonial: "JLawrence Marketing completely transformed our online presence. We went from struggling to compete with delivery apps to becoming the go-to Chinese restaurant in our area.",
    timeframe: "4 months",
    image: "🥡"
  },
  {
    client: "Rodriguez Plumbing",
    location: "Miami, FL", 
    industry: "Contractor",
    challenge: "Inconsistent lead generation and difficulty competing against larger plumbing companies with bigger marketing budgets.",
    solution: "Rebuilt website for mobile optimization, implemented comprehensive local SEO strategy, and created educational content marketing.",
    results: [
      "300% increase in service calls",
      "60% reduction in cost per lead",
      "Ranking in top 3 for 15 local keywords",
      "50+ verified Google reviews"
    ],
    testimonial: "Our phone hasn't stopped ringing since they optimized our website. We're booked weeks in advance now and had to hire two additional plumbers.",
    timeframe: "6 months",
    image: "🔧"
  },
  {
    client: "Walsh Legal Services",
    location: "Denver, CO",
    industry: "Law Firm",
    challenge: "Generating quality leads for personal injury cases in a highly competitive legal market with established competitors.",
    solution: "Developed content marketing strategy around common legal questions, optimized for 'near me' searches, and implemented conversion tracking.",
    results: [
      "Achieved #1 Google ranking for main keywords",
      "400% increase in consultation requests", 
      "85% increase in case conversion rate",
      "Featured snippets for 12 legal terms"
    ],
    testimonial: "The SEO results speak for themselves. We're now ranking #1 for our main keywords and getting quality leads every day that convert into real cases.",
    timeframe: "8 months",
    image: "⚖️"
  },
  {
    client: "Sunrise Healthcare Clinic",
    location: "Phoenix, AZ",
    industry: "Healthcare", 
    challenge: "Patients couldn't find them online and were choosing larger medical facilities due to poor digital presence.",
    solution: "HIPAA-compliant website redesign, local healthcare SEO, patient review management, and medical content creation.",
    results: [
      "220% increase in new patient appointments",
      "Improved Google rating from 3.2 to 4.8 stars",
      "75% increase in online appointment bookings",
      "Top 3 ranking for 'urgent care Phoenix'"
    ],
    testimonial: "Patient flow has dramatically improved since our website renovation. We're seeing more patients than ever and they're finding us through Google instead of referrals.",
    timeframe: "5 months",
    image: "🏥"
  },
  {
    client: "Mountain View Auto Repair",
    location: "Bozeman, MT",
    industry: "Automotive",
    challenge: "Seasonal business fluctuations and difficulty attracting customers during slower winter months.",
    solution: "Year-round content strategy, seasonal service promotions, Google My Business optimization, and customer retention campaigns.",
    results: [
      "45% increase in winter season revenue",
      "150% growth in repeat customers",
      "90% increase in online reviews",
      "#1 for 'auto repair Bozeman MT'"
    ],
    testimonial: "They helped us turn our seasonal slow periods into our busiest months. Our winter revenue has never been higher.",
    timeframe: "12 months",
    image: "🚗"
  },
  {
    client: "Coastal Realty Group",
    location: "Wilmington, NC",
    industry: "Real Estate",
    challenge: "Competing against larger real estate firms and national chains for luxury home listings and buyers.",
    solution: "Luxury property showcase website, targeted social media advertising, virtual tour integration, and market report content.",
    results: [
      "65% increase in luxury listings",
      "300% more qualified buyer inquiries",
      "200% growth in social media engagement",
      "Featured in top 3 'Wilmington realtors' searches"
    ],
    testimonial: "Our luxury property business has exploded since working with JLawrence Marketing. We're now competing successfully against the big national firms.",
    timeframe: "7 months",
    image: "🏠"
  }
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Real Results for 
              <span className="block text-accent">Real Businesses</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Success stories from coast to coast - see how our remote digital marketing solutions drive measurable growth
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span>Average 150% Growth</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-accent" />
                <span>500+ Businesses Served</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>All 50 States</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={study.client} className="max-w-6xl mx-auto overflow-hidden">
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    
                    {/* Content */}
                    <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="text-4xl">{study.image}</div>
                        <div>
                          <h3 className="text-2xl font-bold">{study.client}</h3>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <span>{study.location}</span>
                            <Badge variant="secondary">{study.industry}</Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-lg mb-2 text-red-600">Challenge</h4>
                          <p className="text-muted-foreground">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-lg mb-2 text-blue-600">Solution</h4>
                          <p className="text-muted-foreground">{study.solution}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-lg mb-2 text-green-600">Results</h4>
                          <ul className="space-y-2">
                            {study.results.map((result, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <TrendingUp className="w-4 h-4 text-accent" />
                                <span className="font-medium">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-4 rounded-lg">
                          <div className="flex items-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                            ))}
                          </div>
                          <p className="italic text-muted-foreground">"{study.testimonial}"</p>
                        </div>
                        
                        <div className="text-sm text-muted-foreground">
                          <strong>Timeline:</strong> {study.timeframe}
                        </div>
                      </div>
                    </div>
                    
                    {/* Visual/Stats */}
                    <div className={`bg-gradient-to-br from-primary/10 to-accent/10 p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className="text-center">
                        <div className="text-6xl mb-6">{study.image}</div>
                        <h4 className="text-xl font-bold mb-6">{study.industry} Success Story</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {study.results.slice(0, 4).map((result, i) => (
                            <div key={i} className="text-center">
                              <div className="text-2xl font-bold text-accent mb-1">
                                {result.match(/\d+/)?.[0] || '✓'}
                                {result.includes('%') ? '%' : ''}
                                {result.includes('x') ? 'x' : ''}
                                {result.includes('#1') ? '#1' : ''}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {result.replace(/^\d+[%x]?\s*/, '').replace(/^#1\s*/, '')}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Diversity */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Coast to Coast Success</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From Seattle to Miami, our remote marketing strategies deliver results across all industries and locations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-4">🗺️</div>
              <h3 className="text-xl font-bold mb-2">All 50 States</h3>
              <p className="text-muted-foreground">Remote service means no geographic limitations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold mb-2">30+ Industries</h3>
              <p className="text-muted-foreground">From restaurants to real estate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-2">500+ Businesses</h3>
              <p className="text-muted-foreground">Proven track record of growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Similar Results?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of successful businesses nationwide. Get your free audit and see how we can help you grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-us-free-audit">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Get Your Free Audit
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

export default CaseStudies;