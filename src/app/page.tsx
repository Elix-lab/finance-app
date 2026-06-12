import Image from "next/image";
import NavBar from "@/components/home-page/NavBar";
import Hero from "@/components/home-page/Hero";
import Stakes from "@/components/home-page/Stakes";
import ValueProposition from "@/components/home-page/ValueProposition";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="px-4">
        <Hero />
        <Stakes/>
        <ValueProposition/>
      </div>
    </div>
  );
}
