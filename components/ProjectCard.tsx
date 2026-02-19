import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description?: string;
  imgPath: string;
  link?: string;
  tags?: string[];
}

export function ProjectCard({
  title,
  description,
  imgPath,
  link,
  tags,
}: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
      {/* Image */}
      <CardHeader className="p-0">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imgPath}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
            {link && (
              <Button size="sm" variant="secondary" asChild>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-3 w-3" />
                  View Project
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardHeader>

      {/* Content */}
      <CardContent className="pt-4">
        <h3 className="font-poppins font-semibold text-lg text-foreground">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
            {description}
          </p>
        )}
      </CardContent>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <CardFooter className="flex flex-wrap gap-1.5 pt-0">
          {tags.map((tag: string) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </CardFooter>
      )}
    </Card>
  );
}