import CheckoutButton from "@/components/checkout/CheckoutButton";

export default function CTAFinal() {
  return (
    <section className="relative overflow-hidden bg-background-soft py-24 text-white md:py-36">
      {/* Accent glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[400px] w-[600px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10 lg:px-16 tv4k:max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">
          Joker Wrap Tools
        </p>

        <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl tv4k:text-6xl">
          Eleve seu padrão.
          <br />
          <span className="text-accent">Escolha as melhores ferramentas.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-body-fluid text-gray-300">
          Profissionais que trabalham com perfeicão não escolhem ferramentas comuns.
          A Joker foi construída para quem quer resultados que falam por si.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 totem-cta">
          <CheckoutButton
            productId="HERO_TOOL_ID"
            variantId="DEFAULT"
            size="large"
          >
            Comprar agora
          </CheckoutButton>

          <a
            href="mailto:contato@jokerwraptools.com.br"
            className="rounded-full border border-gray-700 px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-gray-300 transition-all hover:border-accent/50 hover:text-accent"
          >
            Falar com a Joker
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-16 grid grid-cols-3 gap-6 border-t border-gray-800 pt-10 md:grid-cols-3">
          {[
            { value: "500+", label: "Profissionais ativos" },
            { value: "4.9★", label: "Avaliacao média" },
            { value: "3 anos", label: "De experiência no mercado" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-semibold text-accent md:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs text-gray-500 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-10 font-mono text-xs text-gray-600">
          &copy; {new Date().getFullYear()} Joker Wrap Tools. Todos os direitos reservados.
        </p>
      </div>
    </section>
  );
}
