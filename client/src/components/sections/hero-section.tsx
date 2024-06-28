import { ArrowBigDown } from "lucide-react";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="relative container flex flex-col min-h-screen items-center justify-center">
        <div className="z-10 flex flex-col items-center justify-center">
          <>
            <h1 className="z-[3] text-[#156b2c] text-center  text-[3.2rem] md:text-[4.5rem] font-extrabold  m-0 leading-[4rem]">
              <span className="text-[#31ff38] ">music</span> events
            </h1>
          </>

          <p className="mt-12 font-bold text-lg text-[#156b2c]">
            list of concerts & festivals in Slovakia 2024
          </p>

          <div className="flex items-center justify-center mt-16">
            <Button
              asChild
              size={"lg"}
              className="bg-[#31ff38] hover:bg-green-400"
            >
              <a href="#events">
                <ArrowBigDown />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
