import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Monitor, Calendar, Armchair, Mail, Instagram } from "lucide-react"

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

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <div className="flex justify-center gap-3">
                  <a 
                    href="mailto:contacto@doctoramenendez.com" 
                    className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center hover:bg-secondary/70 transition-colors"
                    aria-label="Enviar email"
                  >
                    <Mail className="w-6 h-6 text-primary" />
                  </a>
                  <a 
                    href="https://instagram.com/doctora_menendez" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center hover:bg-secondary/70 transition-colors"
                    aria-label="Visitar Instagram"
                  >
                    <Instagram className="w-6 h-6 text-primary" />
                  </a>
                </div>
                <h3 className="mt-4 font-medium text-foreground">Contacto directo</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Podés escribirme por email o Instagram
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-muted/30">
                <div className="flex justify-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center">
                    <Armchair className="w-6 h-6 text-primary" />
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center">
                    <Monitor className="w-6 h-6 text-primary" />
                  </div>
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
            <div className="mt-12 space-y-4">
              <p className="text-2xl md:text-3xl font-serif text-foreground">
                <a href="mailto:contacto@doctoramenendez.com" className="hover:text-primary transition-colors">
                  contacto@doctoramenendez.com
                </a>
              </p>
              <p className="text-xl md:text-2xl font-serif text-muted-foreground">
                <a href="https://instagram.com/doctora_menendez" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  @doctora_menendez
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
