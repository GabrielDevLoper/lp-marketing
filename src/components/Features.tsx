import { Zap, ShieldCheck, Smartphone, LineChart } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Ultra rápido",
    description:
      "Construído sobre Next.js com renderização otimizada para carregar em milissegundos.",
  },
  {
    icon: Smartphone,
    title: "Totalmente responsivo",
    description:
      "Layout perfeito em qualquer tela — do celular ao desktop, sem esforço.",
  },
  {
    icon: ShieldCheck,
    title: "Seguro por padrão",
    description:
      "Boas práticas de segurança integradas para proteger seus dados e usuários.",
  },
  {
    icon: LineChart,
    title: "Pronto para escalar",
    description:
      "Uma base sólida que cresce junto com o seu negócio, sem retrabalho.",
  },
];

export function Features() {
  return (
    <section id="recursos" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
          Tudo que você precisa em um só lugar
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Recursos pensados para você lançar rápido e com qualidade.
        </p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-purple/30 hover:shadow-xl hover:shadow-brand-purple/10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white transition-transform group-hover:scale-110">
              <feature.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
