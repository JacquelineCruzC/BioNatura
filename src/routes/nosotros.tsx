import { createFileRoute } from "@tanstack/react-router";
import { Heart, Target, Droplet, Users } from "lucide-react";
import { Card, meta, PageHeader } from "@/components/site";

export const Route = createFileRoute("/nosotros")({
  head: () => meta("Nosotros", "Conoce la historia, misión y compromiso de Bio Natural con el agua purificada."),
  component: Page,
});

function Page() {
  const items = [
    { i: Droplet, t: "Nuestra historia", d: "Bio Natural nació en un pequeño local del centro con una sola idea: que el agua que toma tu familia sea tan buena como la que tomaríamos nosotros. Empezamos llenando unos cuantos garrafones al día y hoy surtimos a cientos de hogares y negocios, con el mismo cuidado en cada lavado, llenado y sello." },
    { i: Users, t: "Quiénes somos", d: "Un equipo comprometido con llevar agua purificada de calidad a cada hogar, con trato cercano y confiable." },
    { i: Target, t: "Misión", d: "Ofrecer agua purificada cristalina, fresca y pura, con un servicio puntual que haga la vida más fácil a nuestros clientes." },
    { i: Heart, t: "Por qué importa", d: "El agua es salud. Purificarla bien y entregarla con higiene protege a tu familia todos los días." },
  ];
  return (
    <>
      <PageHeader eyebrow="Nosotros" title="Pureza que nace del compromiso" />
      <section className="mx-auto grid max-w-5xl gap-6 px-4 md:grid-cols-2">
        {items.map(({ i: Icon, t, d }) => (
          <Card key={t}>
            <Icon className="h-9 w-9 text-secondary" />
            <h3 className="mt-3 text-2xl font-semibold">{t}</h3>
            <p className="mt-2 text-muted-foreground">{d}</p>
          </Card>
        ))}
      </section>
    </>
  );
}
