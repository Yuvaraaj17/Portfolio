"use client";
import React, { useContext, useState } from "react";
import { ContactCard } from "./ContactCard";
import { supabase } from "../utils/client";
import { ThemeContext } from "../context/ThemeContext";

interface formSubmissionData {
  emailId: string;
  name: string | null;
  message: string;
}

const ContactForm = () => {
  const { theme } = useContext(ThemeContext);
  const [formData, setFormData] = useState<formSubmissionData>({
    emailId: "",
    name: "",
    message: "",
  });

  supabase.from("contact").insert([formData]);

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOnSubmit = async () => {
    if (formData.emailId === "" || formData.message === "") {
      alert("Please fill the required fields and Try again !!!");
    } else {
      const response = await fetch("/api/contactSubmission", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        alert("Your response has been recieved!!!")
        handleClear();
      }
    }
  };

  const handleClear = () => {
    setFormData({
      emailId: "",
      name: "",
      message: "",
    });
  };

  return (
    <div id="contact" className={`flex flex-row w-full h-max px-4 ${theme === 'dark' ? 'bg-zinc-950' : 'bg-[#e0d1c3]'} py-10`}>
      <div className=" lg:w-1/2 w-full h-fit items-center justify-center flex">
        <form className="flex w-full items-center justify-center flex-col gap-10">
          <h1 className={` ${theme === 'dark' ? 'text-white' : 'text-amber-950'} flex justify-center  font-poppins font-semibold text-3xl lg:text-5xl w-full max-w-[800px]`}>Contact ME.</h1>
          <input
            name="emailId"
            type="email"
            className={`hover:cursor-pointer  font-ubuntu_mono  bg-inherit ring-[1.5px] rounded-[3px] text-lg  focus:outline-none  p-2  w-full max-w-[800px] placeholder:font-mono placeholder:font-extralight ${theme === 'dark' ? 'text-white focus:ring-pink-400 ring-white caret-pink-400 placeholder-slate-600' : 'text-amber-800 focus:ring-amber-950 ring-amber-800 caret-amber-800 placeholder-amber-800'}`}
            placeholder="Email *"
            required
            onChange={(e) => handleOnchange(e)}
            value={formData.emailId}
            autoComplete="off"
          />
          <input
            name="name"
            type="text"
            className={`hover:cursor-pointer font-ubuntu_mono bg-inherit ring-[1.5px] rounded-[3px] text-lg focus:outline-none p-2 w-full max-w-[800px] placeholder:font-mono placeholder:font-extralight ${theme === 'dark' ? 'text-white focus:ring-pink-400 ring-white caret-pink-400 placeholder-slate-600' : 'text-amber-800 focus:ring-amber-950 ring-amber-800 caret-amber-800 placeholder-amber-800'}`}
            placeholder="Name (Optional)"
            onChange={handleOnchange}
            value={formData.name}
            autoComplete="off"
          />
          <textarea
            name="message"
            rows={5}
            className={`hover:cursor-pointer font-ubuntu_mono bg-inherit ring-[1.5px] rounded-[3px] text-lg focus:outline-none p-2 w-full max-w-[800px] placeholder:font-mono placeholder:font-extralight resize-none ${theme === 'dark' ? 'text-white focus:ring-pink-400 ring-white caret-pink-400 placeholder-slate-600' : 'text-amber-800 focus:ring-amber-950 ring-amber-800 caret-amber-800 placeholder-amber-800'}`}
            placeholder="Your Message goes here ... *"
            required
            onChange={handleOnchange}
            value={formData.message}
            autoComplete="off"
          ></textarea>
          <div className="w-full max-w-[800px] flex justify-end">
            <div className="flex flex-row self-end gap-4">
              <input
                type="submit"
                className={`font-mono hover:cursor-pointer bg-inherit text-xl rounded-sm px-4 py-2 shadow-lg w-fit border tracking-wider ${theme === 'dark' ? 'text-pink-500 border-pink-500' : 'text-amber-950 border-amber-950'}`}
                value="Clear"
                onClick={handleClear}
              />
              <input
                type="button"
                className={`font-mono hover:cursor-pointer rounded-sm px-3 py-2 text-xl  shadow-lg w-fit tracking tracking-wider ${theme === 'dark' ? 'text-white bg-pink-500' : 'text-[#e0d1c3] bg-amber-950'}`}
                value="Submit"
                onClick={handleOnSubmit}
              />
            </div>
          </div>

        </form>
      </div>
      <ContactCard />
    </div>
  );
};

export default ContactForm;
