import AnimatedBackground from "../components/animated-background";
import AnimatedFooter from "../components/animated-footer";
import BackgroundPaths from "../components/background-paths";
import BackgroundStripes from "../components/background-stripes";
import ContactPage from "../components/contact-page";
import Navbar from "../components/navbar";


export default function Contact() {
  return (
    <div className="relative min-h-screen bg-black">
      <BackgroundPaths />
      <AnimatedBackground />
      <BackgroundStripes />

      <div className="relative z-10">
        <Navbar />
        <ContactPage />
        <AnimatedFooter />
      </div>
    </div>
  )
}
