import CommunitySection from "@/components/layout/sections/community";
import ContactSection from "@/components/layout/sections/contact";
import FAQSection from "@/components/layout/sections/faq";
import FeaturesSection from "@/components/layout/sections/features";
import FooterSection from "@/components/layout/sections/footer";
import HeroSection from "@/components/layout/sections/hero";
import PricingSection from "@/components/layout/sections/pricing";
import ServicesSection from "@/components/layout/sections/services";
import SponsorsSection from "@/components/layout/sections/sponsors";
import TeamSection from "@/components/layout/sections/team";
import TestimonialSection from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "Reputify",
  description: "Your reputation tokenized",
  openGraph: {
    type: "website",
    url: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "Reputify - Reputation dApp",
    description: "Your reputation tokenized",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "Reputify - Reputation dApp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "Reputify - Reputation dApp",
    description: "Your reputation tokenized",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function Home() {
    return (
        <div className="flex items-center flex-col">
            <HeroSection />
            <SponsorsSection />
            <FeaturesSection />
            <ServicesSection />
            <TestimonialSection />
            <TeamSection />
            <CommunitySection />
            {/* <PricingSection /> */}
            {/* <ContactSection /> */}
            <FAQSection />
            <FooterSection />
        </div>
    );
}
