import { products } from "../constants";
import Heading from "../components/Heading";
import Section from "../components/Section";
import Arrow from "../assets/svg/Arrow";
import Button from "./Button";
import { GradientLight } from "./design/product";
import ClipPath from "../assets/svg/ClipPath";
import Header from "../components/Header";
const Products = () => {
  return (
    <Section id="products">
    <Header />
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Our Products"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {products.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col content-between  min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <img src={item.productImage}/>
                <div className="flex items-center">
                  <p className="ml-auto pt-2 font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}
              <ClipPath />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="/products">Load more..</Button>
      </div>
      </div>
    </Section>
  );
};

export default Products;
