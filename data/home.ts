import type { HomeContent } from "@/types/home";

export const homeContent: HomeContent = {
  logoSrc: "/next.svg",
  logoAlt: "Next.js logo",
  heading: "To get started, edit the page.tsx file.",
  paragraph: {
    before: "Looking for a starting point or more instructions? Head over to",
    firstLink: {
      label: "Templates",
      href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    },
    between: "or the",
    secondLink: {
      label: "Learning",
      href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    },
    after: "center.",
  },
  ctas: [
    {
      label: "Deploy Now",
      href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
      iconSrc: "/vercel.svg",
      iconAlt: "Vercel logomark",
      variant: "solid",
    },
    {
      label: "Documentation",
      href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
      iconSrc: "",
      iconAlt: "",
      variant: "outline",
    },
  ],
};
