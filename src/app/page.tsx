import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

// sections
import Hero from "./hero";
import VideoIntro from "./video-intro";
import Feature from "./feature";
import MobileConvenience from "./mobile-convenience";
import Principles from "./testimonials";
import Faqs from "./faqs";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <VideoIntro />
      <Feature />
      <MobileConvenience />
      <Principles />
      <Faqs />
      <Footer />
    </>
  );
}
