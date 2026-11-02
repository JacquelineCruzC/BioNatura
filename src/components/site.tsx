import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, MessageCircle, Droplets } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import fondo from "@/assets/fondo.jpeg.asset.json";

export const WHATSAPP_URL = "https://wa.me/"; // TODO: agregar número de WhatsApp

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/servicios", label: "Servicios" },
  { to: "/productos", label: "Precios" },
  { to: "/promociones", label: "Promociones" },
  { to: "/como-funciona", label: "Cómo funciona" },
  { to: "/beneficios", label: "Beneficios" },
  { to: "/preguntas", label: "Preguntas" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function btn(kind: "primary" | "ghost" | "green" = "primary") {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-base font-semibold transition hover:scale-105";
  if (kind === "ghost") return `${base} glass text-foreground`;
  if (kind === "green") return `${base} bg-secondary text-secondary-foreground shadow-glow`;
  return `${base} bg-water text-primary-foreground shadow-glow`;
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative min-h-screen">
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${fondo.url})` }}
      />
      <div className="fixed inset-0 -z-10 bg-deep/45" />
      <header className="sticky top-0 z-40 glass border-x-0 border-t-0">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2">
          <Link to="/" className="shrink-0">
            <img src={logo.url} alt="Bio Natural" className="h-14 w-auto rounded-xl bg-card/90 px-2" />
          </Link>
          <nav className="hidden gap-1 xl:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: true }}
                className="rounded-full px-3 py-2 text-sm font-semibold text-foreground/85 transition hover:bg-primary/20"
                activeProps={{ className: "bg-primary/30 text-foreground" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-2 lg:flex">
            <Link to="/login" className="px-3 text-sm font-semibold hover:text-accent">Iniciar sesión</Link>
            <Link to="/registro" className="px-3 text-sm font-semibold hover:text-accent">Registrarse</Link>
            <Link to="/contacto" className={btn()}>Pedir ahora</Link>
          </div>
          <button className="xl:hidden" onClick={() => setOpen(!open)} aria-label="Menú">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav className="grid gap-1 px-4 pb-4 xl:hidden">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 font-semibold hover:bg-primary/20">
                {n.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-wrap gap-2">
              <Link to="/login" onClick={() => setOpen(false)} className={btn("ghost")}>Iniciar sesión</Link>
              <Link to="/registro" onClick={() => setOpen(false)} className={btn("ghost")}>Registrarse</Link>
              <Link to="/contacto" onClick={() => setOpen(false)} className={btn()}>Pedir ahora</Link>
            </div>
          </nav>
        )}
      </header>
      <main>{children}</main>
      <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-secondary text-secondary-foreground shadow-glow animate-float">
        <MessageCircle />
      </a>
      <footer className="glass mt-16 border-x-0 border-b-0">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 py-8 text-center text-sm text-foreground/80">
          <Droplets className="text-primary" />
          <p className="font-display text-lg">Bio Natural · Cristalina · Fresca · Pura</p>
          <p>© {new Date().getFullYear()} Bio Natural. Agua purificada a domicilio.</p>
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <section className="mx-auto max-w-4xl px-4 pt-16 pb-10 text-center animate-rise">
      <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
      <h1 className="mt-3 text-4xl font-bold md:text-6xl">{title}</h1>
      {text && <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/85">{text}</p>}
    </section>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl bg-card/95 p-6 text-card-foreground shadow-glow transition hover:-translate-y-1 animate-rise ${className}`}>
      {children}
    </div>
  );
}

export function Editable({ children }: { children: ReactNode }) {
  return <span className="rounded-md border border-dashed border-primary px-2 text-muted-foreground">{children}</span>;
}

export function meta(title: string, description: string) {
  return {
    meta: [
      { title: `${title} | Bio Natural` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} | Bio Natural` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
