export type NavChild = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href?: string; // omit when the item only opens a dropdown
  children?: NavChild[];
};

export type NavCta = {
  label: string;
  href: string;
};
