import NavBar from "@/components/home-page/NavBar";
import Hero from "@/components/home-page/Hero";
import Stakes from "@/components/home-page/Stakes";
import ValueProposition from "@/components/home-page/ValueProposition";
import TheGuide from "@/components/home-page/TheGuide";
import ThePlan from "@/components/home-page/ThePlan";
import Footer from "@/components/home-page/Footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Stakes />
      <ValueProposition />
      <TheGuide />
      <ThePlan />
      <Footer/>
    </div>
  );
}
