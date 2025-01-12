import React from "react";
import NavBar from "../../components/NavBar";
import About from "../../components/About";
import Projects from "../../components/Projects";
import ContactForm from "../../components/ContactForm";
import { Skills } from "../../components/Skills";
export default function Page() {
  return (
    <div className="bg-black flex flex-col w-full h-full border border-black gap-3">
      <NavBar />
      <About />
      <h1>Hello, Next.js!</h1>
      <h1 className="text-white font-poppins font-semibold text-4xl px-10">My Areas of Expertise</h1>
      <Skills />
      <Projects />
      <ContactForm />
      <h1 className="h-[400px] bg-black text-white">Footer content</h1>
    </div>
  );
}
