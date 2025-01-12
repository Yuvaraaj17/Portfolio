"use client";
import React from "react";
import { ContactCard } from "./ContactCard";

const ContactForm = () => {
  return (
    <div className="flex flex-row w-full h-max px-4 border border-black">
      <div className="bg-blue-300 w-1/2 h-[500px]">Contact form</div>
      <ContactCard />
    </div>
  );
};

export default ContactForm;
