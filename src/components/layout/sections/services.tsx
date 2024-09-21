import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}
const serviceList: ServiceProps[] = [

  {
    title: "Audience Engagement Insights",
    description:
      "Analyze audience growth with clean visualizations, helping you optimize strategies to expand your reach.",
    pro: 0,
  },
  {
    title: "Crypto Chart Data Visualization",
    description:
      "Display real-time and historical data using intuitive charts, offering clear insights into cryptocurrency trends.",
    pro: 0,
  },
  {
    title: "Advanced Token Metrics",
    description:
      "Track key token metrics with detailed breakdowns, giving users insights into token behaviors and market trends.",
    pro: 0,
  },
  {
    title: "Reputation Growth Analytics",
    description:
      "Track and visualize reputation metrics over time, ensuring transparent and insightful data on user reputation.",
    pro: 1,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Services
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Grow Your Audience
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        No more marketing, writing medium articles to prove your credibility, everything is easily verified on chain!
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;