import type { Metadata } from "next";

import { candidateIntroductionContent as content } from "@/data/candidate-introduction";

export const metadata: Metadata = {
  title: content.title,
  description: content.metaDescription,
};

export default function CandidateIntroductionPage() {
  return (
    <div className="info-container flex-1 py-16">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
        {content.heading}
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        {content.placeholderNote}
      </p>
    </div>
  );
}
