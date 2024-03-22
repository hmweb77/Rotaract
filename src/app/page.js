import FAQSection from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Packages from "@/components/Package";
import Program from "@/components/Program";
import Team from "@/components/Team";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Packages />
      <Program />
      <FAQSection />
      <Team />
      <Footer />
    </main>
  );
}
