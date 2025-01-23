// Content.tsx
import Accordeon from "@/components/ui/Accordeon"; // import par défaut

export const Content = () => {
  const patternBackground =
    "../faq-accordion-guide/assets/images/background-pattern-desktop.svg";
  const sizePatternBackground = { width: "6%", height: "5%" };
  const iconStar = "../../../faq-accordion-guide/assets/images/icon-star.svg";

  return (
    <div>
      {/* Image de fond */}
      <img
        src={patternBackground}
        alt="pattern-background"
        className="w-full h-full object-cover"
      />

      {/* Contenu positionné devant l'image */}
      <div className="absolute top-[0rem] flex flex-col items-center justify-center w-full h-full">
        <div className="shadow-md w-[30rem] h-[23rem] bg-white p-5 rounded-xl">
          <div className="flex flex-row space-x-4">
            <img
              style={sizePatternBackground}
              src={iconStar}
              alt="icon-star"
              className="mt-2"
            />
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold">FAQs</h1>
            </div>
          </div>
          <div className="mt-1">
            <Accordeon />
          </div>
        </div>
      </div>
    </div>
  );
};
