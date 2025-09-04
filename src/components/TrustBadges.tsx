import { Star, Users, Award, Clock } from "lucide-react";

export const TrustBadges = () => {
  const badges = [
    {
      icon: Users,
      text: "Join 500+ Growing Businesses"
    },
    {
      icon: Star,
      text: "Trusted Nationwide Since 2024"
    },
    {
      icon: Award,
      text: "A+ Better Business Bureau Rating"
    },
    {
      icon: Clock,
      text: "30-Day Money-Back Guarantee"
    }
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <div 
            key={badge.text}
            className="flex items-center gap-2 text-muted-foreground"
          >
            <Icon className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">{badge.text}</span>
          </div>
        );
      })}
    </div>
  );
};
