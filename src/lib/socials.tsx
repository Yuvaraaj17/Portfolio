import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

export function getSocials(iconSize = "h-5 w-5"): SocialLink[] {
  return [
    {
      icon: <FaLinkedin className={iconSize} />,
      href: process.env.NEXT_PUBLIC_LINKEDIN_URL || "#",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub className={iconSize} />,
      href: process.env.NEXT_PUBLIC_GITHUB_URL || "#",
      label: "GitHub",
    },
    {
      icon: <SiGmail className={iconSize} />,
      href: `mailto:${process.env.NEXT_PUBLIC_EMAIL || ""}`,
      label: "Email",
    },
  ];
}
