import { Sparkles } from "lucide-react";

const links = [
  { label: "Recursos", href: "#recursos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 text-xl font-extrabold">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient text-white">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            Nova
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-purple"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className="rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-purple/20 transition-transform hover:scale-105"
        >
          Começar agora
        </a>
      </nav>
    </header>
  );
}
