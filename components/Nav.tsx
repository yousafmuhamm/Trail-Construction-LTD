"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icon";
import { nav, business } from "@/lib/content";

function Logo() {
  return (
    <Link href="/" className="flex shrink-0 items-center" aria-label={`${business.name} home`}>
      <Image
        src="/images/Gold Minimalist Adventure Mountain Logo.svg"
        alt="Trail Construction Ltd."
        width={220}
        height={66}
        className="h-12 w-auto sm:h-14"
        style={{ filter: "brightness(0) invert(1)" }}
        priority
      />
    </Link>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-forest-700/60 bg-charcoal/95 backdrop-blur supports-[backdrop-filter]:bg-charcoal/85"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-8"
      >
        <Logo />

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 lg:flex xl:gap-8">
          {nav.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex min-h-11 items-center text-[0.95rem] font-medium text-cream transition-colors hover:text-brand-soft"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={business.phoneHref}
            className="inline-flex min-h-12 items-center gap-2 rounded-sm border border-white/25 px-4 py-3 text-sm font-semibold text-cream transition-colors hover:border-white/50 hover:bg-white/10"
          >
            <Icon name="phone" className="h-4 w-4 text-brass-soft" />
            {business.phone}
          </a>
          <Link
            href={nav.cta.href}
            className="inline-flex min-h-12 items-center gap-2 rounded-sm bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover xl:px-6"
          >
            {nav.cta.label}
            <Icon name="arrowRight" className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex items-center gap-1.5 lg:hidden">
          <a
            href={business.phoneHref}
            aria-label={`Call ${business.phone}`}
            className="grid h-11 w-11 place-items-center rounded-md text-cream transition-colors hover:bg-white/10"
          >
            <Icon name="phone" className="h-5 w-5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-cream transition-colors hover:bg-white/10"
          >
            <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100svh-5rem)] overflow-y-auto border-t border-forest-700/60 bg-charcoal lg:hidden"
      >
        <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-8">
          {nav.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center rounded-md px-3 py-3 text-base font-medium text-cream-soft transition-colors hover:bg-forest-700/40 hover:text-cream"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-3 grid gap-3 sm:grid-cols-2">
            <a
              href={business.phoneHref}
              className="flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/20 px-5 py-3 text-base font-semibold text-cream transition-colors hover:bg-white/10"
            >
              <Icon name="phone" className="h-5 w-5 text-brass-soft" />
              {business.phone}
            </a>
            <Link
              href={nav.cta.href}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-hover"
            >
              {nav.cta.label}
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
