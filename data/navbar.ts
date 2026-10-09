import type { NavCta, NavItem } from "@/types/navbar";

export const navItems: NavItem[] = [
  { label: "হোম", href: "/" },
  { label: "প্রার্থী পরিচিতি", href: "/candidate-introduction" },
  {
    label: "এই মেয়াদের অঙ্গীকার",
    children: [
      { label: "অঙ্গীকার ১", href: "/promises/promise-1" },
      { label: "অঙ্গীকার ২", href: "/promises/promise-2" },
      { label: "অঙ্গীকার ৩", href: "/promises/promise-3" },
    ],
  },
  { label: "পূর্বের উল্লেখযোগ্য কাজ", href: "/works" },
  { label: "গ্যালারি", href: "/gallery" },
  { label: "সংবাদ ও আপডেট", href: "/news" },
  { label: "যোগাযোগ", href: "/contact" },
];

export const navCta: NavCta = {
  label: "আপনার আকাঙ্খা জানান",
  href: "/contact",
};
