import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MessageCircle, MapPin, Clock, Mail, Banknote } from "lucide-react";
import { btn, meta, PageHeader, WHATSAPP_URL } from "@/components/site";
import { CONTACT, MAP_EMBED_URL, MAP_LINK_URL } from "@/components/contact";


export const Route = createFileRoute("/contacto")({
  head: () => meta("Contacto y pedidos", "Contacta a Bio Natural: teléfono, WhatsApp, dirección, horarios y formulario de pedido."),
  component: Page,
});

const field = "w-full rounded-xl border border-input bg-muted px-4 py-3 text-card-foreground outline-none focus:ring-2 focus:ring-ring";

function Page() {
  const [sent, setSent] = useState(false);
  const info = [
    { i: Phone, t: "Teléfono", d: <a href={CONTACT.phoneTel} className="text-primary underline">{CONTACT.phoneDisplay}</a> },
    { i: MessageCircle, t: "WhatsApp", d: <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="text-primary underline">{CONTACT.whatsappDisplay}</a> },
    { i: Mail, t: "Correo", d: <a href={`mailto:${CONTACT.email}`} className="text-primary underline">{CONTACT.email}</a> },
    { i: MapPin, t: "Dirección", d: <>{CONTACT.addressLine1}<br />{CONTACT.addressLine2}</> },
    { i: Clock, t: "Horarios", d: <>{CONTACT.hoursWeek}<br />{CONTACT.hoursSunday}</> },
    { i: Banknote, t: "Pagos", d: CONTACT.payments },
  ];

  return (
    <>
      <PageHeader eyebrow="Contacto" title="Haz tu pedido o escríbenos" />
      <section className="mx-auto grid max-w-6xl gap-6 px-4 lg:grid-cols-2">
        <div className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            {info.map(({ i: Icon, t, d }) => (
              <div key={t} className="rounded-3xl bg-card/95 p-5 text-card-foreground shadow-glow">
                <Icon className="h-7 w-7 text-primary" />
                <h3 className="mt-2 font-semibold">{t}</h3>
                <div className="text-sm">{d}</div>
              </div>
            ))}
          </div>
          <div className="glass overflow-hidden rounded-3xl p-0">
            <iframe
              title="Mapa de ubicación de Bio Natural"
              src={MAP_EMBED_URL}
              className="h-64 w-full border-0"
              loading="lazy"
            />
            <div className="px-5 py-4 text-center">
              <p className="font-display text-xl">Mapa de ubicación</p>
              <p className="text-foreground/75">{CONTACT.addressFull}</p>
              <a href={MAP_LINK_URL} target="_blank" rel="noreferrer" className="mt-1 inline-block text-primary underline">
                Ver en mapa
              </a>
            </div>
          </div>

        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="grid gap-4 rounded-3xl bg-card/95 p-6 text-card-foreground shadow-glow"
        >
          <h2 className="text-2xl font-bold">Formulario de contacto</h2>
          <input required placeholder="Nombre" className={field} />
          <input required placeholder="Teléfono" className={field} />
          <input placeholder="Dirección de entrega" className={field} />
          <textarea rows={4} placeholder="¿Qué necesitas? Ej. 2 rellenos de 20 L" className={field} />
          <button className={btn()}>{sent ? "¡Gracias! Te contactaremos" : "Enviar"}</button>
        </form>
      </section>
    </>
  );
}
