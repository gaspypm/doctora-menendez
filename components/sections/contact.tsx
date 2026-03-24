import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Monitor, Calendar } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Contacto
          </span>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl font-medium text-foreground leading-tight text-balance">
            Comenzá tu camino hacia el bienestar
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Estoy disponible para acompañarte. Podés reservar un turno online o contactarme directamente.
          </p>

          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-muted/30">
              <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center mx-auto">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mt-4 font-medium text-foreground">Ubicación</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Malvín, Montevideo<br />
                Uruguay
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-muted/30">
              <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center mx-auto">
                <Monitor className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mt-4 font-medium text-foreground">Modalidad</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Consultas presenciales<br />
                y virtuales
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-muted/30">
              <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center mx-auto">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mt-4 font-medium text-foreground">Turnos</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Agenda online<br />
                disponible
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Button asChild size="lg" className="px-8">
              <Link href="/turnos">Reservar turno</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
