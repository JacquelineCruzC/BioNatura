import { createFileRoute, Link } from "@tanstack/react-router";
import { Truck, Store } from "lucide-react";
import { btn, meta, PageHeader } from "@/components/site";

export const Route = createFileRoute("/productos")({
  head: () => meta("Productos y precios", "Precios de rellenos y garrafones Bio Natural a domicilio y en ventanilla."),
  component: Page,
});

const domicilio = [
  { n: "Relleno garrafón 20 L", p: "$18" },
  { n: "Relleno garrafón 10 L", p: "$10" },
  { n: "Garrafón nuevo", p: "Por confirmar" },
  { n: "Garrafón nuevo con agua", p: "$108" },
];
const ventanilla = [
  { n: "Relleno garrafón 20 L", p: "$16" },
  { n: "Relleno garrafón 10 L", p: "$10" },
];

function Group({ icon: Icon, title, items }: { icon: typeof Truck; title: string; items: { n: string; p: string }[] }) {
  return (
    <div className="animate-rise">
      <h2 className="mb-5 flex items-center gap-3 text-3xl font-bold">
        <Icon className="h-8 w-8 text-accent" /> {title}
      </h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((i) => (
          <div key={i.n} className="rounded-3xl bg-card/95 p-6 text-center text-card-foreground shadow-glow transition hover:-translate-y-1">
            <p className="text-5xl">💧</p>
            <h3 className="mt-3 text-lg font-semibold">{i.n}</h3>
            <p className="mt-2 font-display text-4xl font-bold text-primary">{i.p}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Page() {
  return (
    <>
      <PageHeader eyebrow="Precios" title="Productos y precios" text="Precios claros, sin sorpresas." />
      <section className="mx-auto grid max-w-6xl gap-12 px-4">
        <Group icon={Truck} title="Servicio a domicilio" items={domicilio} />
        <Group icon={Store} title="Venta en ventanilla" items={ventanilla} />
        <div className="text-center">
          <Link to="/contacto" className={btn()}>Pedir ahora</Link>
        </div>
      </section>
    </>
  );
}
