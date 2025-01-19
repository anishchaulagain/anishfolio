import Image from "next/image";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Homepage/Hero";
import Services from "./_components/Homepage/Services";
import Projects from "./_components/Homepage/Projects";
import Skills from "./_components/Homepage/Skills";
import About from "./_components/Homepage/About";
import Footer from "./_components/Footer";
import Faq from "./_components/Homepage/Faq";
import SocialMedia from "./_components/Homepage/SocialMedias";
import Contact from "./_components/Homepage/Contact";
import Experience from "./_components/Homepage/Experience";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
    <Hero/>
    <About/>
    <Experience/>
    <Projects/>
    <Services/>
     <Skills/>
     <Faq/>
     <Contact/>
     <SocialMedia/>
     
    </div>
   
   
  );
}
