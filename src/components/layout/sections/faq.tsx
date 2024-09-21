import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is Reputify?",
    answer: "Reputify is a decentralized reputation platform that tracks and evaluates analysts' predictions in various markets, ensuring transparency and accountability through blockchain technology.",
    value: "item-1",
  },
  {
    question: "How does the staking mechanism work?",
    answer: "Users can stake tokens on analysts' predictions. If a prediction is correct, both the analyst and their backers receive rewards. If incorrect, stakers lose their stake, which is then awarded to false stakers.",
    value: "item-2",
  },
  {
    question: "How is an analyst's reputation calculated?",
    answer: "An analyst's reputation is based on their prediction accuracy, community feedback, and engagement metrics. Higher accuracy and positive feedback lead to an increased reputation score.",
    value: "item-3",
  },
  {
    question: "What technologies does Reputify use?",
    answer: "Reputify is built with NextJS for the frontend, HardHat for smart contracts, and deployed on Hedera Token Service and Hedera Smart Contract Service, with wallet authentication provided by Dynamic.",
    value: "item-4",
  },
  {
    question: "Will ChainLink Oracles be integrated into Reputify?",
    answer: "Yes, ChainLink Oracles will be integrated to capture real-time on-chain data for accurate prediction evaluations, enhancing the platform's reliability.",
    value: "item-5",
  },
];


const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQSection;