import React from "react";
import NavBar from "../../components/NavBar";
import About from "../../components/About";
import Projects from "../../components/Projects";
import ContactForm from "../../components/ContactForm";
export default function Page() {
  return (
    <div className="bg-red-300 flex flex-col w-full h-full border border-black gap-3">
      <NavBar />
      <About />
      <h1>Hello, Next.js!</h1>
      <Projects />
      <ContactForm />
      <h1 className="h-[400px] bg-black text-white">Footer content</h1>
    </div>
  );
}
