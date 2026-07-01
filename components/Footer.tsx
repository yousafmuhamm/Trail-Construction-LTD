import Image from "next/image";
import { Icon } from "./Icon";
import { business, nav } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 border-b border-forest-700/60 pb-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <Image
              src="/images/Gold Minimalist Adventure Mountain Logo.svg"
              alt={business.name}
              width={220}
              height={66}
              className="h-14 w-auto"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="mt-4 text-sm leading-relaxed text-cream-soft">
              Structural carpentry done right since {business.foundedYear}. Beams, load-bearing
              walls, framing and additions across {business.serviceArea}.
            </p>
          </div>

          {/* Quick links + contact */}
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <nav aria-label="Footer">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-soft">
                Explore
              </h2>
              <ul className="mt-4 space-y-2.5">
                {nav.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-cream-soft transition-colors hover:text-cream"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-soft">
                Contact
              </h2>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href={business.phoneHref}
                    className="flex items-center gap-2 text-sm text-cream-soft transition-colors hover:text-cream"
                  >
                    <Icon name="phone" className="h-4 w-4 text-brand-soft" />
                    {business.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={business.emailHref}
                    className="flex items-center gap-2 text-sm text-cream-soft transition-colors hover:text-cream"
                  >
                    <Icon name="mail" className="h-4 w-4 text-brand-soft" />
                    {business.email}
                  </a>
                </li>
                <li className="flex items-center gap-2 text-sm text-cream-soft">
                  <Icon name="pin" className="h-4 w-4 text-brand-soft" />
                  {business.serviceArea}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-8 text-xs text-cream-soft">
          © {year} {business.name} · All rights reserved.
        </p>
      </div>
    </footer>
  );
}
