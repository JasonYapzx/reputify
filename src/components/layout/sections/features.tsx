import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Mobile Friendly",
    description:
      "Our site and application is mobile friendly for you to use anytime, anywhere.",
  },
  {
    icon: "BadgeCheck",
    title: "Social Proof",
    description:
      "There is a social proof of someone's reputation, the more tokens they have, the better their calls",
  },
  {
    icon: "Goal",
    title: "Targeted Content",
    description:
      "Follow the creators you want, and get alpha on the things you love.",
  },
  {
    icon: "PictureInPicture",
    title: "Data Visualization",
    description:
      "Easy to understand and clean data visualization for your trading needs and alpha generation.",
  },
  {
    icon: "MousePointerClick",
    title: "Easy of use",
    description:
      "Everything away at the click of a button, easily manage and gamble away your reputation!",
  },
  {
    icon: "Newspaper",
    title: "Knowledge library",
    description:
      "Transform this to your online knowledge management portal",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Makes Us Different
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        We make you bet on your reputation in order to further your reputation, put your money where your mouth is!
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
