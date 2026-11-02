import { createFileRoute, Link } from "@tanstack/react-router";
import { btn, meta, PageHeader } from "@/components/site";

export const Route = createFileRoute("/login")({
  head: () => meta("Iniciar sesión", "Accede a tu cuenta de cliente Bio Natural."),
  component: Page,
});

const field = "w-full rounded-xl border border-input bg-muted px-4 py-3 text-card-foreground outline-none focus:ring-2 focus:ring-ring";

function Page() {
  return (
    <>
      <PageHeader eyebrow="Clientes" title="Iniciar sesión" />
      <form onSubmit={(e) => e.preventDefault()} className="mx-auto grid max-w-md gap-4 rounded-3xl bg-card/95 p-6 text-card-foreground shadow-glow">
        <input type="email" placeholder="Correo electrónico" className={field} />
        <input type="password" placeholder="Contraseña" className={field} />
        <button className={btn()}>Entrar</button>
        <p className="text-center text-sm text-muted-foreground">
          ¿No tienes cuenta? <Link to="/registro" className="text-primary underline">Regístrate</Link>
        </p>
      </form>
    </>
  );
}
