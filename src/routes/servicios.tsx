import { createFileRoute } from "@tanstack/react-router";
import { Truck, Store, Headphones, Package } from "lucide-react";
import { Card, meta, PageHeader } from "@/components/site";

export const Route = createFileRoute("/servicios")({
  head: () => meta("Nuestros servicios", "Agua purificada a domicilio, venta en ventanilla, atención a clientes y entrega de garrafones."),
  component: Page,
});

function Page() {
  const s = [
    { i: Truck, t: "Agua a domicilio", d: "Recogemos tus garrafones vacíos y te los entregamos llenos y sellados." },
    { i: Store, t: "Venta en ventanilla", d: "Visítanos y rellena tu garrafón a precio preferencial." },
    { i: Headphones, t: "Atención a clientes", d: "Te atendemos con amabilidad para resolver cualquier duda." },
    { i: Package, t: "Entrega de garrafones", d: "Garrafones nuevos y rellenos listos para tu hogar o negocio." },
  ];
  return (
    <>
      <PageHeader eyebrow="Servicios" title="Todo lo que necesitas en agua" />
      <section className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {s.map(({ i: Icon, t, d }) => (
          <Card key={t} className="text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-water text-primary-foreground">
              <Icon className="h-8 w-8" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">{t}</h3>
            <p className="mt-2 text-muted-foreground">{d}</p>
          </Card>
        ))}
      </section>
    </>
  );
}
