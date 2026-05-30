"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/Container";
import { profile } from "@/data/profile";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/92 backdrop-blur">
      <Container className="flex min-h-16 items-center justify-between gap-5">
        <Link
          href="/"
          className="font-serif text-xl font-semibold tracking-normal text-ink"
          onClick={() => setIsOpen(false)}
        >
          {profile.name}
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {profile.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                isActive(item.href)
                  ? "bg-white text-signal shadow-sm ring-1 ring-line"
                  : "text-muted hover:bg-white hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-white text-ink shadow-sm transition hover:border-signal hover:text-signal lg:hidden"
        >
          {isOpen ? <X aria-hidden size={20} /> : <Menu aria-hidden size={20} />}
        </button>
      </Container>

      {isOpen ? (
        <nav className="border-t border-line bg-white lg:hidden" aria-label="Mobile">
          <Container className="grid gap-1 py-3">
            {profile.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-md px-3 py-3 text-sm font-medium transition ${
                  isActive(item.href)
                    ? "bg-teal-50 text-signal"
                    : "text-muted hover:bg-slate-50 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
