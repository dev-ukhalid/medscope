import Header from "../components/Header";
import { curve } from "../assets";
import Section from "../components/Section";
import { BottomLine } from "../components/design/Hero";
import { useRef } from "react";
import Footer from "../components/Footer";

const About = () => {
  const parallaxRef = useRef(null);

  return (
    <div>
      <Header />
      <Section
        className="pt-[11rem] -mt-[5.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="hero"
      >
        <div className="container relative" ref={parallaxRef}>
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
            <h1 className="h1 mb-6">
              <span className="inline-block relative">
                Who We are{" "}
                <img
                  src={curve}
                  className="absolute top-full left-0 w-full xl:-mt-2"
                  width={624}
                  height={28}
                  alt="Curve"
                />
              </span>
            </h1>
            <p className="body-1 max-w-3xl mx-auto mb-6 text-left text-n-2 lg:mb-8">
              Welcome to the world of MedScope, where advanced medical
              technology meets superior healthcare. At MedScope, we are
              committed to providing the latest solutions and services in the
              field of medical services, with a special focus on intensive care
              units, operating rooms, urology and physiotherapy.<br />
              {"  "}
              <br /><b> Our Vision:</b> At MedScope, we aspire to be the ideal partner
              for every medical institution, by providing integrated and
              reliable solutions that contribute to improving the quality of
              healthcare and the efficiency of operations. <br />
              {"  "}
              <br /><b> Building Management Systems:</b> In addition to our medical
              services, we offer advanced solutions in the field of building
              management systems. Our intelligent medical building management
              system allows you to have precise control over the environment and
              safety, which contributes to enhancing efficiency and improving
              the patient experience.<br />
              {"  "}
              <br /> <b>Contact Us:</b> We hope you find our products and
              services meet and exceed your expectations. If you have any
              additional questions or comments, we are always here to help.
              Please feel free to contact us for more information or to arrange
              a consultation.
            </p>
            <h1 className="h1 mb-6">
              <span className="inline-block relative">
                Our mission{" "}
                <img
                  src={curve}
                  className="absolute top-full left-0 w-full xl:-mt-2"
                  width={624}
                  height={28}
                  alt="Curve"
                />
              </span>
            </h1>
            <p className="body-1 max-w-3xl mx-auto mb-6 text-left text-n-2 lg:mb-8">
              Technology, with the aim of achieving a set of strategic
              objectives that reflect our commitment to improving the quality of
              healthcare and providing a comprehensive solution to our
              customers’ needs. Our mission is summarized in the following
              points:<br />
              {"  "}
              <ol>
              <br /> <li>
                  <b>1. Creating value for customers:</b> We strive to create
                  effective value for our customers by providing innovative
                  technology solutions that contribute to improving health
                  outcomes in cost-effective ways.<br />
                  {"  "}
                </li>
                <br /> <li>
                  <b>2. Team Synergy:</b> We believe in the importance of cooperation and
                  synergy, as we use our resources and expertise in an
                  integrated manner to accelerate research and development
                  processes, with the aim of providing advanced and integrated
                  medical solutions.<br />
                  {"  "}
                </li>
                <br /> <li>
                  <b>3. Dominating local and regional markets: </b>We seek to enhance our
                  presence in local and regional markets, by providing
                  high-quality and effective products and services.<br />
                  {"  "}
                </li>
                <br /> <li>
                  <b>4. Government and Non-Governmental Partnerships:</b> We create
                  opportunities for collaboration and partnership with
                  governments and non-governmental organizations, with the aim
                  of meeting critical healthcare needs and promoting sustainable
                  development.<br />
                  {"  "}
                </li>
                <br /> <li>
                 <b>5. Inspiring internal competencies:</b> We seek to motivate and
                  develop internal competencies, with the aim of enhancing and
                  expanding the areas of work within the group and promoting
                  excellence in the fields of healthcare.<br />
                  {"  "}
                </li>
              </ol>
              <br /><span> Through this mission, we strive to enhance our position as an
              innovative and trusted company in the field of medical technology,
              contributing to improving the health and well-being of society.</span>
            </p>
          </div>
          </div>

        <BottomLine />
      </Section>
      <Footer />
    </div>
  );
};

export default About;
