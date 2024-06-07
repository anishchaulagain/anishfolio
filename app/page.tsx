import Image from "next/image";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Services from "./_components/Services";
import Projects from "./_components/Projects";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    <Projects/>
    </>
   
   
  );
}
