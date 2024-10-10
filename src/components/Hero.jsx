import { curve } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BottomLine }from "./design/Hero";

import { useRef } from "react";
const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[10rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6 text-4xl">
            MED SCOPE  &nbsp;Medical&nbsp;Services. {` `}
            <span className="inline-block relative">
              Nigeria{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
           We are not only the best Healthcare equipment provider but also the best in terms of Experience.
           <br />
           {"  "}
           <br />Welcome to the world of MedScope, where advanced medical
              technology meets superior healthcare. At MedScope, we are
              committed to providing the latest solutions and services in the
              field of medical services, with a special focus on intensive care
              units, operating rooms, urology and physiotherapy.
          </p>
          <Button href="/about-us" white>
            Learn more
          </Button>
        </div>
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
