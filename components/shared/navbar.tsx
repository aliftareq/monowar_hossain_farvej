"use client";

import { ChevronDown, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { LinkTo } from "@/components/shared/link-to";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { navCta, navItems } from "@/data/navbar";

/* ----------------------------- Helpers ----------------------------- */

function isActivePath(pathname: string, href?: string): boolean {
  if (!href) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const itemClass =
  "inline-flex items-center gap-1 whitespace-nowrap rounded-sm text-lg font-medium transition-colors hover:text-destructive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

/* ------------------------------ Logo ------------------------------- */

// Placeholder. Later replace the <div> with next/image, e.g.
// <Image src="/images/pages/shared/logo.webp" alt="..." width={96} height={96} priority />
function SiteLogo() {
  return (
    <LinkTo href="/" aria-label="হোম পেইজে যান" className="shrink-0">
      <div
        aria-hidden="true"
        className="flex size-16 items-center justify-center rounded-full border-2 border-dashed border-primary/40 bg-muted text-xs font-medium text-muted-foreground md:size-20"
      >
        Logo
      </div>
    </LinkTo>
  );
}

/* --------------------------- Desktop links --------------------------- */

function DesktopLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="প্রধান মেনু" className="hidden xl:block">
      <ul className="flex items-center gap-7">
        {navItems.map((item) => {
          const active =
            isActivePath(pathname, item.href) ||
            item.children?.some((c) => isActivePath(pathname, c.href));
          const colorClass = active ? "text-destructive" : "text-primary";

          if (item.children?.length) {
            return (
              <li key={item.label}>
                <DropdownMenu>
                  <DropdownMenuTrigger className={cn(itemClass, colorClass)}>
                    {item.label}
                    <ChevronDown className="size-4" aria-hidden="true" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="min-w-56">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.href} asChild>
                        <LinkTo
                          href={child.href}
                          className="cursor-pointer text-base"
                        >
                          {child.label}
                        </LinkTo>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            );
          }

          return (
            <li key={item.label}>
              <LinkTo
                href={item.href ?? "#"}
                aria-current={active ? "page" : undefined}
                className={cn(itemClass, colorClass)}
              >
                {item.label}
              </LinkTo>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/* ---------------------------- Mobile menu ---------------------------- */

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="মেনু খুলুন"
        className="inline-flex size-11 items-center justify-center rounded-md text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring xl:hidden"
      >
        <Menu className="size-7" aria-hidden="true" />
      </SheetTrigger>

      <SheetContent side="right" className="w-[85%] max-w-sm overflow-y-auto">
        <SheetHeader>
          <SheetTitle>মেনু</SheetTitle>
          <SheetDescription className="sr-only">
            ওয়েবসাইটের পেইজসমূহ
          </SheetDescription>
        </SheetHeader>

        <nav aria-label="মোবাইল মেনু" className="px-4 pb-6">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <li key={item.label}>
                  {item.children?.length ? (
                    <>
                      <p className="px-3 py-2 text-lg font-medium text-primary">
                        {item.label}
                      </p>
                      <ul className="ml-3 flex flex-col border-l border-border pl-3">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <LinkTo
                              href={child.href}
                              onClick={close}
                              className={cn(
                                "block rounded-md px-3 py-2 text-base",
                                isActivePath(pathname, child.href)
                                  ? "text-destructive"
                                  : "text-foreground",
                              )}
                            >
                              {child.label}
                            </LinkTo>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <LinkTo
                      href={item.href ?? "#"}
                      onClick={close}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "block rounded-md px-3 py-2 text-lg font-medium",
                        active ? "text-destructive" : "text-primary",
                      )}
                    >
                      {item.label}
                    </LinkTo>
                  )}
                </li>
              );
            })}
          </ul>

          <LinkTo
            href={navCta.href}
            onClick={close}
            className="mt-6 flex h-12 items-center justify-center rounded-full bg-primary px-6 text-lg font-semibold text-primary-foreground"
          >
            {navCta.label}
          </LinkTo>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

/* ------------------------------ Navbar ------------------------------ */

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background shadow-sm">
      <div className="info-container flex items-center justify-between gap-4 py-2">
        <SiteLogo />

        <DesktopLinks />

        <LinkTo
          href={navCta.href}
          className="hidden h-12 shrink-0 items-center rounded-full bg-primary px-7 text-lg font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 xl:inline-flex"
        >
          {navCta.label}
        </LinkTo>

        <MobileMenu />
      </div>
    </header>
  );
}
