import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        <a href="#" className="flex items-center gap-2 font-extrabold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient text-white">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            Nova
          </span>
        </a>

        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Nova. Todos os direitos reservados.
        </p>

        <div className="flex gap-6 text-sm text-slate-500">
          <a href="#" className="transition-colors hover:text-brand-purple">
            Privacidade
          </a>
          <a href="#" className="transition-colors hover:text-brand-purple">
            Termos
          </a>
        </div>
      </div>
    </footer>
  );
}
