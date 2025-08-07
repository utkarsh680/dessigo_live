import AnimatedBackground from "../components/animated-background";
import AnimatedFooter from "../components/animated-footer";
import BackgroundStripes from "../components/background-stripes";
import Navbar from "../components/navbar";
import SuccessStoriesRedesign from "../components/success-stories-redesign";


export default function SuccessStoriesPage() {
  return (
    <div className="relative min-h-screen bg-black">
      <AnimatedBackground />
      <BackgroundStripes />

      <div className="relative z-10">
        <Navbar />
        <SuccessStoriesRedesign />
        <AnimatedFooter />
      </div>
    </div>
  )
}
