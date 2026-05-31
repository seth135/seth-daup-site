import { About } from "@/components/home/About";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Hero } from "@/components/home/Hero";
import { Process } from "@/components/home/Process";
import { SelectedWork } from "@/components/home/SelectedWork";
import { Services } from "@/components/home/Services";
import { WhoIHelp } from "@/components/home/WhoIHelp";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhoIHelp />
        <SelectedWork />
        <About />
        <Process />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
