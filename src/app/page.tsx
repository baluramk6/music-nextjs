import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import InfiniteMovingCards from "@/components/InfinityMovingCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructor from "@/components/Instructor";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white[0.2]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <InfiniteMovingCards />
      <UpcomingWebinars />
      <Instructor />
      <Footer />
    </main>
  );
}
