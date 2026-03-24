import { Calendar, ClipboardList, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Calendar,
    step: "01",
    title: "Elegí un horario disponible",
    description: "Explorá la agenda online y seleccioná el día y horario que mejor se adapte a tu rutina."
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Completá tus datos",
    description: "Proporcioná tu información de contacto y un breve motivo de consulta para preparar la cita."
  },
  {
    icon: CheckCircle,
    step: "03",
    title: "Recibí confirmación",
    description: "Te llegará un mensaje con la confirmación del turno e indicaciones para la consulta."
  }
]

export function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Cómo son las consultas
          </span>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl font-medium text-foreground leading-tight text-balance">
            Reservar es muy sencillo
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            En tres simples pasos podés coordinar tu primera consulta, ya sea de forma presencial en Malvín o virtual.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-px bg-border" />
              )}
              
              <div className="text-center">
                <div className="relative inline-flex">
                  <div className="w-24 h-24 rounded-full bg-background border-2 border-secondary flex items-center justify-center shadow-sm">
                    <item.icon className="w-10 h-10 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-medium flex items-center justify-center">
                    {item.step}
                  </span>
                </div>
                <h3 className="mt-6 font-medium text-lg text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
