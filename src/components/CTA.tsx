import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="contato" className="mx-auto max-w-6xl px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl bg-brand-gradient px-8 py-16 text-center shadow-2xl shadow-brand-purple/30 md:px-16">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

        <h2 className="relative text-3xl font-extrabold text-white md:text-4xl">
          Pronto para colocar sua ideia no ar?
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-lg text-white/80">
          Junte-se a milhares de pessoas que já lançaram seus projetos com a Nova.
        </p>

        <form className="relative mx-auto mt-10 flex max-w-lg flex-col gap-4 text-left">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex-1">
              <label htmlFor="nome" className="mb-1.5 block text-sm font-medium text-white/90">
                Nome
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                required
                placeholder="Seu nome completo"
                className="w-full rounded-xl border-0 px-5 py-3.5 text-slate-800 outline-none ring-2 ring-transparent placeholder:text-slate-400 focus:ring-white/50"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="telefone" className="mb-1.5 block text-sm font-medium text-white/90">
                Telefone
              </label>
              <input
                id="telefone"
                name="telefone"
                type="tel"
                required
                placeholder="(00) 00000-0000"
                className="w-full rounded-xl border-0 px-5 py-3.5 text-slate-800 outline-none ring-2 ring-transparent placeholder:text-slate-400 focus:ring-white/50"
              />
            </div>
          </div>

          <div>
            <label htmlFor="mensagem" className="mb-1.5 block text-sm font-medium text-white/90">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              required
              rows={4}
              placeholder="Como podemos ajudar?"
              className="w-full resize-none rounded-xl border-0 px-5 py-3.5 text-slate-800 outline-none ring-2 ring-transparent placeholder:text-slate-400 focus:ring-white/50"
            />
          </div>

          <button
            type="submit"
            className="group mt-2 flex items-center justify-center gap-2 self-center rounded-full bg-white px-8 py-3.5 font-semibold text-brand-purple transition-transform hover:scale-105"
          >
            Enviar
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      </div>
    </section>
  );
}
