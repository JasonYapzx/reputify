"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Olivia Garcia",
    userName: "Reputation Analyst",
    comment:
      "The reputation analytics provided by this app helped me predict market trends and offer actionable insights for clients.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "James Miller",
    userName: "Crypto Analyst",
    comment:
      "The app's decentralized reputation system is a game changer. It’s transparent, secure, and builds trust in every transaction.",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Ella Rodriguez",
    userName: "Market Strategist",
    comment:
      "I love how easy it is to grow my reputation and track my performance. The data visualization tools make complex data understandable.",
    rating: 4.8,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "William Thompson",
    userName: "Financial Analyst",
    comment:
      "The audience growth insights have been invaluable. I’ve built a stronger network and reputation in the decentralized finance space.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Sophia Johnson",
    userName: "Blockchain Consultant",
    comment:
      "The clean data visuals and reputation tracking features are exactly what I need to provide my clients with detailed reports.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Lucas Brown",
    userName: "Quantitative Analyst",
    comment:
      "Having my predictions tied to a reputation score helps me stand out in the crypto market. This app has given me the edge I need.",
    rating: 4.9,
  },
];


const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Hear What Our 1000+ Clients Say
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/75042455?v=4"
                        alt="radix"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default TestimonialSection;