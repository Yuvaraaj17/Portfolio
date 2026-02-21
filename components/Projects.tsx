"use client";

import React from "react";
import { ProjectCard } from "./ProjectCard";
import projects from "../src/assets/data/projects.json";
import PlacementPalPreview from "./project-previews/PlacementPalPreview";
import DockKitPreview from "./project-previews/DockKitPreview";
import UrbanEyePreview from "./project-previews/UrbanEyePreview";

const previewComponents: Record<string, React.ComponentType> = {
  PlacementPalPreview,
  DockKitPreview,
  UrbanEyePreview,
};

const envLinks: Record<string, string | undefined> = {
  NEXT_PUBLIC_PROJECT_PLACEMENTPAL_LINK: process.env.NEXT_PUBLIC_PROJECT_PLACEMENTPAL_LINK,
  NEXT_PUBLIC_PROJECT_DOCKKIT_LINK: process.env.NEXT_PUBLIC_PROJECT_DOCKKIT_LINK,
  NEXT_PUBLIC_PROJECT_URBANEYE_LINK: process.env.NEXT_PUBLIC_PROJECT_URBANEYE_LINK,
};

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-foreground">
            Projects
          </h2>
          <div className="mt-2 h-1 w-16 bg-primary rounded-full" />
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            const PreviewComponent =
              previewComponents[project.previewComponent];
            return (
              <ProjectCard
                key={idx}
                title={project.title}
                description={project.description}
                previewComponent={PreviewComponent}
                link={envLinks[project.envKey] || "#"}
                tags={project.tags}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}