import { LinkProps } from "next/link";

export type Link = { href: LinkProps["href"]; label: string; icon?: string };

export const links: Link[] = [
  {
    href: "/",
    label: "Home"
  },
  {
    href: "/works",
    label: "Works"
  },
  {
    href: "/contact",
    label: "Contact"
  }
];
