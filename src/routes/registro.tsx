import { createFileRoute, Link } from "@tanstack/react-router";
import { btn, meta, PageHeader } from "@/components/site";

export const Route = createFileRoute("/registro")({
  head: () => meta("Registrarse", "Crea tu cuenta Bio Natural y disfruta de beneficios para clientes."),
  component: Page,
});

const field = "w-full rounded-xl border border-input bg-muted px-4 py-3 text-card-foreground outline-none focus:ring-2 focus:ring-ring";

function Page() {
  return (
    <>
      <PageHeader eyebrow="Clientes" title="Crear cuenta" />
      <form onSubmit={(e) => e.preventDefault()} className="mx-auto grid max-w-md gap-4 rounded-3xl bg-card/95 p-6 text-card-foreground shadow-glow">
        <input placeholder="Nombre completo" className={field} />
        <input placeholder="Teléfono" className={field} />
        <input type="email" placeholder="Correo electrónico" className={field} />
        <input type="password" placeholder="Contraseña" className={field} />
        <button className={btn()}>Registrarme</button>
        <p className="text-center text-sm text-muted-foreground">
          ¿Ya tienes cuenta? <Link to="/login" className="text-primary underline">Inicia sesión</Link>
        </p>
      </form>
    </>
  );
}
