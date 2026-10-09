export type SocialIconKey = "facebook" | "wikipedia" | "instagram" | "youtube";

export type SocialLink = {
  label: string;
  href: string;
  /** Maps to an icon rendered inside the footer */
  iconKey: SocialIconKey;
  /** Tailwind background class for the circle */
  colorClass: string;
};

export type FooterDeveloper = {
  prefix: string;
  name: string;
  href: string;
};

export type FooterData = {
  name: string;
  description: string;
  copyright: string;
  developer: FooterDeveloper;
};
