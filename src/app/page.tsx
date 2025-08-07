import AnimatedBackground from "./components/animated-background";
// import AnimatedButton from "./components/animated-button";
import AnimatedFooter from "./components/animated-footer";
import BackgroundPaths from "./components/background-paths";
import BackgroundStripes from "./components/background-stripes";
// import BrandStrategy from "./components/brand-strategy";
// import CursorEffect from "./components/cursor-effect";
import Hero from "./components/hero";
import HowWeWork from "./components/how-we-work";
import InnovativeServices from "./components/innovative-services";
import Navbar from "./components/navbar";
// import ROICalculatorHome from "./components/roi-calculator-home";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      <BackgroundPaths />
      <AnimatedBackground />
      <BackgroundStripes />
       {/* <CursorEffect /> */}

      <div className="relative z-10">
        {
          <>
            <Navbar />
            <Hero />
           
            <HowWeWork />
            <InnovativeServices />
           
            <AnimatedFooter />
          </>
        }
      </div>
    </div>
  );
}
