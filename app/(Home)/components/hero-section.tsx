import Image from "next/image";

import { heroContent } from "@/data/hero";

export function HeroSection() {
  const { image } = heroContent;

  return (
    <section aria-label="ব্যানার" className="w-full">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority
        sizes="100vw"
        className="h-auto w-full"
      />
    </section>
  );
}
