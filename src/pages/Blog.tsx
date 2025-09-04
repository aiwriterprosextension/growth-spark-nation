import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, TrendingUp, Search, Users } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "Why Your Website Isn't Ranking (And What to Do About It)",
    excerpt: "Discover the top 7 reasons small business websites fail to rank on Google and get actionable steps to fix them today.",
    category: "SEO",
    readTime: "8 min read",
    date: "March 15, 2024",
    author: "J Lawrence",
    featured: true,
    tags: ["SEO", "Website Optimization", "Google Rankings"]
  },
  {
    title: "Top 5 Mistakes Small Businesses Make on Social Media Nationwide",
    excerpt: "Learn the most common social media mistakes that kill engagement and how to avoid them for better results.",
    category: "Social Media",
    readTime: "6 min read", 
    date: "March 12, 2024",
    author: "J Lawrence",
    featured: false,
    tags: ["Social Media", "Marketing", "Engagement"]
  },
  {
    title: "SEO vs. Paid Ads: Which Is Better for Small Businesses?",
    excerpt: "A comprehensive comparison of SEO and paid advertising to help you choose the right strategy for your budget and goals.",
    category: "Strategy",
    readTime: "10 min read",
    date: "March 10, 2024", 
    author: "J Lawrence",
    featured: true,
    tags: ["SEO", "Paid Ads", "Strategy", "ROI"]
  },
  {
    title: "How to Choose a Remote Digital Marketing Agency for Your Industry",
    excerpt: "Essential questions to ask and red flags to avoid when selecting a digital marketing partner for your business.",
    category: "Agency Selection",
    readTime: "7 min read",
    date: "March 8, 2024",
    author: "J Lawrence", 
    featured: false,
    tags: ["Agency", "Remote Work", "Business Growth"]
  },
  {
    title: "Case Study: How We Helped a Restaurant Increase Traffic by 150% (Remotely)",
    excerpt: "Detailed breakdown of the exact strategies we used to transform a struggling restaurant's online presence.",
    category: "Case Study",
    readTime: "12 min read",
    date: "March 5, 2024",
    author: "J Lawrence",
    featured: true,
    tags: ["Case Study", "Restaurant Marketing", "Results"]
  },
  {
    title: "Digital Marketing ROI Calculator: See What You Could Be Earning",
    excerpt: "Free calculator and methodology to determine the potential return on investment for your digital marketing efforts.",
    category: "Tools",
    readTime: "5 min read", 
    date: "March 3, 2024",
    author: "J Lawrence",
    featured: false,
    tags: ["ROI", "Calculator", "Business Planning"]
  },
  {
    title: "Local SEO for Multi-Location Businesses: A Complete Guide",
    excerpt: "Master local SEO strategies for businesses with multiple locations across different states.",
    category: "SEO",
    readTime: "15 min read",
    date: "March 1, 2024",
    author: "J Lawrence",
    featured: false,
    tags: ["Local SEO", "Multi-Location", "Google My Business"]
  },
  {
    title: "The Psychology of High-Converting Landing Pages",
    excerpt: "Understanding what makes visitors take action and how to apply these principles to your website.",
    category: "Conversion",
    readTime: "9 min read",
    date: "February 28, 2024", 
    author: "J Lawrence",
    featured: false,
    tags: ["Conversion", "Psychology", "Landing Pages"]
  }
];

const categories = ["All", "SEO", "Social Media", "Strategy", "Case Study", "Tools", "Conversion"];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Small Business Marketing
              <span className="block text-accent">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Actionable marketing strategies, case studies, and insights to help your business grow nationwide
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span>Weekly Updates</span>
              </div>
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-accent" />
                <span>SEO Tips</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-accent" />
                <span>Real Case Studies</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={category === "All" ? "btn-accent" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Articles</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {blogPosts.filter(post => post.featured).slice(0, 2).map((post, index) => (
              <Card key={post.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-4xl">📈</div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-3xl">
                    {post.category === 'SEO' ? '🔍' : 
                     post.category === 'Social Media' ? '📱' :
                     post.category === 'Strategy' ? '🎯' :
                     post.category === 'Case Study' ? '📊' :
                     post.category === 'Tools' ? '🛠️' : '💡'}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      {post.date}
                    </div>
                    <Button variant="outline" size="sm">
                      Read
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get weekly marketing tips, case studies, and strategies delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg text-gray-900 flex-1"
            />
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Subscribe
            </Button>
          </div>
          <p className="text-sm mt-4 opacity-80">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Implement These Strategies?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Reading is great, but results come from implementation. Let us handle your marketing while you focus on your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-us-free-audit">
              <Button size="lg" className="btn-accent">
                Get Your Free Audit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/small-business-marketing-case-studies">
              <Button size="lg" variant="outline">
                View Our Results
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;