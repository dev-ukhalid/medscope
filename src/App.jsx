import ButtonGradient from "./assets/svg/ButtonGradient";
import Product from "./components/Product";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Details from "./components/Details";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Product />
        <Details />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
