import NextLink from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type LinkToProps = ComponentProps<typeof NextLink>;

/**
 * Project-wide link wrapper around `next/link`.
 * Always use this instead of importing `next/link` directly.
 * External URLs (https://…) are handled by Next.js automatically.
 */
export function LinkTo({ className, ...props }: LinkToProps) {
  return (
    <NextLink
      className={cn(
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
      {...props}
    />
  );
}
