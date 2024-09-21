import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import jasonPP from "../../icons/jason.jpg";
import jonPP from "../../icons/jonathan.jpg";
import eugenePP from "../../icons/eugene.jpg";
import shaunePP from "../../icons/shaune.jpg";
import jiahuaPP from "../../icons/jiahua.jpg";
import "slick-carousel/slick/slick.css"; // Import slick-carousel CSS
import Slider from 'react-slick'
interface TeamProps {
  imageUrl: StaticImageData;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}
interface SocialNetworkProps {
  name: string;
  url: string;
}

const TeamSection = () => {
  const teamList: TeamProps[] = [
    {
      imageUrl: jasonPP,
      firstName: "Jason",
      lastName: "Yap",
      positions: [
        "Software Developer",
        "Blockchain Enthusiast",
        "AWS Solutions Architect - Associate Certified",
      ],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/ja-sony/",
        },
        {
          name: "Github",
          url: "https://github.com/JasonYapzx",
        },
      ],
    },
    {
      imageUrl: jonPP,
      firstName: "Jonathan",
      lastName: "Yap",
      positions: [
        "Software Evangelist",
        "Site Reliability Engineer",
        "AWS Solutions Architect - Associate Certified",
      ],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/jonjon98/",
        },
        {
          name: "Github",
          url: "https://github.com/jonjon98",
        },
      ],
    },
    {
      imageUrl: shaunePP,
      firstName: "Shaune",
      lastName: "Ang",
      positions: ["Machine Learning Engineer", "Javascript Champion"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/shauneang/",
        },
        {
          name: "Github",
          url: "https://github.com/shauneang",
        },
      ],
    },
    {
      imageUrl: eugenePP,
      firstName: "Eugene",
      lastName: "Tay",
      positions: ["Software Developer", "AWS Developer - Associate Certified"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/eugenetayyj/",
        },
        {
          name: "Github",
          url: "https://github.com/eugenetayyj",
        },
      ],
    },
    {
      imageUrl: jiahuaPP,
      firstName: "Du",
      lastName: "Jia Hua",
      positions: ["DevOps Engineer", "Frontend Mastermind"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://sg.linkedin.com/in/du-jiahua",
        },
        {
          name: "Github",
          url: "https://github.com/edures888",
        },
      ],
    },
  ];
  const socialIcon = (socialName: string) => {
    switch (socialName) {
      case "LinkedIn":
        return <LinkedInIcon />;
      case "Github":
        return <GithubIcon />;
      case "X":
        return <XIcon />;
    }
  };

  return (
    <section id="team" className="container lg:w-[75%] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Team
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          The Company Dream Team
        </h2>
      </div>

        <div className="grid grid-cols-3 gap-8">
          {teamList.map(
            (
              { imageUrl, firstName, lastName, positions, socialNetworks },
              index
            ) => (
              <Card
                key={index}
                className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
              >
                <CardHeader className="p-0 gap-0">
                  <div className="h-full overflow-hidden">
                    <Image
                      src={imageUrl}
                      alt=""
                      width={300}
                      height={300}
                      className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                    />
                  </div>
                  <CardTitle className="py-6 pb-4 px-6">
                    {firstName}
                    <span className="text-primary ml-2">{lastName}</span>
                  </CardTitle>
                </CardHeader>
                {positions.map((position, index) => (
                  <CardContent
                    key={index}
                    className={`pb-0 text-muted-foreground ${
                      index === positions.length - 1 && "pb-6"
                    }`}
                  >
                    {position}
                    {index < positions.length - 1 && <span>,</span>}
                  </CardContent>
                ))}

                <CardFooter className="space-x-4 mt-auto">
                  {socialNetworks.map(({ name, url }, index) => (
                    <Link
                      key={index}
                      href={url}
                      target="_blank"
                      className="hover:opacity-80 transition-all"
                    >
                      {socialIcon(name)}
                    </Link>
                  ))}
                </CardFooter>
              </Card>
            )
          )}
        </div>
    </section>
  );
};

export default TeamSection;
