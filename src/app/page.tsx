import NavBar from "../../components/NavBar";
import Intro from "../../components/Intro";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <NavBar />
      <main>
        <Intro />
        <Separator />
        <About />
        <Separator />
        <Skills />
        <Separator />
        <Projects />
        <Separator />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
