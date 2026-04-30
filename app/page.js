import Hero from "./Cx/Hero";
import VideoFeature from "./Cx/VideoFeature";
import ThreeDPrinterSection from "./Cx/3DPrinter";
import VideoTwo from "./Cx/VideoTwo";
import PrinterAnnotatedSection from "./Cx/PrinterAnnotated";
import SpecsSection from "./Cx/Specs";
import IDKSection from "./Cx/IDK";
import View360Section from "./Cx/View360";
import FooterSection from "./Cx/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-visible">
      <Hero />
      <VideoFeature />
      <ThreeDPrinterSection />
      <VideoTwo />
      <PrinterAnnotatedSection />
      <IDKSection />
      <View360Section />
      <SpecsSection />
      <FooterSection />
    </div>
  );
}
