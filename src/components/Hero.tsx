import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* blobs decorativos */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-purple/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-32 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl" />

      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center md:py-32">
        <span className="animate-fade-up rounded-full border border-brand-purple/20 bg-brand-purple/5 px-4 py-1.5 text-sm font-medium text-brand-purple">
          ✨ Novo · Construa e publique em minutos
        </span>

        <h1 className="mt-6 max-w-3xl animate-fade-up text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
          Sua ideia no ar com um design{" "}
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            moderno e rápido
          </span>
        </h1>

        <p className="mt-6 max-w-xl animate-fade-up text-lg text-slate-600">
          Uma landing page elegante, responsiva e pronta para converter.
          Feita com Next.js e Tailwind CSS para máxima performance.
        </p>

        <div className="mt-10 flex animate-fade-up flex-col items-center gap-4 sm:flex-row">
          <a
            href="#contato"
            className="group flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 font-semibold text-white shadow-xl shadow-brand-purple/25 transition-transform hover:scale-105"
          >
            Começar gratuitamente
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#como-funciona"
            className="flex items-center gap-2 rounded-full border border-slate-200 px-7 py-3.5 font-semibold text-slate-700 transition-colors hover:border-brand-blue hover:text-brand-blue"
          >
            <Play className="h-4 w-4" />
            Ver demonstração
          </a>
        </div>

        <div className="mt-14 flex animate-fade-up items-center gap-8 text-sm text-slate-500">
          <div>
            <span className="block text-2xl font-bold text-slate-900">10k+</span>
            usuários ativos
          </div>
          <div className="h-10 w-px bg-slate-200" />
          <div>
            <span className="block text-2xl font-bold text-slate-900">99.9%</span>
            de disponibilidade
          </div>
          <div className="h-10 w-px bg-slate-200" />
          <div>
            <span className="block text-2xl font-bold text-slate-900">4.9★</span>
            avaliação média
          </div>
        </div>
      </div>
    </section>
  );
}
