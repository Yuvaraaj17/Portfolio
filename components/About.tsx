"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap, School, Palette, Scissors, Video } from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState<"Education" | "Hobbies">(
    "Education"
  );

  return (
    <section className="py-16 md:py-24" id="about-section">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-foreground">
            About Me
          </h2>
          <div className="mt-2 h-1 w-16 bg-primary rounded-full" />
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Photo */}
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/30 to-primary/0 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image
                src="/photo.jpg"
                alt="Yuvaraaj S"
                width={320}
                height={320}
                className="relative rounded-2xl object-cover shadow-[0_8px_30px_rgba(var(--primary-rgb,180,80,30),0.25)] w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-3/5 flex flex-col gap-6">
            {/* Tabs */}
            <div className="flex gap-2">
              {(["Education", "Hobbies"] as const).map((tab) => (
                <Button
                  key={tab}
                  variant={activeTab === tab ? "default" : "secondary"}
                  onClick={() => setActiveTab(tab)}
                  className="font-poppins transition-all duration-300"
                >
                  {tab}
                </Button>
              ))}
            </div>

            {/* Education */}
            {activeTab === "Education" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 animate-fade-in-up">
                <Card className="border-border/50 hover:border-primary/30 transition-colors duration-300">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <School className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-poppins">
                      Schooling
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-foreground">
                      Sainik School Amaravathinagar
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      2013 – 2020
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/50 hover:border-primary/30 transition-colors duration-300">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-poppins">
                      Graduation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      B.E — Computer Science Engineering
                    </p>
                    <p className="font-semibold text-foreground">
                      Anna University — Coimbatore
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      2020 – 2024
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Hobbies */}
            {activeTab === "Hobbies" && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-in-up">
                {[
                  { icon: Video, label: "Video Editing" },
                  { icon: Palette, label: "Logo Designing" },
                  { icon: Scissors, label: "Origami" },
                ].map(({ icon: Icon, label }) => (
                  <Card
                    key={label}
                    className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-md group"
                  >
                    <CardContent className="flex flex-col items-center justify-center gap-3 py-8">
                      <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-poppins font-medium text-foreground">
                        {label}
                      </span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
