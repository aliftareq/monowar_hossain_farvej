import Image from "next/image";

import { LinkTo } from "@/components/shared/link-to"; // TODO: adjust path

/* ----------------------------- Types ----------------------------- */

type AboutIntroData = {
  heading: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

/* ------------------------------ Data ------------------------------ */

const aboutIntroData: AboutIntroData = {
  heading: "মনোয়ার হোসেন পারভেজ সম্পর্কে জানুন",
  description:
    "বাংলাদেশ জাতীয়তাবাদী দল-বিএনপি'র একজন একনিষ্ট রাজনৈতিক কর্মী এবং ৯ নং ইউনিয়নের চন্ডিপুর উনিয়নের চেয়ারম্যান পদপ্রার্থী। দীর্ঘ রাজনৈতিক জীবনে তিনি গণতন্ত্র, সুশাসন ও জনগণের ভোটাধিকার রক্ষার আন্দোলনে নেতৃত্ব দিয়েছেন; একই সঙ্গে শিক্ষা, স্বাস্থ্য, সড়ক-যোগাযোগ, কৃষি ও তরুণদের কর্মসংস্থানে বাস্তব কাজ করেছেন।",
  cta: {
    label: "পূর্ণ পরিচিতি দেখুন",
    href: "/candidate-introduction",
  },
  image: {
    // TODO: add the real photo at this path
    src: "/images/pages/home/about-intro.webp",
    alt: "এলাকার জনগণ ও নেতাকর্মীদের সঙ্গে মনোয়ার হোসেন পারভেজ গ্রামের সড়ক ধরে হেঁটে যাচ্ছেন",
    width: 1280,
    height: 960,
  },
};

/* ----------------------------- Component ----------------------------- */

export function AboutIntroSection() {
  const { heading, description, cta, image } = aboutIntroData;

  return (
    <section
      aria-labelledby="about-intro-heading"
      className="bg-muted py-12 md:py-20 lg:py-24"
    >
      <div className="info-container grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
        {/* Text */}
        <div className="lg:max-w-xl lg:justify-self-center">
          <h2
            id="about-intro-heading"
            className="text-3xl font-bold leading-tight text-primary md:text-4xl lg:text-5xl"
          >
            {heading}
          </h2>

          <p className="mt-5 text-justify text-base leading-relaxed text-foreground/80 md:text-lg">
            {description}
          </p>

          <LinkTo
            href={cta.href}
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full border-2 border-primary px-6 text-base font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {cta.label}
          </LinkTo>
        </div>

        {/* Image (below the fold: lazy, no priority) */}
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
