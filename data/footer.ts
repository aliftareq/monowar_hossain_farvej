import type { FooterData, SocialLink } from "@/types/footer";

export const footerData: FooterData = {
  name: "মনোয়ার হোসেন পারভেজ",
  description:
    "বাংলাদেশ জাতীয়তাবাদী দল-বিএনপি'র একজন একনিষ্ট রাজনৈতিক কর্মী এবং ৯ নং ইউনিয়নের চন্ডিপুর উনিয়নের চেয়ারম্যান পদপ্রার্থী",
  copyright: "সর্বস্বত্ব সংরক্ষিত",
  developer: {
    prefix: "Developed by",
    name: "Alif Hossain",
    href: "https://dev-alif.vercel.app/",
  },
};

// TODO: replace the placeholder URLs with the real profile links
export const socialLinks: SocialLink[] = [
  {
    label: "Facebook",
    href: "https://facebook.com/",
    iconKey: "facebook",
    colorClass: "bg-[#3b5998]",
  },
  {
    label: "Wikipedia",
    href: "https://bn.wikipedia.org/",
    iconKey: "wikipedia",
    colorClass: "bg-[#6b7280]",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/",
    iconKey: "instagram",
    colorClass: "bg-[#222222]",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/",
    iconKey: "youtube",
    colorClass: "bg-[#d4201c]",
  },
];
