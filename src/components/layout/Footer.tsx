import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin } from "lucide-react";
import { FOOTER_LINKS, PHONE_NUMBERS, COMPANY_ADDRESS, SOCIAL_LINKS } from "@/data/nav";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "./SocialIcons";
import Container from "../ui/Container";

const SOCIAL_ICONS = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  Twitter: TwitterIcon,
};

export default function Footer() {
  return (
    <footer className="bg-metro-grey-900 text-metro-grey-300">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-flex rounded-lg bg-white px-3 py-2">
            <Image
              src="/logo.png"
              alt="Super Metro"
              width={394}
              height={89}
              className="h-8 w-auto"
            />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-metro-grey-300">
            Moving beyond boundaries, one ride at a time.
          </p>
          <Link
            href="/#home"
            className="mt-4 inline-block text-sm font-semibold text-metro-orange-400 hover:text-metro-orange-500"
          >
            About Us
          </Link>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            Quick Links
          </h3>
          <ul className="mt-4 flex flex-col gap-2.5">
            {FOOTER_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-metro-grey-300 hover:text-metro-orange-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            Contact
          </h3>
          <ul className="mt-4 flex flex-col gap-2.5">
            {PHONE_NUMBERS.map((phone) => (
              <li key={phone} className="flex items-center gap-2 text-sm text-metro-grey-300">
                <Phone size={15} className="text-metro-orange-400" />
                <a href={`tel:${phone.replace(/\s+/g, "")}`} className="hover:text-metro-orange-400">
                  {phone}
                </a>
              </li>
            ))}
            <li className="flex items-start gap-2 text-sm text-metro-grey-300">
              <MapPin size={15} className="mt-0.5 shrink-0 text-metro-orange-400" />
              <span>{COMPANY_ADDRESS}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            Find Us On Our Socials
          </h3>
          <div className="mt-4 flex gap-3">
            {SOCIAL_LINKS.map((social) => {
              const Icon = SOCIAL_ICONS[social.label as keyof typeof SOCIAL_ICONS];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-metro-grey-300 transition-colors hover:border-metro-orange-500 hover:bg-metro-orange-500 hover:text-white"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              );
            })}
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-metro-grey-500 sm:flex-row">
          <p>Copyright © Super Metro {new Date().getFullYear()}. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  );
}
