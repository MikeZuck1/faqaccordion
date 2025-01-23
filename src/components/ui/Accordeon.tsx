import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Accordeon = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="font-bold text-darkPurple hover:text-grayishPurple">
          What is Frontend Mentor, and how will it help me?
        </AccordionTrigger>
        <AccordionContent className="text-grayishPurple">
          Frontend Mentor offers realistic coding challenges top help
          developpeurs improves their frontend codin skills with projects in
          HTML, CSS, and JavaScript. It&apos;s suitable for all levels and ideal
          for porfolio building.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="font-bold text-darkPurple hover:text-grayishPurple">
          Is Frontend Mentor free?
        </AccordionTrigger>
        <AccordionContent className="text-grayishPurple">
          Yes. It comes with default styles that match the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="font-bold text-darkPurple hover:text-grayishPurple">
          Can I use Frontend Mentor project in my porfolio?
        </AccordionTrigger>
        <AccordionContent className="text-grayishPurple">
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="font-bold text-darkPurple hover:text-grayishPurple">
          How can I get help if i'm stuck on a challenge?
        </AccordionTrigger>
        <AccordionContent className="text-grayishPurple">
          Yes. It comes with default styles that match the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Accordeon; // export par défaut
