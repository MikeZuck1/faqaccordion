import Accordeon from "@/components/ui/Accordeon"; // Import du composant

export const Content = () => {
  const patternBackground =
    "../faq-accordion-guide/assets/images/background-pattern-desktop.svg";
  const iconStar = "../../../faq-accordion-guide/assets/images/icon-star.svg";

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      {/* Image de fond (fixe) */}
      <img
        src={patternBackground}
        alt="pattern-background"
        className="fixed inset-0 w-full object-cover -z-10"
      />

      {/* Contenu positionné devant l'image */}
      <div className="w-full flex items-center justify-center">
        <div className="shadow-lg w-full max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-[30rem] bg-white p-6 sm:p-8 rounded-xl">
          {/* Titre + icône étoile */}
          <div className="flex items-center space-x-4">
            <img
              src={iconStar}
              alt="icon-star"
              className="w-6 h-6 sm:w-8 sm:h-8 self-center"
            />
            <h1 className="text-4xl font-bold">FAQs</h1>
          </div>

          {/* Section Accordeon */}
          <div className="mt-4">
            <Accordeon />
          </div>
        </div>
      </div>
    </div>
  );
};
