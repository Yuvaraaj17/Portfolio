import React from "react";
import NavBar from "../../components/NavBar";
export default function Page() {
  return (
    <div className="bg-red-300 flex w-screen h-screen border border-black">
      <NavBar />
      <h1>Hello, Next.js!</h1>
    </div>
  );
}
