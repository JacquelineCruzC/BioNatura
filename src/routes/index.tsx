import { createFileRoute, Link } from "@tanstack/react-router";
import { Truck, ShieldCheck, Sparkles, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { btn, Card, meta, WHATSAPP_URL } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => meta("Agua purificada a domicilio", "Bio Natural: agua purificada cristalina, fresca y pura, directo a tu puerta. Pide tu garrafón hoy."),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="mx-auto flex min-h-[80vh] max-w-5xl flex-col items-center justify-center px-4 py-16 text-center">
        <img src={logo.url} alt="Bio Natural" className="w-64 rounded-3xl bg-card/90 p-3 animate-float md:w-80" />
        <h1 className="mt-8 text-4xl font-bold leading-tight md:text-6xl animate-rise">
          Agua pura para tu familia, <span className="text-accent">directo a tu puerta</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-foreground/90 animate-rise">
          Purificamos cada garrafón con cuidado, limpieza y sello de calidad. Tú solo pide, nosotros llevamos la frescura.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3 animate-rise">
          <Link to="/contacto" className={btn()}>Pedir ahora</Link>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className={btn("green")}>
            <MessageCircle className="h-5 w-5" /> WhatsApp
          </a>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
        {[
          { i: ShieldCheck, t: "Calidad garantizada", d: "Lavado, llenado, tapa y sello en cada garrafón." },
          { i: Truck, t: "Servicio a domicilio", d: "Llevamos tu agua hasta tu hogar o negocio." },
          { i: Sparkles, t: "Promociones", d: "Martes: 3 rellenos por $49." },
        ].map(({ i: Icon, t, d }) => (
          <Card key={t}>
            <Icon className="h-10 w-10 text-primary" />
            <h3 className="mt-3 text-xl font-semibold">{t}</h3>
            <p className="mt-1 text-muted-foreground">{d}</p>
          </Card>
        ))}
      </section>
      <section className="mx-auto mt-12 max-w-3xl px-4">
        <div className="glass rounded-3xl p-8 text-center">
          <h2 className="text-3xl font-bold">Somos Bio Natural</h2>
          <p className="mt-3 text-foreground/90">
            Un negocio dedicado a la venta y distribución de agua purificada, con atención cercana y familiar.
          </p>
          <Link to="/nosotros" className={`${btn("ghost")} mt-6`}>Conócenos</Link>
        </div>
      </section>
    </>
  );
}
