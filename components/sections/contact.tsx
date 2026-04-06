"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Monitor, Calendar, Armchair, Mail, Instagram } from "lucide-react"

export function ContactSection() {
  const [result, setResult] = useState("")

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setResult("Enviando...")
    const formData = new FormData(event.currentTarget)
    formData.append("access_key", "8d2b4640-7f29-420a-a3fe-ecedd4169927")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })

      const data = await response.json()
      setResult(data.success ? "¡Mensaje enviado con éxito!" : "Ocurrió un error. Por favor intentá nuevamente.")
    } catch (error) {
      setResult("Ocurrió un error. Por favor intentá nuevamente.")
    }
  }

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

          <div className="mt-16 grid md:grid-cols-2 gap-12 text-left">
            <div className="p-8 rounded-2xl bg-muted/30 border border-border/40">
              <h3 className="text-2xl font-serif text-foreground mb-2">Completá el formulario</h3>
              <p className="text-muted-foreground mb-6">
                Dejame tu consulta y te responderé en breve.
              </p>
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Input type="text" name="name" required placeholder="Nombre completo" className="bg-background" />
                </div>
                <div className="space-y-2">
                  <Input type="email" name="email" required placeholder="Correo electrónico" className="bg-background" />
                </div>
                <div className="space-y-2">
                  <Input type="tel" name="phone" required placeholder="Celular" className="bg-background" />
                </div>
                <div className="space-y-2">
                  <Textarea name="message" required placeholder="Tu mensaje..." rows={4} className="bg-background resize-none" />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Enviar mensaje
                </Button>
                {result && (
                  <p className="text-sm font-medium text-center text-foreground mt-4">{result}</p>
                )}
              </form>
            </div>

            <div className="p-8 rounded-2xl bg-secondary/30 border border-border/40 flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-serif text-foreground mb-4">Reservá tu turno</h3>
              <p className="text-muted-foreground mb-8 max-w-sm">
                Conocé mi disponibilidad y agendá una consulta online o presencial en el momento que prefieras.
              </p>
              <Button asChild size="lg" className="px-10 w-full sm:w-auto">
                <Link href="/turnos">Agendar online</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
