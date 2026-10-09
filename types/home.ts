export type HomeLink = {
  label: string;
  href: string;
};

export type HomeCta = {
  label: string;
  href: string;
  iconSrc: string;
  iconAlt: string;
  variant: "solid" | "outline";
};

export type HomeParagraph = {
  before: string;
  firstLink: HomeLink;
  between: string;
  secondLink: HomeLink;
  after: string;
};

export type HomeContent = {
  logoSrc: string;
  logoAlt: string;
  heading: string;
  paragraph: HomeParagraph;
  ctas: HomeCta[];
};
