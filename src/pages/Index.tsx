import MarqueeBanner from "@/components/MarqueeBanner";
import HeroSection from "@/components/HeroSection";
import SpeakersSection from "@/components/SpeakersSection";
import EventInfoSection from "@/components/EventInfoSection";
import ScheduleSection from "@/components/ScheduleSection";
import RegistrationSection from "@/components/RegistrationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative min-h-screen">
      <MarqueeBanner />
      <HeroSection />
      <SpeakersSection />
      <EventInfoSection />
      <ScheduleSection />
      {/* <RegistrationSection /> */}
      <Footer />
    </main>
  );
};

export default Index;
