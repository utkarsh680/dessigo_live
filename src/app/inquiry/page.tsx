import AnimatedBackground from "../components/animated-background";
import AnimatedFooter from "../components/animated-footer";
import BackgroundStripes from "../components/background-stripes";
import CustomerInquiry from "../components/customer-inquiry";



export default function InquiryPage() {
  return (
    <div className="relative min-h-screen bg-black">
      <AnimatedBackground />
      <BackgroundStripes />

      <div className="relative z-10">
        {/* <Navbar /> */}
        <CustomerInquiry />
        <AnimatedFooter />
      </div>
    </div>
  )
}
