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
    <div className="flex flex-row w-full h-max px-4 border border-black bg-zinc-950 pt-10">
      <div className=" lg:w-1/2 w-full h-fit items-center justify-center flex">
        <form className="flex w-full items-center justify-center flex-col gap-10">
          <h1 className={` ${theme === 'dark' ? 'text-white' : 'text-amber-950'} flex justify-center  font-poppins font-semibold text-3xl lg:text-5xl w-full max-w-[800px]`}>Contact ME.</h1>
          <input
            name="emailId"
            type="email"
            className="hover:cursor-pointer text-white font-ubuntu_mono focus:ring-pink-400 bg-inherit ring-[1.5px] rounded-[3px] text-lg ring-white focus:outline-none caret-pink-400 p-2 placeholder-slate-600 w-full max-w-[800px] placeholder:font-mono placeholder:font-extralight"
            placeholder="Email *"
            required
            onChange={(e) => handleOnchange(e)}
            value={formData.emailId}
            autoComplete="off"
          />
          <input
            name="name"
            type="text"
            className="hover:cursor-pointer text-white font-ubuntu_mono bg-inherit ring-[1.5px] rounded-[3px] text-lg focus:ring-pink-400 ring-white focus:outline-none caret-pink-400 p-2 placeholder-slate-600 w-full max-w-[800px] placeholder:font-mono placeholder:font-extralight"
            placeholder="Name (Optional)"
            onChange={handleOnchange}
            value={formData.name}
            autoComplete="off"
          />
          <textarea
            name="message"
            rows={5}
            className="hover:cursor-pointer text-white font-ubuntu_mono bg-inherit ring-[1.5px] rounded-[3px] text-lg focus:ring-pink-400 ring-white focus:outline-none caret-pink-400 p-2 placeholder-slate-600 w-full max-w-[800px] placeholder:font-mono placeholder:font-extralight resize-none"
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
                className="font-mono hover:cursor-pointer bg-inherit text-pink-500 rounded-sm px-4 py-1  shadow-lg w-fit border border-pink-500 tracking-wider"
                value="Clear"
                onClick={handleClear}
              />
              <input
                type="button"
                className="font-mono hover:cursor-pointer bg-pink-500 text-white rounded-sm px-3 py-1  shadow-lg w-fit tracking tracking-wider"
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
