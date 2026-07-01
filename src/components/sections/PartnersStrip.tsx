import { Zap, Bus, Wrench, ShieldCheck, BadgeCheck } from "lucide-react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

const PARTNERS = [
  { name: "BasiGo", role: "Electric Fleet Partner", Icon: Zap },
  { name: "BYD", role: "Bus Manufacturer", Icon: Bus },
  { name: "KVM Kenya", role: "Local Assembly Partner", Icon: Wrench },
  { name: "NTSA", role: "PSV Licensed", Icon: ShieldCheck },
  { name: "SASRA", role: "SACCO Registered", Icon: BadgeCheck },
] as const;

export default function PartnersStrip() {
  return (
    <section className="border-y border-metro-grey-100 bg-white py-14">
      <Container>
        <Reveal>
          <p className="mb-10 text-center text-[10px] font-heading font-semibold uppercase tracking-[0.22em] text-metro-grey-400">
            In partnership with &amp; licensed under
          </p>
        </Reveal>
        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 lg:gap-20">
          {PARTNERS.map(({ name, role, Icon }, i) => (
            <Reveal key={name} delay={i * 0.06}>
              <div className="group flex flex-col items-center gap-2 opacity-40 transition-opacity duration-300 hover:opacity-100">
                <Icon
                  size={20}
                  className="text-metro-navy-700 transition-colors duration-300 group-hover:text-metro-orange-500"
                />
                <p className="font-heading text-sm font-bold tracking-wide text-metro-navy-800">
                  {name}
                </p>
                <p className="text-[10px] uppercase tracking-[0.14em] text-metro-grey-400">
                  {role}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
