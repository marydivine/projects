import Hero from "./components/Hero";
import LearnMore from "./components/LearnMore";
import Navbar from "./components/Navbar";
import PricePlan from "./components/PricePlan";
import Services from "./components/Services";
import Watch from "./components/Watch";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white dark:bg-gray-800 bg-cover ">
      <div className="container m-auto">
        <Navbar />
        <Hero />
        <Services />
        <LearnMore />
        <PricePlan />
        <Watch />
        <Footer />
      </div>
    </div>
  );
}

export default App;
