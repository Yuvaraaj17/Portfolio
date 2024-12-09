import React from "react";
import NavBar from "../../components/NavBar";
import About from "../../components/About";
export default function Page() {
  return (
    <div className="bg-red-300 flex flex-col w-screen h-screen border border-black gap-3">
      <NavBar />
      <About />
      <h1>Hello, Next.js!</h1>
    </div>
  );
}
