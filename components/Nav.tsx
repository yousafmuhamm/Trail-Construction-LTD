"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icon";
import { BrandMark } from "./BrandMark";
import { nav, business } from "@/lib/content";

/** Outlined twin-peak mark + TRAIL / CONSTRUCTION LTD. wordmark. */
function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label={`${business.name} home`}>
      <BrandMark className="h-9 w-auto text-white" />
      <span className="flex flex-col leading-none">
        <span className="text-xl font-extrabold tracking-tight text-white">
          TRAIL
        </span>
        <span className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-cream-soft">
          Construction Ltd.
        </span>
      </span>
    </a>
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

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-forest-700/60 bg-charcoal/95 backdrop-blur supports-[backdrop-filter]:bg-charcoal/80"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <Logo />

        {/* Desktop links — centered */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[0.95rem] font-medium text-cream transition-colors hover:text-brand-soft"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={nav.cta.href}
            className="inline-flex items-center gap-2.5 rounded-sm bg-forest px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-inset ring-white/10 transition-colors hover:bg-brand"
          >
            {nav.cta.label}
            <Icon name="arrowRight" className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-cream lg:hidden"
        >
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-forest-700/60 bg-charcoal lg:hidden"
      >
        <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-3 text-base font-medium text-cream-soft transition-colors hover:bg-forest-700/40 hover:text-cream"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href={nav.cta.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-md bg-brand px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-hover"
            >
              {nav.cta.label}
              <Icon name="arrowRight" className="h-4 w-4" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
