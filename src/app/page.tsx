import React from "react";
import NavBar from "../../components/NavBar";
import About from "../../components/About";
import Projects from "../../components/Projects";
import ContactForm from "../../components/ContactForm";
import Skills from "../../components/Skills";
import Intro from "../../components/Intro";
export default function Page() {
  return (
    <div className="bg-black flex flex-col w-full h-full border border-black gap-10">
      <NavBar />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <ContactForm />
      <h1 className="h-[400px] bg-black text-white">Footer content</h1>
    </div>
  );
}
