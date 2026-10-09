export type AboutIntroImage = {
  src: string;
  alt: string;
};

export type AboutIntroCta = {
  label: string;
  href: string;
};

export type AboutIntroContent = {
  heading: string;
  body: string;
  image: AboutIntroImage;
  cta: AboutIntroCta;
};
