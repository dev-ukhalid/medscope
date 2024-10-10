import Section from "./Section";
import Tagline from "./Tagline";
import { Detail } from "../constants";
import { grid } from "../assets";
import { Gradient } from "./design/Details";

const Details = () => (
  <Section className="overflow-hidden" id="details">
    <div className="container md:pb-10">
      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {Detail.map((item) => {
          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <Tagline>Address</Tagline>
                  <p className="font-mono m-2">NO. 14 Murtala Mohammed Way opposite kano Golf club, <br /> Kano State, Nigeria.</p>
                  <Tagline>Phone NO.</Tagline>
                  <p className="font-mono m-2">07000000000, 08000000000</p>
                  <Tagline>Email Address</Tagline>
                  <p className="font-mono m-2">info@med-scope.net.ng</p>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>

      
    </div>
  </Section>
);

export default Details;
