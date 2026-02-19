"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, RotateCcw } from "lucide-react";
import { ContactCard } from "./ContactCard";

interface FormData {
  emailId: string;
  name: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    emailId: "",
    name: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.emailId || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contactSubmission", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        handleClear();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClear = () => {
    setFormData({ emailId: "", name: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-foreground">
            Get In Touch
          </h2>
          <div className="mt-2 h-1 w-16 bg-primary rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form */}
          <div className="w-full lg:w-1/2">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label
                  htmlFor="emailId"
                  className="text-sm font-medium text-foreground mb-1.5 block font-poppins"
                >
                  Email *
                </label>
                <Input
                  id="emailId"
                  name="emailId"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.emailId}
                  onChange={handleOnChange}
                  required
                  className="font-mono"
                />
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-foreground mb-1.5 block font-poppins"
                >
                  Name{" "}
                  <span className="text-muted-foreground">(optional)</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleOnChange}
                  className="font-mono"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground mb-1.5 block font-poppins"
                >
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your message goes here..."
                  value={formData.message}
                  onChange={handleOnChange}
                  required
                  className="font-mono resize-none"
                />
              </div>

              <div className="flex gap-3 justify-end">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClear}
                >
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Clear
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  <Send className="mr-2 h-4 w-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Card */}
          <ContactCard />
        </div>
      </div>
    </section>
  );
}
