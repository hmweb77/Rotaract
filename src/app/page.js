import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Packages from "@/components/Package";
import Image from "next/image";

export default function Home() {
  return (
    <main >
    <NavBar/>
    <Hero/>
    <Packages/>
    <Footer/>
    </main>
  );
}
