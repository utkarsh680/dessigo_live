import AnimatedBackground from "../components/animated-background";
import AnimatedFooter from "../components/animated-footer";
import BackgroundPaths from "../components/background-paths";
import BackgroundStripes from "../components/background-stripes";
import GetStartedFlow from "../components/get-started-flow";
import Navbar from "../components/navbar";


export default function GetStartedPage() {
  return (
    <div className="relative min-h-screen bg-black">
      <BackgroundPaths />
      <AnimatedBackground />
      <BackgroundStripes />

      <div className="relative z-10">
        <Navbar />
        <GetStartedFlow />
        <AnimatedFooter />
      </div>
    </div>
  )
}
