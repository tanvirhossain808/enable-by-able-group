import ContactUs from "@/components/common/ContactUs";
import TeamMember from "@/components/common/TeamMember";
import Cta from "@/components/Home/Cta";
import Features from "@/components/Home/Features";
import HomeHero from "@/components/Home/HomeHero";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <Features />
      <TeamMember />
      <ContactUs />
      <Cta />
    </div>
  );
}
