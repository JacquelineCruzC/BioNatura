import { createFileRoute } from "@tanstack/react-router";
import { meta, PageHeader } from "@/components/site";

export const Route = createFileRoute("/como-funciona")({
  head: () => meta("Cómo funciona", "Así funciona el servicio de agua a domicilio de Bio Natural, paso a paso."),
  component: Page,
});

const steps = [
  ["📱", "Haces tu pedido", "Solicita tu agua por la página o WhatsApp."],
  ["🗂️", "Organizamos tu solicitud", "Recibimos y programamos tu pedido."],
  ["🙋", "Un repartidor lo acepta", "Asignamos a un repartidor de confianza."],
  ["🚚", "Recogemos tus garrafones", "Pasamos por tus garrafones vacíos."],
  ["🧼", "Lavado, llenado y sello", "Lavamos, llenamos, tapamos y sellamos."],
  ["💧", "Entrega de garrafones", "Te entregamos tus garrafones llenos."],
  ["💵", "Realizas tu pago", "Pagas al recibir. ¡Listo!"],
];

function Page() {
  return (
    <>
      <PageHeader eyebrow="Servicio a domicilio" title="¿Cómo funciona?" text="Siete pasos sencillos para tener agua pura en casa." />
      <ol className="mx-auto grid max-w-3xl gap-4 px-4">
        {steps.map(([e, t, d], i) => (
          <li key={t} className="flex items-center gap-5 rounded-3xl bg-card/95 p-5 text-card-foreground shadow-glow animate-rise" style={{ animationDelay: `${i * 80}ms` }}>
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-water font-display text-2xl font-bold text-primary-foreground">{i + 1}</span>
            <div className="min-w-0">
              <h3 className="text-xl font-semibold">{e} {t}</h3>
              <p className="text-muted-foreground">{d}</p>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}
