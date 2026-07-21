const steps = [
  {
    number: "01",
    title: "Crie sua conta",
    description: "Cadastre-se em segundos, sem cartão de crédito.",
  },
  {
    number: "02",
    title: "Personalize",
    description: "Ajuste cores, textos e conteúdo do seu jeito.",
  },
  {
    number: "03",
    title: "Publique",
    description: "Coloque no ar com um clique e comece a converter.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
            Comece em 3 passos simples
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Do zero ao ar rapidamente, sem complicação.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gradient text-xl font-bold text-white shadow-lg shadow-brand-blue/20">
                {step.number}
              </span>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
