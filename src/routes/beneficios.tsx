import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Tag, History, RotateCcw, HeartHandshake } from "lucide-react";
import { btn, Card, meta, PageHeader } from "@/components/site";

export const Route = createFileRoute("/beneficios")({
  head: () => meta("Beneficios", "Cliente frecuente, promociones especiales, historial de pedidos y más beneficios Bio Natural."),
  component: Page,
});

function Page() {
  const b = [
    { i: Award, t: "Cliente frecuente", d: "Acumula pedidos y obtén recompensas." },
    { i: Tag, t: "Promociones especiales", d: "Ofertas exclusivas para clientes registrados." },
    { i: History, t: "Historial de pedidos", d: "Consulta todos tus pedidos en tu cuenta." },
    { i: RotateCcw, t: "Vuelve a pedir fácil", d: "Repite tu pedido con un solo clic." },
    { i: HeartHandshake, t: "Atención cercana", d: "Trato amable y confiable siempre." },
  ];
  return (
    <>
      <PageHeader eyebrow="Para ti" title="Beneficios para clientes" />
      <section className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {b.map(({ i: Icon, t, d }) => (
          <Card key={t}>
            <Icon className="h-10 w-10 text-secondary" />
            <h3 className="mt-3 text-xl font-semibold">{t}</h3>
            <p className="text-muted-foreground">{d}</p>
          </Card>
        ))}
      </section>
      <div className="mt-10 text-center">
        <Link to="/registro" className={btn()}>Crear mi cuenta</Link>
      </div>
    </>
  );
}
