import { createFileRoute } from "@tanstack/react-router";
import { meta, PageHeader } from "@/components/site";

export const Route = createFileRoute("/preguntas")({
  head: () => meta("Preguntas frecuentes", "Resolvemos tus dudas sobre pedidos, precios, garrafones, pagos y promociones de Bio Natural."),
  component: Page,
});

const faqs = [
  ["¿Cómo solicito un pedido?", "Desde el botón “Pedir ahora”, por WhatsApp o llamándonos por teléfono."],
  ["¿Cuánto cuesta el servicio a domicilio?", "Relleno de 20 L a $18 y de 10 L a $10. Garrafón nuevo con agua a $108."],
  ["¿Qué tamaños de garrafón manejan?", "Garrafones de 20 litros y de 10 litros."],
  ["¿Qué métodos de pago aceptan?", "Métodos de pago por confirmar."],
  ["¿Cómo funcionan las promociones?", "Se aplican el día indicado. Por ejemplo, los martes: 3 rellenos por $49."],
  ["¿Cómo funciona el programa de cliente frecuente?", "Regístrate y acumula pedidos para obtener beneficios. Detalles por confirmar."],
];

function Page() {
  return (
    <>
      <PageHeader eyebrow="Dudas" title="Preguntas frecuentes" />
      <section className="mx-auto grid max-w-3xl gap-3 px-4">
        {faqs.map(([q, a]) => (
          <details key={q} className="group rounded-2xl bg-card/95 p-5 text-card-foreground shadow-glow animate-rise">
            <summary className="flex cursor-pointer list-none items-center justify-between font-display text-lg font-semibold">
              {q}
              <span className="text-2xl text-primary transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-muted-foreground">{a}</p>
          </details>
        ))}
      </section>
    </>
  );
}
