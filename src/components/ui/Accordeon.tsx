import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const Accordeon = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqData.map(({ id, question, answer }) => (
        <AccordionItem key={id} value={id}>
          <AccordionTrigger
            className="font-bold text-darkPurple hover:text-grayishPurple flex justify-between items-center before:content-none"
            onClick={() => handleToggle(id)}
          >
            {question}
            {/* Icon "+" close, "-" open */}
            <span className="ml-2">
              {openItem === id ? <MinusIcon /> : <PlusIcon />}
            </span>
          </AccordionTrigger>
          <AccordionContent className="text-grayishPurple">
            {answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

// Icône "+"
const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="31"
    fill="none"
    viewBox="0 0 30 31"
  >
    <path
      fill="#AD28EB"
      d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"
    />
  </svg>
);

// Icône "-"
const MinusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="31"
    fill="none"
    viewBox="0 0 30 31"
  >
    <path
      fill="#301534"
      d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"
    />
  </svg>
);

// Données FAQ
const faqData = [
  {
    id: "item-1",
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    id: "item-2",
    question: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    id: "item-3",
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    id: "item-4",
    question: "How can I get help if I'm stuck on a challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

export default Accordeon;
