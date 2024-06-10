import Image from "next/image";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Services from "./_components/Services";
import Projects from "./_components/Projects";
import Skills from "./_components/Skills";
import About from "./_components/About";
import Footer from "./_components/Footer";
import Faq from "./_components/Faq";
import SocialMedia from "./_components/SocialMedias";
import Contact from "./_components/Contact";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Projects/>
    <Services/>
     <Skills/>
     <Faq/>
     <Contact/>
     <SocialMedia/>
     <Footer/>
    </>
   
   
  );
}
