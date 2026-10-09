import { commitmentContent } from "@/data/commitment";

export function CommitmentSection() {
  const { heading, items } = commitmentContent;

  return (
    <section
      aria-labelledby="commitment-heading"
      className="info-container py-16 md:py-24"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2
          id="commitment-heading"
          className="text-3xl font-bold tracking-tight text-primary md:text-4xl"
        >
          {heading}
        </h2>
      </div>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <li
            key={item.title}
            className="rounded-2xl border bg-card p-6 shadow-sm"
          >
            <span
              aria-hidden="true"
              className="flex size-10 items-center justify-center rounded-full bg-primary text-base font-semibold text-primary-foreground"
            >
              {(index + 1).toLocaleString("bn-BD")}
            </span>
            <h3 className="mt-4 text-xl font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
