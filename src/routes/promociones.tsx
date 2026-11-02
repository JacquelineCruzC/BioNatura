import { createFileRoute, Link } from "@tanstack/react-router";
import { btn, meta, PageHeader } from "@/components/site";

export const Route = createFileRoute("/promociones")({
  head: () => meta("Promociones", "Promociones Bio Natural: martes 3 rellenos por $49 y más ofertas próximamente."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader eyebrow="Ahorra más" title="Promociones" />
      <section className="mx-auto grid max-w-5xl gap-6 px-4 md:grid-cols-2">
        <div className="bg-promo rounded-3xl p-10 text-center text-accent-foreground shadow-glow animate-rise md:col-span-2">
          <p className="font-display text-xl uppercase tracking-widest">Todos los martes</p>
          <p className="mt-2 font-display text-6xl font-bold md:text-8xl">3 × $49</p>
          <p className="mt-2 text-xl font-semibold">3 rellenos por solo $49</p>
          <Link to="/contacto" className={`${btn("ghost")} mt-6`}>Aprovechar</Link>
        </div>
        {[1, 2].map((n) => (
          <div key={n} className="rounded-3xl border-2 border-dashed border-glass-border glass p-8 text-center animate-rise">
            <p className="text-4xl">🎁</p>
            <h3 className="mt-2 text-2xl font-semibold">Próxima promoción</h3>
            <p className="text-foreground/75">Espacio reservado para nuevas ofertas.</p>
          </div>
        ))}
      </section>
    </>
  );
}
